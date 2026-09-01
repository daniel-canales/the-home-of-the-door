import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';

function Registro({ setPagina }) {
  const [form, setForm] = useState({ nombre: '', correo: '', password: '' });
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const manejarRegistro = async () => {
    if (!form.nombre || !form.correo || !form.password) {
      setError('Complete todos los campos.');
      return;
    }
    const res = await fetch('http://localhost:5000/api/usuarios/registro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, rol: 'cliente' })
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.mensaje);
      return;
    }
    setMensaje('Cuenta creada correctamente. Ya puede iniciar sesión.');
    setError('');
    setForm({ nombre: '', correo: '', password: '' });
    setTimeout(() => setPagina('login'), 2000);
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '450px' }}>
      <Card>
        <Card.Body>
          <Card.Title className="mb-3">Crear cuenta</Card.Title>
          {error && <Alert variant="danger">{error}</Alert>}
          {mensaje && <Alert variant="success">{mensaje}</Alert>}
          <Form.Group className="mb-3">
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control type="text" value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control type="email" value={form.correo} onChange={e => setForm({ ...form, correo: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
          </Form.Group>
          <Button variant="dark" onClick={manejarRegistro} className="w-100">Registrarse</Button>
          <hr />
          <p className="text-center mb-0">¿Ya tiene cuenta? <span style={{ cursor: 'pointer', color: 'blue' }} onClick={() => setPagina('login')}>Inicie sesión</span></p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Registro;