import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

const COLOR_DARK = '#3E2723';
const COLOR_ACCENT = '#C08552';
const COLOR_BG_WARM = '#F7F1E8';

const CLOUD_NAME = 'c3jfifch';
const UPLOAD_PRESET = 'portafolio_taller';
const API_URL = 'https://the-home-of-the-door.onrender.com/api/proyectos';

const categorias = ['cocinas', 'closets', 'puertas', 'especiales'];

function PanelAdmin({ setPagina }) {
  const [proyectos, setProyectos] = useState([]);
  const [cargandoLista, setCargandoLista] = useState(true);
  const [modo, setModo] = useState('lista'); // 'lista' | 'formulario'
  const [proyectoEditando, setProyectoEditando] = useState(null);

  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('cocinas');
  const [descripcion, setDescripcion] = useState('');
  const [material, setMaterial] = useState('');
  const [imagenes, setImagenes] = useState([]);
  const [subiendoImagen, setSubiendoImagen] = useState(false);
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState('');

  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    cargarProyectos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cargarProyectos = () => {
    setCargandoLista(true);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setProyectos(data);
        setCargandoLista(false);
      })
      .catch(() => setCargandoLista(false));
  };

  const cerrarSesion = () => {
    localStorage.removeItem('adminToken');
    setPagina('inicio');
  };

  const manejarRespuestaAuth = (res) => {
    if (res.status === 401 || res.status === 403) {
      localStorage.removeItem('adminToken');
      setPagina('login');
      return true;
    }
    return false;
  };

  const limpiarFormulario = () => {
    setNombre('');
    setCategoria('cocinas');
    setDescripcion('');
    setMaterial('');
    setImagenes([]);
    setError('');
    setProyectoEditando(null);
  };

  const abrirFormularioNuevo = () => {
    limpiarFormulario();
    setModo('formulario');
  };

  const abrirFormularioEditar = (proyecto) => {
    setProyectoEditando(proyecto);
    setNombre(proyecto.nombre || '');
    setCategoria(proyecto.categoria || 'cocinas');
    setDescripcion(proyecto.descripcion || '');
    setMaterial(proyecto.material || '');
    setImagenes(proyecto.imagenes && proyecto.imagenes.length > 0 ? proyecto.imagenes : (proyecto.imagen ? [proyecto.imagen] : []));
    setError('');
    setModo('formulario');
  };

  const subirImagen = async (archivo) => {
    const formData = new FormData();
    formData.append('file', archivo);
    formData.append('upload_preset', UPLOAD_PRESET);

    const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formData
    });

    if (!res.ok) throw new Error('Error al subir imagen');
    const data = await res.json();
    return data.secure_url;
  };

  const manejarSeleccionArchivos = async (e) => {
    const archivos = Array.from(e.target.files);
    if (archivos.length === 0) return;

    if (imagenes.length + archivos.length > 5) {
      setError('Máximo 5 imágenes por proyecto.');
      return;
    }

    setSubiendoImagen(true);
    setError('');

    try {
      const nuevasUrls = [];
      for (const archivo of archivos) {
        const url = await subirImagen(archivo);
        nuevasUrls.push(url);
      }
      setImagenes(prev => [...prev, ...nuevasUrls]);
    } catch (err) {
      setError('Ocurrió un error al subir una o más imágenes. Intente de nuevo.');
    } finally {
      setSubiendoImagen(false);
      e.target.value = '';
    }
  };

  const eliminarImagenDelFormulario = (index) => {
    setImagenes(prev => prev.filter((_, i) => i !== index));
  };

  const guardarProyecto = async (e) => {
    e.preventDefault();
    setError('');

    if (!nombre || !categoria || !descripcion || !material) {
      setError('Complete todos los campos.');
      return;
    }
    if (imagenes.length === 0) {
      setError('Agregue al menos una imagen.');
      return;
    }

    setGuardando(true);

    const cuerpo = { nombre, categoria, descripcion, material, imagenes };

    try {
      const esEdicion = !!proyectoEditando;
      const url = esEdicion ? `${API_URL}/${proyectoEditando._id}` : API_URL;
      const metodo = esEdicion ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method: metodo,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(cuerpo)
      });

      if (manejarRespuestaAuth(res)) return;

      if (!res.ok) {
        setError('No se pudo guardar el proyecto.');
        setGuardando(false);
        return;
      }

      limpiarFormulario();
      setModo('lista');
      cargarProyectos();
    } catch (err) {
      setError('Error de conexión. Intente de nuevo.');
    } finally {
      setGuardando(false);
    }
  };

  const eliminarProyecto = async (proyecto) => {
    if (!window.confirm(`¿Eliminar el proyecto "${proyecto.nombre}"? Esta acción no se puede deshacer.`)) return;

    try {
      const res = await fetch(`${API_URL}/${proyecto._id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (manejarRespuestaAuth(res)) return;

      if (res.ok) {
        cargarProyectos();
      }
    } catch (err) {
      alert('Error al eliminar el proyecto.');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '0.95rem',
    marginBottom: '16px'
  };

  const labelStyle = {
    fontWeight: '600',
    color: COLOR_DARK,
    fontSize: '0.9rem',
    marginBottom: '6px',
    display: 'block'
  };

  return (
    <Container className="mt-4" style={{ marginBottom: '60px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h2 style={{ fontWeight: '800', color: COLOR_DARK, marginBottom: '4px' }}>Panel de Administrador</h2>
          <p style={{ color: '#6b6b6b', margin: 0 }}>Gestione los proyectos del portafolio.</p>
        </div>
        <button
          onClick={cerrarSesion}
          style={{
            background: 'transparent',
            border: `1px solid ${COLOR_DARK}`,
            color: COLOR_DARK,
            fontWeight: '600',
            padding: '8px 18px',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Cerrar sesión
        </button>
      </div>

      {modo === 'lista' && (
        <>
          <button
            onClick={abrirFormularioNuevo}
            style={{
              background: COLOR_ACCENT,
              color: '#fff',
              border: 'none',
              fontWeight: '700',
              padding: '11px 24px',
              borderRadius: '8px',
              marginBottom: '24px',
              cursor: 'pointer'
            }}
          >
            + Agregar proyecto
          </button>

          {cargandoLista && <p style={{ color: '#6b6b6b' }}>Cargando proyectos...</p>}

          {!cargandoLista && proyectos.length === 0 && (
            <p style={{ color: '#6b6b6b' }}>No hay proyectos todavía.</p>
          )}

          {!cargandoLista && proyectos.map(p => {
            const imgs = p.imagenes && p.imagenes.length > 0 ? p.imagenes : (p.imagen ? [p.imagen] : []);
            const primeraImg = imgs[0];
            const esUrlCompleta = primeraImg && primeraImg.startsWith('http');
            return (
              <div key={p._id} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                background: '#fff',
                borderRadius: '10px',
                boxShadow: '0 3px 12px rgba(0,0,0,0.07)',
                padding: '14px 18px',
                marginBottom: '12px',
                flexWrap: 'wrap'
              }}>
                {primeraImg && (
                  <img
                    src={esUrlCompleta ? primeraImg : `/img/${primeraImg}`}
                    alt={p.nombre}
                    style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '6px', flexShrink: 0 }}
                  />
                )}
                <div style={{ flexGrow: 1, minWidth: '200px' }}>
                  <span style={{
                    display: 'inline-block',
                    background: COLOR_BG_WARM,
                    color: COLOR_ACCENT,
                    fontWeight: '700',
                    fontSize: '0.7rem',
                    padding: '3px 9px',
                    borderRadius: '4px',
                    textTransform: 'uppercase',
                    marginBottom: '4px'
                  }}>
                    {p.categoria}
                  </span>
                  <p style={{ fontWeight: '700', color: COLOR_DARK, margin: 0 }}>{p.nombre}</p>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={() => abrirFormularioEditar(p)}
                    style={{ background: COLOR_ACCENT, color: '#fff', border: 'none', fontWeight: '600', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.88rem' }}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => eliminarProyecto(p)}
                    style={{ background: 'transparent', color: '#c0392b', border: '1px solid #c0392b', fontWeight: '600', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.88rem' }}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            );
          })}
        </>
      )}

      {modo === 'formulario' && (
        <div style={{ background: '#fff', borderRadius: '14px', boxShadow: '0 6px 22px rgba(0,0,0,0.08)', padding: '32px', maxWidth: '640px' }}>
          <h5 style={{ fontWeight: '700', color: COLOR_DARK, marginBottom: '22px' }}>
            {proyectoEditando ? 'Editar proyecto' : 'Nuevo proyecto'}
          </h5>

          <form onSubmit={guardarProyecto}>
            <label style={labelStyle}>Nombre del proyecto</label>
            <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} style={inputStyle} />

            <label style={labelStyle}>Categoría</label>
            <select value={categoria} onChange={e => setCategoria(e.target.value)} style={inputStyle}>
              {categorias.map(cat => (
                <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
              ))}
            </select>

            <label style={labelStyle}>Descripción</label>
            <textarea value={descripcion} onChange={e => setDescripcion(e.target.value)} rows={4} style={{ ...inputStyle, resize: 'vertical' }} />

            <label style={labelStyle}>Material</label>
            <input type="text" value={material} onChange={e => setMaterial(e.target.value)} style={inputStyle} />

            <label style={labelStyle}>Imágenes (máximo 5)</label>

            {imagenes.length > 0 && (
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
                {imagenes.map((img, i) => {
                  const esUrlCompleta = img.startsWith('http');
                  return (
                    <div key={i} style={{ position: 'relative' }}>
                      <img
                        src={esUrlCompleta ? img : `/img/${img}`}
                        alt={`Vista ${i + 1}`}
                        style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '6px' }}
                      />
                      <button
                        type="button"
                        onClick={() => eliminarImagenDelFormulario(i)}
                        style={{
                          position: 'absolute', top: '-6px', right: '-6px',
                          background: '#c0392b', color: '#fff', border: 'none',
                          borderRadius: '50%', width: '20px', height: '20px',
                          fontSize: '0.7rem', cursor: 'pointer', lineHeight: 1
                        }}
                      >
                        ✕
                      </button>
                    </div>
                  );
                })}
              </div>
            )}

            {imagenes.length < 5 && (
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={manejarSeleccionArchivos}
                disabled={subiendoImagen}
                style={{ marginBottom: '16px', display: 'block' }}
              />
            )}
            {subiendoImagen && <p style={{ color: COLOR_ACCENT, fontSize: '0.88rem' }}>Subiendo imagen(es)...</p>}

            {error && <p style={{ color: '#c0392b', fontSize: '0.9rem', marginBottom: '14px' }}>{error}</p>}

            <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
              <button
                type="submit"
                disabled={guardando || subiendoImagen}
                style={{
                  background: COLOR_ACCENT, color: '#fff', border: 'none', fontWeight: '700',
                  padding: '11px 26px', borderRadius: '8px', cursor: 'pointer',
                  opacity: (guardando || subiendoImagen) ? 0.7 : 1
                }}
              >
                {guardando ? 'Guardando...' : 'Guardar proyecto'}
              </button>
              <button
                type="button"
                onClick={() => { limpiarFormulario(); setModo('lista'); }}
                style={{
                  background: 'transparent', border: `1px solid ${COLOR_DARK}`, color: COLOR_DARK,
                  fontWeight: '600', padding: '11px 22px', borderRadius: '8px', cursor: 'pointer'
                }}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}
    </Container>
  );
}

export default PanelAdmin;