import React, { useContext } from 'react'
import './Orden.css'
import { TiendaContext } from '../../context/TiendaContext'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Orden = () => {

  const {carritoObtenerMontoTotal,token, lista_productos, itemsCarrito, url} = useContext(TiendaContext)

  const [data, setData] = useState({
    nombre:"",
    apellido:"",
    email:"",
    direccion:"",
    ciudad:"",
    distrito:"",
    codigopostal:"",
    pais:"",
    celular:""
  })

  const onChangeHandler = (event) =>{ //La pagina registra los cambios en los campos del formulario y actualiza los datos cada que cambian
    const name = event.target.name;
    const value = event.target.value;
    setData(data =>({...data, [name]:value}))
  }

  const placeOrder = async (event) => { //Al presionar el boton tipo submit se activa la función placeOrder
    event.preventDefault();
    let orderItems = [];
    lista_productos.map((item)=>{ 
      if(itemsCarrito[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"] = itemsCarrito[item._id];
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address: data,
      items: orderItems,
      amount: carritoObtenerMontoTotal()+2,
    }
    console.log("Order Data:", orderData); //// Para verificar que los datos están bien estructurados

    let response = await axios.post(url+"/api/order/place", orderData, {headers:{token}}) 
    if(response.data.success){
      const {session_url} = response.data;
      window.location.replace(session_url);
    }
    else{
      alert("Error al procesar el pago.")
    }
  }

  const navigate = useNavigate();

  useEffect(()=>{
    if(!token){
      navigate("/cart")
    }
    else if(carritoObtenerMontoTotal() === 0){
      navigate("/cart")
    }
  },[token])


  return ( 
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className="title">Informacion de Delivery</p>
        <div className="multi-fields">
          <input required name="nombre" onChange={onChangeHandler} type="text" value={data.nombre} placeholder='Nombre'/>
          <input required name="apellido" onChange={onChangeHandler} type="text" value={data.apellido} placeholder='Apellido'/>
        </div>
        <input required name="email" onChange={onChangeHandler} value={data.email} type="email"  placeholder='Email' />
        <input required name="direccion" onChange={onChangeHandler} value={data.direccion} type="text" placeholder='Direccion' />
        <div className="multi-fields">
          <input required name="distrito" onChange={onChangeHandler} value={data.distrito} type="text" placeholder='Distrito'/>
          <input required name="ciudad" onChange={onChangeHandler} value={data.ciudad} type="text" placeholder='Ciudad'/>
        </div>
        <div className="multi-fields">
          <input required name="codigo-postal" onChange={onChangeHandler} value={data.codigopostal} type="text" placeholder='Codigo  Postal'/>
          <input required name="pais" onChange={onChangeHandler} value={data.pais} type="text" placeholder='Pais'/>
        </div>
        <input required name="celular" onChange={onChangeHandler} value={data.celular} type="texto" placeholder='Celular'/>
      </div>
      <div className='place-order-right'>
        <div className='cart-total'>
          <h2>Total en Carro</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>S/{carritoObtenerMontoTotal()}</p>
            </div>
            <div className="cart-total-details">
              <p>Costo Delivery</p>
              <p>S/{carritoObtenerMontoTotal()===0?0:2}</p>
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>S/{carritoObtenerMontoTotal()===0?0:carritoObtenerMontoTotal()+2}</b>
            </div>
          </div>
          <button type="submit">Proceder al pago</button>
        </div>
      </div>
    </form>
  )
}

export default Orden
