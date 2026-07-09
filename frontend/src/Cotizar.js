import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cotizar() {
  const [formulario, setFormulario] = useState({
    nombre: '', telefono: '', correo: '', ciudad: '',
    tipo_mueble: '', material: '', dimensiones: '',
    descripcion: '', presupuesto: '', plazo: ''
  });
  const [mensaje, setMensaje] = useState('');

  const manejarCambio = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/cotizaciones', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formulario)
    })
      .then(res => res.json())
      .then(() => {
        setMensaje('Solicitud enviada correctamente. Nos pondremos en contacto pronto.');
        setFormulario({
          nombre: '', telefono: '', correo: '', ciudad: '',
          tipo_mueble: '', material: '', dimensiones: '',
          descripcion: '', presupuesto: '', plazo: ''
        });
      });
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-3">Solicitar Cotización</h2>
      <p>Complete el formulario con los detalles de su proyecto.</p>

      {mensaje && <Alert variant="success">{mensaje}</Alert>}

      <Form onSubmit={manejarEnvio}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control type="text" name="nombre" value={formulario.nombre} onChange={manejarCambio} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control type="tel" name="telefono" value={formulario.telefono} onChange={manejarCambio} required />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" name="correo" value={formulario.correo} onChange={manejarCambio} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control type="text" name="ciudad" value={formulario.ciudad} onChange={manejarCambio} />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Tipo de mueble</Form.Label>
              <Form.Select name="tipo_mueble" value={formulario.tipo_mueble} onChange={manejarCambio} required>
                <option value="">-- Seleccione --</option>
                <option value="cocina">Cocina integral</option>
                <option value="closet">Clóset</option>
                <option value="puerta">Puerta</option>
                <option value="oficina">Mueble de oficina</option>
                <option value="sala">Mueble de sala/comedor</option>
                <option value="otro">Otro</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Material preferido</Form.Label>
              <Form.Select name="material" value={formulario.material} onChange={manejarCambio}>
                <option value="">-- Seleccione --</option>
                <option value="madera_solida">Madera sólida</option>
                <option value="mdf">MDF</option>
                <option value="melamina">Melamina</option>
                <option value="mixto">Mixto</option>
                <option value="no_se">No lo sé aún</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Dimensiones aproximadas</Form.Label>
          <Form.Control type="text" name="dimensiones" value={formulario.dimensiones} onChange={manejarCambio} placeholder="Ej: 3m x 2.5m x 0.6m" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descripción del proyecto</Form.Label>
          <Form.Control as="textarea" rows={4} name="descripcion" value={formulario.descripcion} onChange={manejarCambio} />
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Presupuesto aproximado (opcional)</Form.Label>
              <Form.Control type="text" name="presupuesto" value={formulario.presupuesto} onChange={manejarCambio} placeholder="Ej: L. 15,000" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Plazo deseado de entrega</Form.Label>
              <Form.Control type="text" name="plazo" value={formulario.plazo} onChange={manejarCambio} placeholder="Ej: 2 meses" />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="dark" type="submit">Enviar solicitud</Button>
      </Form>
    </Container>
  );
}

export default Cotizar;