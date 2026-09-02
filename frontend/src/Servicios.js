import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Paleta de marca (misma que Inicio.js y Portafolio.js)
const COLOR_DARK = '#3E2723';
const COLOR_ACCENT = '#C08552';
const COLOR_BG_WARM = '#F7F1E8';

const iconoProps = {
  width: 32,
  height: 32,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: COLOR_ACCENT,
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
};

const servicios = [
  {
    titulo: 'Cocinas Integrales',
    texto: 'Diseño y fabricación de cocinas completas adaptadas al espacio disponible. Incluye gabinetes superiores e inferiores, cajones y acabados a elección.',
    destacado: false,
    icono: (
      <svg {...iconoProps}>
        <path d="M4 4h16v16H4z" />
        <path d="M4 12h16" />
        <path d="M8 4v8M8 16v4M16 4v4M16 12v8" />
      </svg>
    )
  },
  {
    titulo: 'Clósets y Roperos',
    texto: 'Clósets empotrados o independientes con distribución interna personalizada. Opciones con puertas corredizas, abatibles o sin puertas.',
    destacado: false,
    icono: (
      <svg {...iconoProps}>
        <rect x="4" y="3" width="16" height="18" rx="1" />
        <path d="M12 3v18" />
        <circle cx="9.5" cy="12" r="0.6" fill={COLOR_ACCENT} />
        <circle cx="14.5" cy="12" r="0.6" fill={COLOR_ACCENT} />
      </svg>
    )
  },
  {
    titulo: 'Puertas y Ventanas',
    texto: 'Fabricación de puertas de madera para interiores y exteriores. Diferentes modelos: lisas, con molduras, con vidrio decorativo.',
    destacado: false,
    icono: (
      <svg {...iconoProps}>
        <rect x="5" y="2" width="14" height="20" rx="1" />
        <circle cx="15" cy="12" r="0.7" fill={COLOR_ACCENT} />
      </svg>
    )
  },
  {
    titulo: 'Muebles de Sala y Comedor',
    texto: 'Mesas, sillas, vitrinas, aparadores y otros muebles para sala y comedor bajo pedido.',
    destacado: false,
    icono: (
      <svg {...iconoProps}>
        <path d="M4 18v-5a2 2 0 012-2h12a2 2 0 012 2v5" />
        <path d="M4 18v2M20 18v2" />
        <path d="M6 11V7a2 2 0 012-2h8a2 2 0 012 2v4" />
      </svg>
    )
  },
  {
    titulo: 'Mobiliario de Oficina',
    texto: 'Escritorios, archiveros, libreros y estaciones de trabajo adaptadas a espacios corporativos o de trabajo en casa.',
    destacado: false,
    icono: (
      <svg {...iconoProps}>
        <rect x="3" y="4" width="18" height="12" rx="1" />
        <path d="M8 20h8M12 16v4" />
      </svg>
    )
  },
  {
    titulo: 'Proyectos Especiales',
    texto: 'Cualquier otro tipo de proyecto en madera que el cliente requiera. Consúltenos sin compromiso.',
    destacado: true,
    icono: (
      <svg {...iconoProps} stroke={'#fff'}>
        <path d="M12 2l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17l-6.1 3.5 1.5-6.8L2.2 9l6.9-.7z" />
      </svg>
    )
  }
];

const materiales = [
  { material: 'Madera sólida', caracteristicas: 'Alta durabilidad, aspecto natural, acabado fino', uso: 'Puertas, muebles de lujo, proyectos especiales' },
  { material: 'MDF', caracteristicas: 'Superficie lisa, fácil de pintar, económico', uso: 'Cocinas, clósets, muebles pintados' },
  { material: 'Melamina', caracteristicas: 'Resistente a la humedad, variedad de colores', uso: 'Cocinas, clósets, mobiliario de oficina' },
  { material: 'Mixto', caracteristicas: 'Combina materiales según la parte del mueble', uso: 'Proyectos que requieren economía y resistencia' }
];

