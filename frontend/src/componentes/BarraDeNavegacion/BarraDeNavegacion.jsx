import React, { useState } from 'react'
import './BarraDeNavegacion.css'
import { assets } from '../../assets/assets'

const BarraDeNavegacion = () => {

const [menu,setMenu] = useState("Inicio");

  return (
    <div className='BarraDeNavegacion'>
      <img src={assets.logo} alt="logo" className="logo"/>
      <ul className='navbar-menu'>
        <li onClick={()=>setMenu("Inicio")} className={menu==="Inicio"?"activo":""}>Inicio</li>
        <li onClick={()=>setMenu("Productos")} className={menu==="Productos"?"activo":""}>Productos</li>
        <li onClick={()=>setMenu("Aplicacion-movil")} className={menu==="Aplicacion-movil"?"activo":""}>Aplicacion móvil</li>
        <li onClick={()=>setMenu("Contactanos")} className={menu==="Contactanos"?"activo":""}>Contáctanos</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt =""/>
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt=""/>
          <div className="dot">
            
          </div>
        </div>
        <button>Iniciar sesion</button>
      </div>
    </div>
  )
}

export default BarraDeNavegacion
