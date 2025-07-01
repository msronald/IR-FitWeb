import React, { useContext, useEffect } from 'react'
import "./Verify.css"
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { TiendaContext } from '../../context/TiendaContext'

const Verify = () => {

    //Parametros de la url unica respecto a una orden realizada
    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const {url} = useContext(TiendaContext)
    const navigate = useNavigate();

    const verifyPayment = async () => { //Revisa la respuesta del pago de la orden
        const response = await axios.post(url+"/api/order/verify", {success, orderId});
        if (response.data.success){ //Si se paga redirige a mis ordenes
            navigate("/myorders");
        }
        else{ //Si no al inicio
            navigate("/");
        }
    }

    useEffect(()=>{
        verifyPayment();
    },[])

  return ( //Es una pagina auxiliar, feedback visual de que la pagina esta procesando el pago
    <div className='verify'>
        <div className='spinner'></div>
    </div>
  )
}

export default Verify
