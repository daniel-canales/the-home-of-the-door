import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function PanelCliente({ usuario, setPagina, setUsuario }) {
  const [cotizaciones, setCotizaciones] = useState([]);

  useEffect(() => {
    if (usuario?.correo) {
      fetch(`http://localhost:5000/api/cotizaciones/cliente/${usuario.correo}`)
        .then(res => res.json())
        .then(data => setCotizaciones(data));
    }
  }, [usuario]);

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

  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Bienvenido, {usuario?.nombre}</h2>
        <Button variant="outline-dark" onClick={cerrarSesion}>Cerrar sesión</Button>
      </div>

      <h4>Mis solicitudes de cotización</h4>

      {cotizaciones.length === 0 ? (
        <Alert variant="info">No tiene solicitudes registradas aún. <span style={{ cursor: 'pointer', color: 'blue' }} onClick={() => setPagina('cotizar')}>Solicitar cotización</span></Alert>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Tipo de mueble</th>
              <th>Material</th>
              <th>Descripción</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th>Respuesta del taller</th>
            </tr>
          </thead>
          <tbody>
            {cotizaciones.map(c => (
              <tr key={c._id}>
                <td>{c.tipo_mueble}</td>
                <td>{c.material}</td>
                <td>{c.descripcion}</td>
                <td>{new Date(c.fecha).toLocaleDateString()}</td>
                <td><Badge bg={colorEstado(c.estado)}>{c.estado}</Badge></td>
                <td>{c.respuesta || <span className="text-muted">Pendiente</span>}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <Button variant="dark" className="mt-2" onClick={() => setPagina('cotizar')}>
        Nueva solicitud
      </Button>
    </Container>
  );
}

export default PanelCliente;