import React from 'react';
import './Header.css';

const Header = ({ setPopupVisible }) => {
  return (
    <div className='Presentacion'>
      <div className='header'>
        <div className='header-contents'>
          <h2>Obten planes de fitness aquí</h2>
          <button onClick={() => setPopupVisible(true)}>Obtener un plan</button>
        </div>
      </div>
    </div>
  );
};

export default Header;