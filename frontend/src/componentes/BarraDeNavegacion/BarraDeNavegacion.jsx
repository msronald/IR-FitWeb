import React, { useState } from 'react'
import './BarraDeNavegacion.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const BarraDeNavegacion = (setShowLogin) => {

const [menu,setMenu] = useState("Inicio");

  return (
    <div className='BarraDeNavegacion'>
      <img src={assets.logo} alt="logo" className="logo"/>
      <ul className='navbar-menu'>
        <Link to="/" onClick={()=>setMenu("Inicio")} className={menu==="Inicio"?"activo":""}>Inicio</Link>
        <a href='#lista-productos' onClick={()=>setMenu("Productos")} className={menu==="Productos"?"activo":""}>Productos</a>
        <li onClick={()=>setMenu("Aplicacion-movil")} className={menu==="Aplicacion-movil"?"activo":""}>Aplicacion móvil</li>
        <a href='#footer' onClick={()=>setMenu("Contactanos")} className={menu==="Contactanos"?"activo":""}>Contáctanos</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt =""/>
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt=""/>
          <div className="dot">
            
          </div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Iniciar sesion</button>
      </div>
    </div>
  )
}

export default BarraDeNavegacion
