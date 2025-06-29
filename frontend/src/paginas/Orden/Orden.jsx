import React from 'react'
import './Orden.css'

const Orden = () => {
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Informacion de Delivery</p>
        <div className="multi-fields">
          <input required name="nombre" type="text" placeholder='Nombre'/>
          <input required name="apellido" type="text"  placeholder='Apellido'/>
        </div>
        <input required name="email" type="email"  placeholder='Email' />
        <input required name="direccion" type="text" placeholder='Direccion' />
        <div className="multi-fields">
          <input required name="distrito" type="text" placeholder='Distrito'/>
          <input required name="ciudad" type="text" placeholder='Ciudad'/>
        </div>
        <div className="multi-fields">
          <input required name="codigo-postal" type="text" placeholder='Codigo  Postal'/>
          <input required name="pais" type="text" placeholder='Pais'/>
        </div>
        <input required name="celular" type="texto" placeholder='Celular'/>
      </div>
      <div className='place-order-right'>
        <div className='cart-total'>
          <h2>Total en Carro</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>S/{0}</p>
            </div>
            <div className="cart-total-details">
              <p>Costo Delivery</p>
              <p>S/{2}</p>
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>S/{2}</b>
            </div>
          </div>
          <button type="submit">Proceder al pago</button>
        </div>
      </div>
    </form>
  )
}

export default Orden
