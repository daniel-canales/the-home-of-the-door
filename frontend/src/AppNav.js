import { useState, useEffect } from 'react';
import ReactGA from 'react-ga4';
import NavBar from './NavBar';
import Inicio from './Inicio';
import Portafolio from './Portafolio';
import Servicios from './Servicios';
import Cotizar from './Cotizar';
import Contacto from './Contacto';

// Inicializar Google Analytics con tu ID de medición
ReactGA.initialize('G-VM42MYVHMG');

function AppNav() {
  const [paginaActual, setPaginaActual] = useState('inicio');

  // Enviar vista de página cada vez que cambie la sección
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: `/${paginaActual}`, title: paginaActual });
  }, [paginaActual]);

  const renderPagina = () => {
    if (paginaActual === 'inicio') return <Inicio setPagina={setPaginaActual} />;
    if (paginaActual === 'portafolio') return <Portafolio />;
    if (paginaActual === 'servicios') return <Servicios setPagina={setPaginaActual} />;
    if (paginaActual === 'cotizar') return <Cotizar />;
    if (paginaActual === 'contacto') return <Contacto />;
    return <Inicio setPagina={setPaginaActual} />;
  };

  return (
    <div>
      <NavBar setPagina={setPaginaActual} />
      {renderPagina()}
    </div>
  );
}

export default AppNav;