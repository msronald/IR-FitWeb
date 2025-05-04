import React from 'react'
import './Productos.css'
import { categorias_productos } from '../../assets/assets'

const Productos = ({categoria, setCategoria}) => {
  return (
    <div className='lista-productos' id='lista-productos'>
      <h1>Explora qué ofrecemos</h1>
      <p className='texto-lista-productos'>De entre suplementos, acessorios y equipamiento </p>
      <div className='exploracion-lista-productos'>
        {categorias_productos.map((item, index)=>{
            return(
                <div onClick={()=>setCategoria(prev=>prev===item.nombre_categoria?"Todos":item.nombre_categoria)}key={index} className='exploracion-item-lista-productos'>
                    <img className={categoria===item.nombre_categoria?"activo":""} src={item.imagen_categoria} alt='' width='200px'/>
                    <p>{item.nombre_categoria}</p>
                </div>
            )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default Productos
