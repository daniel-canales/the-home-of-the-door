import { useState } from 'react';
import NavBar from './NavBar';
import Inicio from './Inicio';
import Portafolio from './Portafolio';
import Servicios from './Servicios';
import Cotizar from './Cotizar';
import Contacto from './Contacto';

function AppNav() {
  const [paginaActual, setPaginaActual] = useState('inicio');

  const renderPagina = () => {
    if (paginaActual === 'inicio') return <Inicio setPagina={setPaginaActual} />;
    if (paginaActual === 'portafolio') return <Portafolio />;
    if (paginaActual === 'servicios') return <Servicios />;
    if (paginaActual === 'cotizar') return <Cotizar />;
    if (paginaActual === 'contacto') return <Contacto />;
    return <Inicio />;
  };

  return (
    <div>
      <NavBar setPagina={setPaginaActual} />
      {renderPagina()}
    </div>
  );
}

export default AppNav;