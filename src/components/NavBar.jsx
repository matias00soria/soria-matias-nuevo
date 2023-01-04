import React from 'react';
import CartWidget from './CartWidget';

import './styles/NavBar.css';

const NavBar = ({ background }) => {
  return (
    <header className={`header background--${background}`}>
      
      <div className="header-container">
        {/* links de navegación */}
        <nav>
          <ul className="nav-container">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/">Carnes</a>
            </li>
            <li>
              <a href="/">Verduras</a>
            </li>
          </ul>
        </nav>

        {/* cart widget */}
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;