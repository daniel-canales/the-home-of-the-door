import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';

// Paleta de marca (misma que Inicio.js)
const COLOR_DARK = '#3E2723';
const COLOR_ACCENT = '#C08552';

function Portafolio() {
  const [proyectos, setProyectos] = useState([]);
  const [categoriaActiva, setCategoriaActiva] = useState('todos');
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  const [imagenActiva, setImagenActiva] = useState(0);

  useEffect(() => {
    fetch('https://the-home-of-the-door.onrender.com/api/proyectos')
      .then(res => res.json())
      .then(data => setProyectos(data));
  }, []);

  const categorias = ['todos', 'cocinas', 'closets', 'puertas', 'especiales'];

  const proyectosFiltrados = categoriaActiva === 'todos'
    ? proyectos
    : proyectos.filter(p => p.categoria === categoriaActiva);

  const abrirModal = (proyecto) => {
    setProyectoSeleccionado(proyecto);
    setImagenActiva(0);
  };

  const cerrarModal = () => {
    setProyectoSeleccionado(null);
    setImagenActiva(0);
  };

  const obtenerImagenes = (proyecto) => {
    if (proyecto.imagenes && proyecto.imagenes.length > 0) return proyecto.imagenes;
    if (proyecto.imagen) return [proyecto.imagen];
    return [];
  };

  const truncar = (texto, max = 110) => {
    if (!texto) return '';
    return texto.length > max ? texto.slice(0, max).trim() + '...' : texto;
  };

  const imagenSiguiente = (imagenes) => {
    setImagenActiva(prev => (prev + 1) % imagenes.length);
  };

  const imagenAnterior = (imagenes) => {
    setImagenActiva(prev => (prev - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <Container className="mt-4" style={{ marginBottom: '60px' }}>
      <h2 className="mb-2" style={{ fontWeight: '800', color: COLOR_DARK }}>Portafolio de Trabajos</h2>
      <p style={{ color: '#6b6b6b', marginBottom: '28px' }}>Proyectos realizados por el taller, organizados por categoría.</p>

      <div className="mb-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {categorias.map(cat => {
          const activo = categoriaActiva === cat;
          return (
            <span
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              style={{
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '600',
                padding: '8px 18px',
                borderRadius: '999px',
                border: activo ? `2px solid ${COLOR_ACCENT}` : '2px solid #e0d5c8',
                background: activo ? COLOR_ACCENT : 'transparent',
                color: activo ? '#fff' : COLOR_DARK,
                transition: 'all 0.2s'
              }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </span>
          );
        })}
      </div>

      <Row>
        {proyectosFiltrados.map(proyecto => {
          const imagenes = obtenerImagenes(proyecto);
          return (
            <Col md={4} key={proyecto._id} className="mb-4">
              <Card
                style={{
                  border: 'none',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 3px 14px rgba(0,0,0,0.08)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer',
                  height: '100%'
                }}
                onClick={() => abrirModal(proyecto)}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.14)';
                  const img = e.currentTarget.querySelector('img.card-img-zoom');
                  if (img) img.style.transform = 'scale(1.06)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 3px 14px rgba(0,0,0,0.08)';
                  const img = e.currentTarget.querySelector('img.card-img-zoom');
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                {imagenes.length > 0 && (
                  <div style={{ position: 'relative', overflow: 'hidden', height: '200px' }}>
                    <Card.Img
                      className="card-img-zoom"
                      variant="top"
                      src={`/img/${imagenes[0]}`}
                      style={{ height: '200px', objectFit: 'cover', transition: 'transform 0.35s ease', borderRadius: 0 }}
                    />
                    {imagenes.length > 1 && (
                      <div style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'rgba(0,0,0,0.55)',
                        color: '#fff',
                        borderRadius: '999px',
                        padding: '4px 10px',
                        fontSize: '0.78rem',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px'
                      }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="M21 15l-5-5L5 21" />
                        </svg>
                        {imagenes.length}
                      </div>
                    )}
                  </div>
                )}
                <Card.Body>
                  <Badge
                    className="mb-2"
                    style={{
                      background: '#F7F1E8',
                      color: COLOR_ACCENT,
                      fontWeight: '700',
                      fontSize: '0.72rem',
                      padding: '5px 10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.4px'
                    }}
                  >
                    {proyecto.categoria}
                  </Badge>
                  <Card.Title style={{ fontWeight: '700', color: COLOR_DARK, fontSize: '1.1rem' }}>
                    {proyecto.nombre}
                  </Card.Title>
                  <Card.Text style={{ color: '#666', fontSize: '0.92rem' }}>
                    {truncar(proyecto.descripcion)}
                  </Card.Text>
                  <Card.Text style={{ fontSize: '0.9rem' }}>
                    <strong style={{ color: COLOR_DARK }}>Material:</strong> {proyecto.material}
                  </Card.Text>
                  {imagenes.length > 1 && (
                    <small style={{ color: COLOR_ACCENT, fontWeight: '600' }}>
                      Ver galería completa →
                    </small>
                  )}
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      {proyectosFiltrados.length === 0 && (
        <p className="text-muted">No hay proyectos en esta categoría.</p>
      )}

      {proyectoSeleccionado && (() => {
        const imagenes = obtenerImagenes(proyectoSeleccionado);
        return (
          <Modal show={true} onHide={cerrarModal} size="lg" centered contentClassName="border-0" style={{ }}>
            <div style={{ background: '#1a1310', borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '18px 22px',
                borderBottom: '1px solid rgba(255,255,255,0.1)'
              }}>
                <h5 style={{ color: '#fff', fontWeight: '700', margin: 0 }}>{proyectoSeleccionado.nombre}</h5>
                <button
                  onClick={cerrarModal}
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '34px',
                    height: '34px',
                    color: '#fff',
                    fontSize: '1.1rem',
                    lineHeight: '1',
                    cursor: 'pointer'
                  }}
                >
                  ✕
                </button>
              </div>

              <div style={{ position: 'relative', background: '#0f0b09' }}>
                {imagenes.length > 0 && (
                  <img
                    src={`/img/${imagenes[imagenActiva]}`}
                    alt={proyectoSeleccionado.nombre}
                    style={{ width: '100%', maxHeight: '480px', objectFit: 'contain', display: 'block', margin: '0 auto' }}
                  />
                )}
                {imagenes.length > 1 && (
                  <>
                    <button
                      onClick={() => imagenAnterior(imagenes)}
                      style={{
                        position: 'absolute', top: '50%', left: '14px', transform: 'translateY(-50%)',
                        background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff',
                        width: '38px', height: '38px', borderRadius: '50%', fontSize: '1.2rem', cursor: 'pointer'
                      }}
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => imagenSiguiente(imagenes)}
                      style={{
                        position: 'absolute', top: '50%', right: '14px', transform: 'translateY(-50%)',
                        background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff',
                        width: '38px', height: '38px', borderRadius: '50%', fontSize: '1.2rem', cursor: 'pointer'
                      }}
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              {imagenes.length > 1 && (
                <div style={{ display: 'flex', gap: '8px', padding: '14px 22px', flexWrap: 'wrap' }}>
                  {imagenes.map((img, i) => (
                    <img
                      key={i}
                      src={`/img/${img}`}
                      alt={`Vista ${i + 1}`}
                      onClick={() => setImagenActiva(i)}
                      style={{
                        width: '64px',
                        height: '64px',
                        objectFit: 'cover',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        opacity: imagenActiva === i ? 1 : 0.55,
                        border: imagenActiva === i ? `2px solid ${COLOR_ACCENT}` : '2px solid transparent',
                        transition: 'opacity 0.2s, border 0.2s'
                      }}
                    />
                  ))}
                </div>
              )}

              <div style={{ padding: '4px 22px 22px' }}>
                <p style={{ color: '#e8e0d8', marginTop: '8px' }}>{proyectoSeleccionado.descripcion}</p>
                <p style={{ color: '#e8e0d8' }}>
                  <strong style={{ color: '#fff' }}>Material:</strong> {proyectoSeleccionado.material}
                </p>
                <Badge
                  style={{
                    background: COLOR_ACCENT,
                    color: '#fff',
                    fontWeight: '700',
                    fontSize: '0.72rem',
                    padding: '5px 10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.4px'
                  }}
                >
                  {proyectoSeleccionado.categoria}
                </Badge>
              </div>
            </div>
          </Modal>
        );
      })()}
    </Container>
  );
}

export default Portafolio;