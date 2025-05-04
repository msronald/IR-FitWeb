import React, { use, useState } from 'react'
import './Inicio.css'
import Header from '../../componentes/header/header'
import Productos from '../../componentes/Productos/Productos.jsx'
import ProductosDisplay from '../../componentes/ProductosDisplay/ProductosDisplay.jsx'

const Inicio = () => {
    const [categoria, setCategoria] = useState("Todos");
  return (
    <div>
      <Header/>
      <Productos categoria={categoria} setCategoria={setCategoria}/>
      <ProductosDisplay categoria={categoria}/>
    </div>
  )
}

export default Inicio
