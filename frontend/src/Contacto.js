import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Contacto() {
  const numeroWhatsApp = '50499560720';
  const mensaje = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios.');
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

  return (
    <Container className="mt-4">
      <h2 className="mb-3">Contacto</h2>
      <p>Puede comunicarse con nosotros directamente por WhatsApp o por cualquiera de los siguientes medios.</p>

      <Row>
        <Col md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Información de contacto</Card.Title>
              <p><strong>Dirección:</strong> Colonia Cerro Grande, Zona 5, carretera principal hacia Olancho, Tegucigalpa, Honduras</p>
              <p><strong>Teléfono / WhatsApp:</strong> +504 9956-0720</p>
              <p><strong>Horario:</strong> Lunes a viernes 8:00 a.m. – 5:00 p.m. | Sábados 8:00 a.m. – 12:00 p.m.</p>
              <Button
                variant="success"
                href={urlWhatsApp}
                target="_blank"
                rel="noreferrer"
              >
                Escribir por WhatsApp
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Ubicación</Card.Title>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.123456789!2d-87.2!3d14.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTegucigalpa!5e0!3m2!1ses!2shn!4v0000000000000"
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
                title="Ubicación del taller"
              ></iframe>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacto;