import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Paleta de marca (misma que el resto del sitio)
const COLOR_DARK = '#3E2723';
const COLOR_ACCENT = '#C08552';
const COLOR_BG_WARM = '#F7F1E8';
const COLOR_WHATSAPP = '#3FA46A';

const iconoProps = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: COLOR_ACCENT,
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
};

function Contacto() {
  const numeroWhatsApp = '50499560720';
  const mensaje = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios.');
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

  const datos = [
    {
      etiqueta: 'Dirección',
      valor: 'Colonia Cerro Grande, Zona 5, carretera principal hacia Olancho, Tegucigalpa, Honduras',
      icono: (
        <svg {...iconoProps}>
          <path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      )
    },
    {
      etiqueta: 'Teléfono / WhatsApp',
      valor: '+504 9956-0720',
      icono: (
        <svg {...iconoProps}>
          <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2.1L8 9.7a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.9.3 1.8.5 2.7.6a2 2 0 011.7 2z" />
        </svg>
      )
    },
    {
      etiqueta: 'Horario',
      valor: 'Lunes a viernes 8:00 a.m. – 5:00 p.m. | Sábados 8:00 a.m. – 12:00 p.m.',
      icono: (
        <svg {...iconoProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      )
    }
  ];

  return (
    <Container className="mt-4" style={{ marginBottom: '60px' }}>
      <h2 className="mb-2" style={{ fontWeight: '800', color: COLOR_DARK }}>Contacto</h2>
      <p style={{ color: '#6b6b6b', marginBottom: '28px' }}>
        Puede comunicarse con nosotros directamente por WhatsApp o por cualquiera de los siguientes medios.
      </p>

      <Row>
        <Col md={6} className="mb-4">
          <div style={{
            background: '#fff',
            borderRadius: '14px',
            boxShadow: '0 6px 22px rgba(0,0,0,0.08)',
            padding: '32px',
            height: '100%'
          }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: COLOR_BG_WARM,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '18px'
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={COLOR_ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            </div>

            <h5 style={{ fontWeight: '700', color: COLOR_DARK, marginBottom: '20px' }}>
              Información de contacto
            </h5>

            {datos.map((d, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '18px', alignItems: 'flex-start' }}>
                <div style={{ marginTop: '2px', flexShrink: 0 }}>{d.icono}</div>
                <div>
                  <p style={{ fontWeight: '700', color: COLOR_DARK, marginBottom: '2px', fontSize: '0.9rem' }}>
                    {d.etiqueta}
                  </p>
                  <p style={{ color: '#555', margin: 0, fontSize: '0.92rem' }}>
                    {d.valor}
                  </p>
                </div>
              </div>
            ))}

            
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
                fontSize: '0.98rem',
                padding: '12px 26px',
                borderRadius: '8px',
                textDecoration: 'none',
                boxShadow: '0 6px 16px rgba(63,164,106,0.3)',
                marginTop: '6px',
                transition: 'transform 0.15s'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14a2.9 2.9 0 01-2.02 1.45c-.54.11-1.24.2-3.6-.77-3.02-1.25-4.97-4.3-5.12-4.5-.15-.2-1.22-1.63-1.22-3.1s.75-2.2 1.02-2.5c.26-.3.57-.37.76-.37h.55c.18 0 .42-.03.65.5.26.6.87 2.08.94 2.23.08.15.13.32.02.52-.1.2-.16.32-.31.5-.15.17-.32.38-.46.51-.15.15-.32.31-.14.6.18.31.82 1.35 1.76 2.18 1.21 1.08 2.23 1.42 2.54 1.58.31.15.5.13.68-.08.19-.2.79-.92 1-1.24.2-.3.4-.26.68-.16.28.11 1.78.84 2.08 1 .3.15.51.23.58.36.08.13.08.75-.18 1.47z" />
              </svg>
              Escribir por WhatsApp
            </a>
          </div>
        </Col>

        <Col md={6} className="mb-4">
          <div style={{
            background: '#fff',
            borderRadius: '14px',
            boxShadow: '0 6px 22px rgba(0,0,0,0.08)',
            padding: '32px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: COLOR_BG_WARM,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '18px'
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={COLOR_ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </div>

            <h5 style={{ fontWeight: '700', color: COLOR_DARK, marginBottom: '18px' }}>
              Ubicación
            </h5>

            <div style={{ borderRadius: '10px', overflow: 'hidden', flexGrow: 1 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.123456789!2d-87.2!3d14.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTegucigalpa!5e0!3m2!1ses!2shn!4v0000000000000"
                width="100%"
                height="250"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                title="Ubicación del taller"
              ></iframe>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacto;