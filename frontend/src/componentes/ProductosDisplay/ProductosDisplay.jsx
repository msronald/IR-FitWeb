import React, { useContext } from 'react'
import './ProductosDisplay.css'
import { TiendaContext } from '../../context/TiendaContext'
import ItemProducto from '../ItemProducto/ItemProducto'

const ProductosDisplay = ({categoria}) => {

    const {lista_productos} = useContext(TiendaContext)

  return (
    <div className='productos-display' id='productos-display'>
      <h2>Los mejores productos a tu alcance</h2>
      <div className='lista-productos-display'>
        {lista_productos.map((item, index) =>{
          if(categoria=="Todos" || categoria == item.category){
            return <ItemProducto key={index} id={item._id} nombre={item.name} descripcion={item.description} precio={item.price} imagen={item.image}/>
          }
        })}
      </div>
    </div>
  )
}

export default ProductosDisplay
