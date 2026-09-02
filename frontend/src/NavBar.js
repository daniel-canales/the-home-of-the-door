import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar({ setPagina }) {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand onClick={() => setPagina('inicio')} style={{ cursor: 'pointer' }}>
          THE HOME OF THE DOOR
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-nav" />
        <Navbar.Collapse id="menu-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => setPagina('inicio')}>Inicio</Nav.Link>
            <Nav.Link onClick={() => setPagina('portafolio')}>Portafolio</Nav.Link>
            <Nav.Link onClick={() => setPagina('servicios')}>Servicios</Nav.Link>
            <Nav.Link onClick={() => setPagina('cotizar')}>Cotizar</Nav.Link>
            <Nav.Link onClick={() => setPagina('contacto')}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;