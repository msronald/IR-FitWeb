import React, { use, useState } from 'react'
import './Inicio.css'
import Header from '../../componentes/header/header'
import Productos from '../../componentes/Productos/Productos.jsx'

const Inicio = () => {
    const [categoria, setCategoria] = useState("All");
  return (
    <div>
      <Header/>
      <Productos categoria={categoria} setCategoria={setCategoria}/>
    </div>
  )
}

export default Inicio
