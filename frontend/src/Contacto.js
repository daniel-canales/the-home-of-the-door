import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Contacto() {
  return (
    <Container className="mt-4">
      <h2 className="mb-3">Contacto</h2>
      <p>Puede comunicarse con nosotros por cualquiera de los siguientes medios.</p>

      <Row>
        <Col md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Información de contacto</Card.Title>
              <p><strong>Dirección:</strong> Colonia Cerro Grande, Zona 5, carretera principal hacia Olancho, Tegucigalpa, Honduras</p>
              <p><strong>Teléfono:</strong> <a href="tel:+50499560720">+504 9956-0720</a></p>
              <p><strong>WhatsApp:</strong> <a href="https://wa.me/message/https://wa.me/50499560720" target="_blank" rel="noreferrer">Escríbenos por WhatsApp</a></p>
              <p><strong>Correo:</strong> josesantoscanalescanales@gmail.com</p>
              <p><strong>Horario:</strong> Lunes a viernes 8:00 a.m. – 5:00 p.m. | Sábados 8:00 a.m. – 12:00 p.m.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacto;