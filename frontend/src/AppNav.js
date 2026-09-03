import { useState, useEffect } from 'react';
import ReactGA from 'react-ga4';
import NavBar from './NavBar';
import Inicio from './Inicio';
import Portafolio from './Portafolio';
import Servicios from './Servicios';
import Cotizar from './Cotizar';
import Contacto from './Contacto';
import Login from './Login';
import PanelAdmin from './PanelAdmin';

// Inicializar Google Analytics con tu ID de medición
ReactGA.initialize('G-VM42MYVHMG');

function AppNav() {
  const [paginaActual, setPaginaActual] = useState('inicio');

  // Enviar vista de página cada vez que cambie la sección
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: `/${paginaActual}`, title: paginaActual });
  }, [paginaActual]);

  const cambiarPagina = (pagina) => {
    if (pagina === 'panelAdmin' && !localStorage.getItem('adminToken')) {
      setPaginaActual('login');
      return;
    }
    setPaginaActual(pagina);
  };

  const renderPagina = () => {
    if (paginaActual === 'inicio') return <Inicio setPagina={cambiarPagina} />;
    if (paginaActual === 'portafolio') return <Portafolio />;
    if (paginaActual === 'servicios') return <Servicios setPagina={cambiarPagina} />;
    if (paginaActual === 'cotizar') return <Cotizar />;
    if (paginaActual === 'contacto') return <Contacto />;
    if (paginaActual === 'login') return <Login setPagina={cambiarPagina} />;
    if (paginaActual === 'panelAdmin') return <PanelAdmin setPagina={cambiarPagina} />;
    return <Inicio setPagina={cambiarPagina} />;
  };

  return (
    <div>
      <NavBar setPagina={cambiarPagina} />
      {renderPagina()}
    </div>
  );
}

export default AppNav;