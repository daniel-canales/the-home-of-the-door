import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import cocina from './cocina.png';

// Paleta de marca
const COLOR_DARK = '#3E2723';   // café oscuro (madera)
const COLOR_ACCENT = '#C08552'; // dorado/cobre (acento)
const COLOR_BG_WARM = '#F7F1E8'; // beige cálido para la sección de stats

function Inicio({ setPagina }) {
  return (
    <div>

      {/* HERO */}
      <div style={{
        backgroundImage: `url(${cocina})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '560px',
        display: 'flex',
        alignItems: 'center',
        color: 'white'
      }}>
        <div style={{
          background: 'linear-gradient(100deg, rgba(20,14,10,0.88) 0%, rgba(20,14,10,0.55) 45%, rgba(20,14,10,0.15) 75%)',
          width: '100%',
          minHeight: '560px',
          display: 'flex',
          alignItems: 'center',
          padding: '60px 60px'
        }}>
          <div style={{ maxWidth: '640px' }}>
            <h1 style={{
              fontWeight: '800',
              fontSize: '3rem',
              letterSpacing: '0.5px',
              textShadow: '0 2px 12px rgba(0,0,0,0.35)'
            }}>
              THE HOME OF THE DOOR
            </h1>
            <p className="lead" style={{ fontSize: '1.15rem', marginBottom: '20px', color: '#F0E8DD' }}>
              Diseñamos y fabricamos muebles de madera a la medida para cocinas, clósets, oficinas y hogares.
              Más de 30 años convirtiendo ideas en espacios únicos.
            </p>

            {/* Badges tipo "sello de confianza" */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px' }}>
              {['✓ Más de 30 años de experiencia', '✓ Cotización gratuita', '✓ Atención en todo Honduras'].map((texto, i) => (
                <span key={i} style={{
                  background: 'rgba(255,255,255,0.14)',
                  border: '1px solid rgba(255,255,255,0.35)',
                  borderRadius: '999px',
                  padding: '6px 16px',
                  fontSize: '0.88rem',
                  fontWeight: '500',
                  backdropFilter: 'blur(4px)',
                  WebkitBackdropFilter: 'blur(4px)'
                }}>
                  {texto}
                </span>
              ))}
            </div>

            <Button
              onClick={() => setPagina('cotizar')}
              style={{
                marginRight: '12px',
                background: COLOR_ACCENT,
                border: 'none',
                fontWeight: '600',
                padding: '10px 24px',
                borderRadius: '6px'
              }}
            >
              Solicitar cotización
            </Button>
            <Button
              onClick={() => setPagina('portafolio')}
              style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.6)',
                color: 'white',
                fontWeight: '600',
                padding: '10px 24px',
                borderRadius: '6px',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)'
              }}
            >
              Ver trabajos
            </Button>
          </div>
        </div>
      </div>

      {/* ESTADÍSTICAS */}
      <div style={{ background: COLOR_BG_WARM, padding: '50px 0' }}>
        <Container>
          <Row className="text-center">
            <Col md={4}>
              <h2 style={{ fontWeight: '800', fontSize: '2.6rem', color: COLOR_ACCENT }}>+30</h2>
              <p style={{ color: COLOR_DARK, fontWeight: '500' }}>años de experiencia</p>
            </Col>
            <Col md={4}>
              <h2 style={{ fontWeight: '800', fontSize: '2.6rem', color: COLOR_ACCENT }}>+500</h2>
              <p style={{ color: COLOR_DARK, fontWeight: '500' }}>proyectos realizados</p>
            </Col>
            <Col md={4}>
              <h2 style={{ fontWeight: '800', fontSize: '2.6rem', color: COLOR_ACCENT }}>100%</h2>
              <p style={{ color: COLOR_DARK, fontWeight: '500' }}>a la medida</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* POR QUÉ ELEGIRNOS */}
      <Container style={{ marginTop: '60px', marginBottom: '60px' }}>
        <h4 className="mb-4 text-center" style={{ fontWeight: '700', color: COLOR_DARK }}>¿Por qué elegirnos?</h4>
        <Row>
          {[
            {
              titulo: '100% a la medida',
              texto: 'Cada proyecto se diseña y fabrica según las necesidades específicas del cliente.',
              icono: (
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={COLOR_ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12l9-9 9 9" />
                  <path d="M5 10v10h14V10" />
                  <path d="M9 20v-6h6v6" />
                </svg>
              )
            },
            {
              titulo: 'Materiales de calidad',
              texto: 'Trabajamos con madera sólida, MDF y melamina seleccionados para cada tipo de proyecto.',
              icono: (
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={COLOR_ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l9 4.9V17L12 22 3 17V6.9L12 2z" />
                  <path d="M3 7l9 5 9-5" />
                  <path d="M12 12v10" />
                </svg>
              )
            },
            {
              titulo: 'Entrega e instalación',
              texto: 'Nos encargamos del traslado e instalación de cada mueble en el lugar indicado.',
              icono: (
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={COLOR_ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="7" width="14" height="10" rx="1" />
                  <path d="M15 10h4l3 3v4h-7z" />
                  <circle cx="6" cy="19" r="1.6" />
                  <circle cx="17.5" cy="19" r="1.6" />
                </svg>
              )
            }
          ].map((item, i) => (
            <Col md={4} key={i}>
              <Card
                className="mb-3"
                style={{
                  border: 'none',
                  borderTop: `3px solid ${COLOR_ACCENT}`,
                  borderRadius: '10px',
                  boxShadow: '0 3px 14px rgba(0,0,0,0.08)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  height: '100%'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.14)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 3px 14px rgba(0,0,0,0.08)';
                }}
              >
                <Card.Body>
                  <div style={{ marginBottom: '14px' }}>{item.icono}</div>
                  <Card.Title style={{ fontWeight: '700', color: COLOR_DARK }}>{item.titulo}</Card.Title>
                  <Card.Text style={{ color: '#5a5a5a' }}>{item.texto}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Inicio;