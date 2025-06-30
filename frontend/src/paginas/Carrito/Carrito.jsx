import React, { useContext } from 'react'
import './Carrito.css'
import { TiendaContext } from '../../context/TiendaContext'
import {useNavigate} from 'react-router-dom'

const Carrito = () => {
  
  const {itemsCarrito, lista_productos, removerDelCarrito, carritoObtenerMontoTotal, url} = useContext(TiendaContext);

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Comida</p>
          <p>Nombre</p>
          <p>Precio</p>
          <p>Cantidad</p>
          <p>Total</p>
          <p>Remover</p>
        </div>
        <br />
        <hr />
        {lista_productos.map((item,index)=>{
          if(itemsCarrito[item._id]>0)
          {
            return (
              <div key={item._id}>
                <div className='cart-items-title cart-items-item'>
                  <img src={url + "/images/" + item.imagen_producto} alt=""/>
                  <p>{item.nombre}</p>
                  <p>S/{item.precio}</p>
                  <p>{itemsCarrito[item._id]}</p>
                  <p>S/{item.precio*itemsCarrito[item._id]}</p>
                  <p onClick={()=>removerDelCarrito(item._id)} className='cross'>x</p>
                </div>
                <hr/>
              </div>
            )
          }
        })}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Total en Carro</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>S/{carritoObtenerMontoTotal()}</p>
            </div>
            <div className="cart-total-details">
              <p>Costo Delivery</p>
              <p>S/{2}</p>
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>S/{carritoObtenerMontoTotal()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate("/orden")}>Proceder con la compra</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Si tienes codigo de promocion agregarlo aqui</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Codigo Promocional'/>
              <button>Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carrito
