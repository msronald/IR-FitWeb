import React, { useState } from 'react'
import './BarraDeNavegacion.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { TiendaContext } from '../../context/TiendaContext';
import {useNavigate} from 'react-router-dom'

const BarraDeNavegacion = ({setShowLogin}) => {

const [menu,setMenu] = useState("Inicio");

const {carritoObtenerMontoTotal, token, setToken} = useContext(TiendaContext)

const navigate = useNavigate();

const logout = () =>{
  localStorage.removeItem("token");
  setToken("");
  navigate("/")
}

  return (
    <div className='BarraDeNavegacion'>
      <Link to="/">
        <img src={assets.logo} alt="logo" className="logo"/>
      </Link>
      <ul className='navbar-menu'>
        <Link to="/" onClick={()=>setMenu("Inicio")} className={menu==="Inicio"?"activo":""}>Inicio</Link>
        <a href='#lista-productos' onClick={()=>setMenu("Productos")} className={menu==="Productos"?"activo":""}>Productos</a>
        <a href='#footer' onClick={()=>setMenu("Contactanos")} className={menu==="Contactanos"?"activo":""}>Contáctanos</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt =""/>
        <div className="navbar-search-icon">
          <Link to="/carrito">
            <img src={assets.basket_icon} alt=""/>
          </Link>
          <div className={carritoObtenerMontoTotal()===0?"":"dot"}>
          </div>
        </div>
        {!token? 
        <button onClick={()=>setShowLogin(true)}>Iniciar sesion</button>
        :<div className='navbar-profile'>
          <img src={assets.profile_icon} alt='' />
          <ul className="nav-profile-dropdown">
            <li><img src={assets.bag_icon} alt='' /><p>Pedidos</p></li>
            <hr />
            <li onClick={logout}><img src={assets.logout_icon} alt='' />Cerrar sesión</li>
          </ul>
        </div>
        }
        
      </div>
    </div>
  )
}

export default BarraDeNavegacion
