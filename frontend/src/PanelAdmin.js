import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Alert from 'react-bootstrap/Alert';

function PanelAdmin({ setUsuario, setPagina }) {
  const [cotizaciones, setCotizaciones] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [seleccionada, setSeleccionada] = useState(null);
  const [respuesta, setRespuesta] = useState('');
  const [nuevoEstado, setNuevoEstado] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    cargarCotizaciones();
    cargarUsuarios();
  }, []);

  const cargarCotizaciones = async () => {
    const res = await fetch('http://localhost:5000/api/cotizaciones');
    const data = await res.json();
    setCotizaciones(data);
  };

  const cargarUsuarios = async () => {
    const res = await fetch('http://localhost:5000/api/usuarios');
    const data = await res.json();
    setUsuarios(data);
  };

  const abrirModal = (cotizacion) => {
    setSeleccionada(cotizacion);
    setNuevoEstado(cotizacion.estado);
    setRespuesta(cotizacion.respuesta || '');
    setShowModal(true);
  };

  const guardarCambios = async () => {
    await fetch(`http://localhost:5000/api/cotizaciones/${seleccionada._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ estado: nuevoEstado, respuesta })
    });
    setShowModal(false);
    setMensaje(`Solicitud actualizada. Respuesta enviada al correo ${seleccionada.correo} (simulado).`);
    setTimeout(() => setMensaje(''), 4000);
    cargarCotizaciones();
  };

  const colorEstado = (estado) => {
    if (estado === 'No iniciada') return 'secondary';
    if (estado === 'Iniciada') return 'primary';
    if (estado === 'En Proceso') return 'warning';
    if (estado === 'Finalizada') return 'success';
    return 'secondary';
  };

  const cerrarSesion = () => {
    setUsuario(null);
    setPagina('inicio');
  };

  const totalPorEstado = (estado) => cotizaciones.filter(c => c.estado === estado).length;

  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Panel de Administración</h2>
        <Button variant="outline-dark" onClick={cerrarSesion}>Cerrar sesión</Button>
      </div>

      {mensaje && <Alert variant="success">{mensaje}</Alert>}

      <Tabs defaultActiveKey="cotizaciones" className="mb-3">

        <Tab eventKey="cotizaciones" title="Cotizaciones">
          <h4>Solicitudes recibidas</h4>
          {cotizaciones.length === 0 ? (
            <p className="text-muted">No hay solicitudes aún.</p>
          ) : (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Tipo de mueble</th>
                  <th>Fecha</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {cotizaciones.map(c => (
                  <tr key={c._id}>
                    <td>{c.nombre}</td>
                    <td>{c.correo}</td>
                    <td>{c.tipo_mueble}</td>
                    <td>{new Date(c.fecha).toLocaleDateString()}</td>
                    <td><Badge bg={colorEstado(c.estado)}>{c.estado}</Badge></td>
                    <td>
                      <Button variant="dark" size="sm" onClick={() => abrirModal(c)}>
                        Gestionar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Tab>

        <Tab eventKey="reporte_cotizaciones" title="Reporte de cotizaciones">
          <h4>Reporte de solicitudes por estado</h4>
          <Table bordered>
            <thead>
              <tr>
                <th>Estado</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>No iniciada</td><td>{totalPorEstado('No iniciada')}</td></tr>
              <tr><td>Iniciada</td><td>{totalPorEstado('Iniciada')}</td></tr>
              <tr><td>En Proceso</td><td>{totalPorEstado('En Proceso')}</td></tr>
              <tr><td>Finalizada</td><td>{totalPorEstado('Finalizada')}</td></tr>
              <tr><td><strong>Total</strong></td><td><strong>{cotizaciones.length}</strong></td></tr>
            </tbody>
          </Table>
        </Tab>

        <Tab eventKey="reporte_clientes" title="Reporte de clientes">
          <h4>Clientes registrados</h4>
          {usuarios.length === 0 ? (
            <p className="text-muted">No hay clientes registrados aún.</p>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Fecha de registro</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map(u => (
                  <tr key={u._id}>
                    <td>{u.nombre}</td>
                    <td>{u.correo}</td>
                    <td>{new Date(u.fecha).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Tab>

      </Tabs>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Gestionar solicitud — {seleccionada?.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {seleccionada && (
            <>
              <p><strong>Correo:</strong> {seleccionada.correo}</p>
              <p><strong>Tipo de mueble:</strong> {seleccionada.tipo_mueble}</p>
              <p><strong>Material:</strong> {seleccionada.material}</p>
              <p><strong>Descripción:</strong> {seleccionada.descripcion}</p>
              <p><strong>Presupuesto:</strong> {seleccionada.presupuesto}</p>
              <p><strong>Plazo:</strong> {seleccionada.plazo}</p>

              <Form.Group className="mb-3">
                <Form.Label>Estado de la solicitud</Form.Label>
                <Form.Select value={nuevoEstado} onChange={e => setNuevoEstado(e.target.value)}>
                  <option value="No iniciada">No iniciada</option>
                  <option value="Iniciada">Iniciada</option>
                  <option value="En Proceso">En Proceso</option>
                  <option value="Finalizada">Finalizada</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Respuesta al cliente (se enviará vía email simulado)</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  value={respuesta}
                  onChange={e => setRespuesta(e.target.value)}
                  placeholder="Escriba su respuesta al cliente..."
                />
              </Form.Group>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancelar</Button>
          <Button variant="dark" onClick={guardarCambios}>Guardar y enviar respuesta</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default PanelAdmin;