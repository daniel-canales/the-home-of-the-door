import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

function Servicios() {
  return (
    <Container className="mt-4">
      <h2 className="mb-3">Nuestros Servicios</h2>
      <p>Fabricamos cualquier tipo de mueble de madera según las especificaciones del cliente.</p>

      <Row className="mb-4">
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Cocinas Integrales</Card.Title>
              <Card.Text>Diseño y fabricación de cocinas completas adaptadas al espacio disponible. Incluye gabinetes superiores e inferiores, cajones y acabados a elección.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Clósets y Roperos</Card.Title>
              <Card.Text>Clósets empotrados o independientes con distribución interna personalizada. Opciones con puertas corredizas, abatibles o sin puertas.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Puertas y Ventanas</Card.Title>
              <Card.Text>Fabricación de puertas de madera para interiores y exteriores. Diferentes modelos: lisas, con molduras, con vidrio decorativo.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Muebles de Sala y Comedor</Card.Title>
              <Card.Text>Mesas, sillas, vitrinas, aparadores y otros muebles para sala y comedor bajo pedido.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Mobiliario de Oficina</Card.Title>
              <Card.Text>Escritorios, archiveros, libreros y estaciones de trabajo adaptadas a espacios corporativos o de trabajo en casa.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Proyectos Especiales</Card.Title>
              <Card.Text>Cualquier otro tipo de proyecto en madera que el cliente requiera. Consúltenos sin compromiso.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h4 className="mb-3">Materiales disponibles</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Material</th>
            <th>Características</th>
            <th>Uso recomendado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Madera sólida</td>
            <td>Alta durabilidad, aspecto natural, acabado fino</td>
            <td>Puertas, muebles de lujo, proyectos especiales</td>
          </tr>
          <tr>
            <td>MDF</td>
            <td>Superficie lisa, fácil de pintar, económico</td>
            <td>Cocinas, clósets, muebles pintados</td>
          </tr>
          <tr>
            <td>Melamina</td>
            <td>Resistente a la humedad, variedad de colores</td>
            <td>Cocinas, clósets, mobiliario de oficina</td>
          </tr>
          <tr>
            <td>Mixto</td>
            <td>Combina materiales según la parte del mueble</td>
            <td>Proyectos que requieren economía y resistencia</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Servicios;