function Servicios({ setPagina }) {
  return (
    <Container className="mt-4" style={{ marginBottom: '60px' }}>
      <h2 className="mb-2" style={{ fontWeight: '800', color: COLOR_DARK }}>Nuestros Servicios</h2>
      <p style={{ color: '#6b6b6b', marginBottom: '28px' }}>
        Fabricamos cualquier tipo de mueble de madera según las especificaciones del cliente.
      </p>

      <Row className="mb-5">
        {servicios.map((s, i) => (
          <Col md={4} key={i}>
            <Card
              className="mb-4"
              style={{
                border: s.destacado ? 'none' : '1px solid #ece4d8',
                borderTop: `3px solid ${COLOR_ACCENT}`,
                borderRadius: '10px',
                boxShadow: s.destacado ? '0 8px 22px rgba(192,133,82,0.25)' : '0 3px 14px rgba(0,0,0,0.06)',
                background: s.destacado ? COLOR_ACCENT : '#fff',
                transition: 'transform 0.2s, box-shadow 0.2s',
                height: '100%'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Card.Body>
                <div style={{ marginBottom: '12px' }}>{s.icono}</div>
                {s.destacado && (
                  <span style={{
                    display: 'inline-block',
                    background: 'rgba(255,255,255,0.25)',
                    color: '#fff',
                    fontSize: '0.7rem',
                    fontWeight: '700',
                    padding: '3px 9px',
                    borderRadius: '999px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.4px',
                    marginBottom: '8px'
                  }}>
                    A la medida
                  </span>
                )}
                <Card.Title style={{
                  fontWeight: '700',
                  color: s.destacado ? '#fff' : COLOR_DARK,
                  marginTop: s.destacado ? '4px' : 0
                }}>
                  {s.titulo}
                </Card.Title>
                <Card.Text style={{ color: s.destacado ? 'rgba(255,255,255,0.92)' : '#666' }}>
                  {s.texto}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h4 className="mb-3" style={{ fontWeight: '700', color: COLOR_DARK }}>Materiales disponibles</h4>
      <div style={{
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 3px 14px rgba(0,0,0,0.08)',
        marginBottom: '50px'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
          <thead>
            <tr style={{ background: COLOR_DARK }}>
              <th style={{ color: '#fff', padding: '14px 18px', textAlign: 'left', fontWeight: '600' }}>Material</th>
              <th style={{ color: '#fff', padding: '14px 18px', textAlign: 'left', fontWeight: '600' }}>Características</th>
              <th style={{ color: '#fff', padding: '14px 18px', textAlign: 'left', fontWeight: '600' }}>Uso recomendado</th>
            </tr>
          </thead>
          <tbody>
            {materiales.map((m, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : COLOR_BG_WARM }}>
                <td style={{ padding: '14px 18px', fontWeight: '700', color: COLOR_ACCENT }}>{m.material}</td>
                <td style={{ padding: '14px 18px', color: '#444' }}>{m.caracteristicas}</td>
                <td style={{ padding: '14px 18px', color: '#444' }}>{m.uso}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CTA final */}
      <div style={{
        background: COLOR_BG_WARM,
        borderRadius: '12px',
        padding: '36px',
        textAlign: 'center'
      }}>
        <h5 style={{ fontWeight: '700', color: COLOR_DARK, marginBottom: '8px' }}>
          ¿No ves lo que buscas?
        </h5>
        <p style={{ color: '#6b6b6b', marginBottom: '20px' }}>
          Escríbenos y cotizamos tu proyecto sin compromiso.
        </p>
        <Button
          onClick={() => setPagina && setPagina('cotizar')}
          style={{
            background: COLOR_ACCENT,
            border: 'none',
            fontWeight: '600',
            padding: '10px 28px',
            borderRadius: '6px'
          }}
        >
          Solicitar cotización
        </Button>
      </div>
    </Container>
  );
}

export default Servicios;