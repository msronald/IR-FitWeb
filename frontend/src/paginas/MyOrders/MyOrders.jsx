import React, { useContext, useEffect, useState } from 'react'
import "./MyOrders.css"
import { TiendaContext } from '../../context/TiendaContext';
import axios from 'axios';
import {assets} from '../../assets/assets';

const MyOrders = () => {

    const {url, token} = useContext(TiendaContext)
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
        setData(response.data.data);
    }

    useEffect(()=>{ //Captura las ordenes registradas del usuario que accede y esta logueado en la web
        if(token){
            fetchOrders();
        }
    },[token])

  return (
    <div className='my-orders'>
        <h2>Mis ordenes</h2>
        <div className="container">
            {data.map((order, index) => {
                return(
                    <div key ={index} className="my-orders-order">
                    <img src={assets.parcel_icon} alt="" />
                    <p>{order.items.map((item,index)=>{
                        console.log(order)
                        if(index === order.items.length-1){
                            return item.name+" x "+item.quantity;
                        }
                        else{
                            return item.name+" x "+item.quantity+", "
                        }
                    })}</p>
                    <p>S/. {order.amount}.00 </p>
                    <p>Items: {order.items.length} </p>
                    <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                    <button>Seguir orden</button>
                </div>
                ) 
            })}
        </div>
    </div>
  )
}

export default MyOrders
