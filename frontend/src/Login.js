import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const COLOR_DARK = '#3E2723';
const COLOR_ACCENT = '#C08552';
const COLOR_BG_WARM = '#F7F1E8';

function Login({ setPagina }) {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);

  const manejarLogin = async (e) => {
    e.preventDefault();
    setError('');
    setCargando(true);

    try {
      const res = await fetch('https://the-home-of-the-door.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario, contrasena })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('adminToken', data.token);
        setPagina('panelAdmin');
      } else {
        setError(data.mensaje || 'Usuario o contraseña incorrectos');
      }
    } catch (err) {
      setError('No se pudo conectar con el servidor. Intente de nuevo.');
    } finally {
      setCargando(false);
    }
  };

  return (
    <Container className="mt-5" style={{ marginBottom: '60px' }}>
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <div style={{ background: '#fff', borderRadius: '14px', boxShadow: '0 8px 28px rgba(0,0,0,0.09)', padding: '40px 36px' }}>

            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: COLOR_BG_WARM, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={COLOR_ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="10" rx="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
            </div>

            <h4 style={{ fontWeight: '800', color: COLOR_DARK, textAlign: 'center', marginBottom: '6px' }}>
              Acceso Administrador
            </h4>
            <p style={{ color: '#6b6b6b', textAlign: 'center', marginBottom: '26px', fontSize: '0.92rem' }}>
              Ingrese sus credenciales para gestionar el portafolio.
            </p>

            <form onSubmit={manejarLogin}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontWeight: '600', color: COLOR_DARK, fontSize: '0.9rem', marginBottom: '6px', display: 'block' }}>
                  Usuario
                </label>
                <input
                  type="text"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                  required
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '0.95rem' }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontWeight: '600', color: COLOR_DARK, fontSize: '0.9rem', marginBottom: '6px', display: 'block' }}>
                  Contraseña
                </label>
                <input
                  type="password"
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)}
                  required
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '0.95rem' }}
                />
              </div>

              {error && (
                <p style={{ color: '#c0392b', fontSize: '0.88rem', marginBottom: '16px', textAlign: 'center' }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={cargando}
                style={{
                  width: '100%',
                  background: COLOR_ACCENT,
                  color: '#fff',
                  border: 'none',
                  fontWeight: '700',
                  padding: '12px',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  cursor: cargando ? 'not-allowed' : 'pointer',
                  opacity: cargando ? 0.7 : 1
                }}
              >
                {cargando ? 'Ingresando...' : 'Ingresar'}
              </button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;