import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar({ setPagina }) {
  const haySesion = !!localStorage.getItem('adminToken');

  return (
    <>
      <style>
        {`
          .navbar-ebanisteria {
            background-color: #1a1614 !important;
            box-shadow: 0 4px 12px rgba(0,0,0,0.4);
            padding: 12px 0;
            transition: all 0.3s ease;
          }
          .navbar-brand-custom {
            font-weight: 700;
            letter-spacing: 1.5px;
            color: #ffffff !important;
            font-size: 1.3rem;
            text-transform: uppercase;
          }
          .nav-link-custom {
            color: #e0e0e0 !important;
            font-size: 1rem;
            margin: 0 12px;
            font-weight: 500;
            position: relative;
            transition: color 0.3s ease;
          }
          .nav-link-custom::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            display: block;
            margin-top: 4px;
            right: 0;
            background: #c78a57;
            transition: width 0.3s ease;
            -webkit-transition: width 0.3s ease;
          }
          .nav-link-custom:hover {
            color: #c78a57 !important;
          }
          .nav-link-custom:hover::after {
            width: 100%;
            left: 0;
            background: #c78a57;
          }
          .btn-cotizar-nav {
            background-color: #c78a57;
            color: #ffffff !important;
            border-radius: 5px;
            padding: 8px 24px !important;
            font-weight: 600;
            margin-left: 15px;
            transition: all 0.3s ease;
            border: 1px solid #c78a57;
          }
          .btn-cotizar-nav:hover {
            background-color: transparent;
            color: #c78a57 !important;
            border: 1px solid #c78a57;
          }
          .nav-link-admin {
            color: #8a8378 !important;
            font-size: 0.82rem;
            margin: 0 0 0 18px;
            font-weight: 500;
            opacity: 0.8;
          }
          .nav-link-admin:hover {
            color: #c78a57 !important;
            opacity: 1;
          }

          @media (max-width: 991px) {
            .nav-link-custom {
              margin: 10px 0;
            }
            .btn-cotizar-nav {
              margin-left: 0;
              margin-top: 15px;
              text-align: center;
              display: block;
            }
            .nav-link-custom::after {
              display: none;
            }
            .nav-link-admin {
              margin: 10px 0 0 0;
            }
          }
        `}
      </style>

      <Navbar className="navbar-ebanisteria" data-bs-theme="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand
            onClick={() => setPagina('inicio')}
            style={{ cursor: 'pointer' }}
            className="navbar-brand-custom"
          >
            THE HOME OF THE DOOR
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="menu-nav" />
          <Navbar.Collapse id="menu-nav">
            <Nav className="ms-auto align-items-lg-center">
              <Nav.Link className="nav-link-custom" onClick={() => setPagina('inicio')}>Inicio</Nav.Link>
              <Nav.Link className="nav-link-custom" onClick={() => setPagina('portafolio')}>Portafolio</Nav.Link>
              <Nav.Link className="nav-link-custom" onClick={() => setPagina('servicios')}>Servicios</Nav.Link>
              <Nav.Link className="nav-link-custom" onClick={() => setPagina('contacto')}>Contacto</Nav.Link>
              <Nav.Link className="btn-cotizar-nav" onClick={() => setPagina('cotizar')}>Cotizar Proyecto</Nav.Link>
              <Nav.Link
                className="nav-link-admin"
                onClick={() => setPagina(haySesion ? 'panelAdmin' : 'login')}
              >
                {haySesion ? 'Panel Admin' : 'Admin'}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;