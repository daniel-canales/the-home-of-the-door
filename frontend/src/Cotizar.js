import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cotizar() {
  const numeroWhatsApp = '50499560720';
  const mensaje = encodeURIComponent('Hola, me gustaría cotizar un proyecto de madera a la medida. ¿Me pueden dar más información?');
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={7}>
          <Card className="text-center p-4">
            <Card.Body>
              <h2 className="mb-3">Solicitar cotización</h2>
              <p className="lead mb-2">
                Contáctenos directamente por WhatsApp y con gusto le atendemos.
              </p>
              <p className="text-muted mb-4">
                Cuéntenos su proyecto — tipo de mueble, dimensiones aproximadas y cualquier detalle que tenga en mente — y le enviamos una cotización personalizada.
              </p>
              <Button
                variant="success"
                size="lg"
                href={urlWhatsApp}
                target="_blank"
                rel="noreferrer"
              >
                Cotizar por WhatsApp
              </Button>
              <p className="text-muted mt-3" style={{ fontSize: '0.9rem' }}>
                Lunes a viernes 8:00 a.m. – 5:00 p.m. | Sábados 8:00 a.m. – 12:00 p.m.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cotizar;