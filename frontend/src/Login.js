import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';

function Login({ setUsuario, setPagina }) {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const manejarLogin = async () => {
    if (!correo || !password) {
      setError('Complete todos los campos.');
      return;
    }
    const res = await fetch('http://localhost:5000/api/usuarios/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ correo, password })
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.mensaje);
      return;
    }
    setUsuario(data);
    if (data.rol === 'admin') setPagina('admin');
    else setPagina('panelCliente');
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '450px' }}>
      <Card>
        <Card.Body>
          <Card.Title className="mb-3">Iniciar sesión</Card.Title>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Group className="mb-3">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control type="email" value={correo} onChange={e => setCorreo(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </Form.Group>
          <Button variant="dark" onClick={manejarLogin} className="w-100">Ingresar</Button>
          <hr />
          <p className="text-center mb-0">¿No tiene cuenta? <span style={{ cursor: 'pointer', color: 'blue' }} onClick={() => setPagina('registro')}>Regístrese aquí</span></p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;