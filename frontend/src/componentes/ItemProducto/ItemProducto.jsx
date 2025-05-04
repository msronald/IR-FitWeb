import React, { useContext } from 'react'
import './ItemProducto.css'
import { assets } from '../../assets/assets'
import { TiendaContext } from '../../context/TiendaContext'

const ItemProducto = ({id,nombre,precio,descripcion,imagen}) => {

  const {itemsCarrito,añadirAlCarrito,removerDelCarrito} = useContext(TiendaContext);

  return (
    <div className='item-producto'>
      <div className='item-producto-img-container'>
        <img className='item-producto-imagen' src={imagen} alt ="" height='200px'/>
        {!itemsCarrito[id] 
        ? <img className='añadir' onClick={()=>añadirAlCarrito(id)} src={assets.add_icon_white} alt=''/>
        :<div className='item-producto-contador'>
          <img onClick={()=>removerDelCarrito(id)} src={assets.remove_icon_red} alt='' />
          <p>{itemsCarrito[id]}</p>
          <img onClick={()=>añadirAlCarrito(id)} src={assets.add_icon_green} alt='' />
        </div>
        }
      </div>
      <div className='item-producto-info'>
        <div className='item-producto-nombre-rating'>
            <p>{nombre}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className='item-producto-desc'>{descripcion}</p>
        <p className='item-producto-precio'>S/{precio}</p>
      </div>
    </div>
  )
}

export default ItemProducto
