import React, { useContext } from 'react'
import './ProductosDisplay.css'
import { TiendaContext } from '../../context/TiendaContext'

const ProductosDisplay = () => {
    const {lista_productos} = useContext(TiendaContext)
  return (
    <div className='productos-display' id='productos-display'>
      
    </div>
  )
}

export default ProductosDisplay
