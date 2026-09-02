import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Paleta de marca (misma que Inicio.js, Portafolio.js y Servicios.js)
const COLOR_DARK = '#3E2723';
const COLOR_ACCENT = '#C08552';
const COLOR_BG_WARM = '#F7F1E8';
const COLOR_WHATSAPP = '#3FA46A'; // verde más suave/armonioso que el default de Bootstrap

function Cotizar() {
  const numeroWhatsApp = '50499560720';
  const mensaje = encodeURIComponent('Hola, me gustaría cotizar un proyecto de madera a la medida. ¿Me pueden dar más información?');
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

  const checklist = [
    'Tipo de mueble (cocina, clóset, puerta, etc.)',
    'Dimensiones aproximadas del espacio',
    'Material de preferencia, si ya lo tiene en mente',
    'Fotos de referencia o del espacio (opcional)'
  ];

  return (
    <Container className="mt-5" style={{ marginBottom: '60px' }}>
      <Row className="justify-content-center">
        <Col md={8} lg={7}>
          <div style={{
            background: '#fff',
            borderRadius: '14px',
            boxShadow: '0 8px 28px rgba(0,0,0,0.09)',
            padding: '48px 40px',
            textAlign: 'center'
          }}>
            {/* Ícono */}
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: COLOR_BG_WARM,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={COLOR_ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            </div>

            <h2 style={{ fontWeight: '800', color: COLOR_DARK, marginBottom: '12px' }}>
              Solicitar cotización
            </h2>
            <p style={{ fontSize: '1.1rem', color: COLOR_DARK, marginBottom: '8px' }}>
              Contáctenos directamente por WhatsApp y con gusto le atendemos.
            </p>
            <p style={{ color: '#6b6b6b', marginBottom: '28px' }}>
              Cuéntenos su proyecto y le enviamos una cotización personalizada.
            </p>

            {/* Checklist */}
            <div style={{
              background: COLOR_BG_WARM,
              borderRadius: '10px',
              padding: '20px 24px',
              textAlign: 'left',
              marginBottom: '28px'
            }}>
              <p style={{ fontWeight: '700', color: COLOR_DARK, marginBottom: '10px', fontSize: '0.95rem' }}>
                Para agilizar su cotización, cuéntenos:
              </p>
              <ul style={{ paddingLeft: '20px', margin: 0 }}>
                {checklist.map((item, i) => (
                  <li key={i} style={{ color: '#555', fontSize: '0.92rem', marginBottom: '4px' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Botón WhatsApp */}
            <a /* <--- FALTA ESTA ETIQUETA DE APERTURA */
              href={urlWhatsApp}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: COLOR_WHATSAPP,
                color: '#fff',
                fontWeight: '700',
                fontSize: '1.05rem',
                padding: '14px 32px',
                borderRadius: '8px',
                textDecoration: 'none',
                boxShadow: '0 6px 16px rgba(63,164,106,0.35)',
                transition: 'transform 0.15s'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14a2.9 2.9 0 01-2.02 1.45c-.54.11-1.24.2-3.6-.77-3.02-1.25-4.97-4.3-5.12-4.5-.15-.2-1.22-1.63-1.22-3.1s.75-2.2 1.02-2.5c.26-.3.57-.37.76-.37h.55c.18 0 .42-.03.65.5.26.6.87 2.08.94 2.23.08.15.13.32.02.52-.1.2-.16.32-.31.5-.15.17-.32.38-.46.51-.15.15-.32.31-.14.6.18.31.82 1.35 1.76 2.18 1.21 1.08 2.23 1.42 2.54 1.58.31.15.5.13.68-.08.19-.2.79-.92 1-1.24.2-.3.4-.26.68-.16.28.11 1.78.84 2.08 1 .3.15.51.23.58.36.08.13.08.75-.18 1.47z" />
              </svg>
              Cotizar por WhatsApp
            </a>

            {/* Teléfono directo */}
            <p style={{ color: '#6b6b6b', fontSize: '0.9rem', marginTop: '16px', marginBottom: '0' }}>
              O llámenos al <strong style={{ color: COLOR_DARK }}>+504 9956-0720</strong>
            </p>

            {/* Horario */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '22px',
              padding: '8px 18px',
              borderRadius: '999px',
              border: `1px solid #e0d5c8`,
              color: COLOR_DARK,
              fontSize: '0.85rem',
              fontWeight: '500'
            }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={COLOR_ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 3" />
              </svg>
              Lunes a viernes 8:00 a.m. – 5:00 p.m. | Sábados 8:00 a.m. – 12:00 p.m.
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Cotizar;