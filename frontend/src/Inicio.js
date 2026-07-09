import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import cocina from './cocina.png';

function Inicio({ setPagina }) {
  return (
    <div>

      <div style={{
        backgroundImage: `url(${cocina})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '520px',
        display: 'flex',
        alignItems: 'center',
        color: 'white'
      }}>
        <div style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.80), rgba(0,0,0,0.30))',
          width: '100%',
          minHeight: '520px',
          display: 'flex',
          alignItems: 'center',
          padding: '60px 60px'
        }}>
          <div style={{ maxWidth: '620px' }}>
            <h1 style={{ fontWeight: 'bold', fontSize: '2.6rem' }}>
  THE HOME OF THE DOOR
</h1>
            <p className="lead" style={{ fontSize: '1.1rem', marginBottom: '16px' }}>
              Diseñamos y fabricamos muebles de madera a la medida para cocinas, clósets, oficinas y hogares.
              Más de 30 años convirtiendo ideas en espacios únicos.
            </p>
            <p style={{ marginBottom: '24px', lineHeight: '2' }}>
              ✓ Más de 30 años de experiencia &nbsp;&nbsp;
              ✓ Cotización gratuita &nbsp;&nbsp;
              ✓ Atención en Tegucigalpa
            </p>
            <Button variant="light" onClick={() => setPagina('cotizar')} style={{ marginRight: '10px' }}>
              Solicitar cotización
            </Button>
            <Button variant="outline-light" onClick={() => setPagina('portafolio')}>
              Ver trabajos
            </Button>
          </div>
        </div>
      </div>

      <Container style={{ marginTop: '60px', marginBottom: '40px' }}>

        <Row className="text-center mb-5">
          <Col md={4}>
            <h2 style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>+30</h2>
            <p className="text-muted">años de experiencia</p>
          </Col>
          <Col md={4}>
            <h2 style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>+500</h2>
            <p className="text-muted">proyectos realizados</p>
          </Col>
          <Col md={4}>
            <h2 style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>100%</h2>
            <p className="text-muted">a la medida</p>
          </Col>
        </Row>

        <h4 className="mb-3">¿Por qué elegirnos?</h4>
        <Row>
          <Col md={4}>
            <Card className="mb-3" style={{
              border: '1px solid #e0e0e0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.13)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.07)';
              }}
            >
              <Card.Body>
                <Card.Title>100% a la medida</Card.Title>
                <Card.Text>Cada proyecto se diseña y fabrica según las necesidades específicas del cliente.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-3" style={{
              border: '1px solid #e0e0e0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.13)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.07)';
              }}
            >
              <Card.Body>
                <Card.Title>Materiales de calidad</Card.Title>
                <Card.Text>Trabajamos con madera sólida, MDF y melamina seleccionados para cada tipo de proyecto.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-3" style={{
              border: '1px solid #e0e0e0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.13)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.07)';
              }}
            >
              <Card.Body>
                <Card.Title>Entrega e instalación</Card.Title>
                <Card.Text>Nos encargamos del traslado e instalación de cada mueble en el lugar indicado.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Inicio;