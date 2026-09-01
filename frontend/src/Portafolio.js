import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';

function Portafolio() {
  const [proyectos, setProyectos] = useState([]);
  const [categoriaActiva, setCategoriaActiva] = useState('todos');
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  const [imagenActiva, setImagenActiva] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/api/proyectos')
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

  return (
    <Container className="mt-4">
      <h2 className="mb-3">Portafolio de Trabajos</h2>
      <p>Proyectos realizados por el taller, organizados por categoría.</p>

      <div className="mb-4">
        {categorias.map(cat => (
          <Badge
            key={cat}
            bg={categoriaActiva === cat ? 'dark' : 'secondary'}
            className="me-2"
            style={{ cursor: 'pointer', fontSize: '0.9rem', padding: '8px 12px' }}
            onClick={() => setCategoriaActiva(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </Badge>
        ))}
      </div>

      <Row>
        {proyectosFiltrados.map(proyecto => {
          const imagenes = obtenerImagenes(proyecto);
          return (
            <Col md={4} key={proyecto._id} className="mb-4">
              <Card
                style={{
                  border: '1px solid #e0e0e0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer'
                }}
                onClick={() => abrirModal(proyecto)}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.13)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.07)';
                }}
              >
                {imagenes.length > 0 && (
                  <Card.Img
                    variant="top"
                    src={`/img/${imagenes[0]}`}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                )}
                <Card.Body>
                  <Badge bg="secondary" className="mb-2">{proyecto.categoria}</Badge>
                  <Card.Title>{proyecto.nombre}</Card.Title>
                  <Card.Text>{proyecto.descripcion}</Card.Text>
                  <Card.Text><strong>Material:</strong> {proyecto.material}</Card.Text>
                  {imagenes.length > 1 && (
                    <small className="text-muted">{imagenes.length} fotos — clic para ver</small>
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
          <Modal show={true} onHide={cerrarModal} size="lg" centered>
            <Modal.Header closeButton>
              <Modal.Title>{proyectoSeleccionado.nombre}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {imagenes.length > 0 && (
                <img
                  src={`/img/${imagenes[imagenActiva]}`}
                  alt={proyectoSeleccionado.nombre}
                  style={{ width: '100%', maxHeight: '450px', objectFit: 'contain', borderRadius: '6px' }}
                />
              )}
              {imagenes.length > 1 && (
                <div className="d-flex gap-2 mt-3">
                  {imagenes.map((img, i) => (
                    <img
                      key={i}
                      src={`/img/${img}`}
                      alt={`Vista ${i + 1}`}
                      onClick={() => setImagenActiva(i)}
                      style={{
                        width: '70px',
                        height: '70px',
                        objectFit: 'cover',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        border: imagenActiva === i ? '2px solid #212529' : '2px solid transparent'
                      }}
                    />
                  ))}
                </div>
              )}
              <div className="mt-3">
                <p>{proyectoSeleccionado.descripcion}</p>
                <p><strong>Material:</strong> {proyectoSeleccionado.material}</p>
                <Badge bg="secondary">{proyectoSeleccionado.categoria}</Badge>
              </div>
            </Modal.Body>
          </Modal>
        );
      })()}
    </Container>
  );
}

export default Portafolio;