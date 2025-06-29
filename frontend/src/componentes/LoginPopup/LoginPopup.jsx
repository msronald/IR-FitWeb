import React, { useState } from 'react';
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react';
import { TiendaContext } from '../../context/TiendaContext';
import { useEffect } from 'react';
import axios from 'axios'

const LoginPopup = ({setShowLogin}) => {

    const {url, setToken} = useContext(TiendaContext)
    const [currState,setCurrState] = useState("Iniciar sesión")
    const [data, setData] = useState({
        nombre: "",
        email: "",
        contraseña: ""
    })

    const onChangeHandler = (event) =>{ //Maneja el evento donde los campos cambian su contenido y actualiza el objeto data
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data, [name]:value})) //añade un campo name de valor value tal que name: value
    }

    useEffect(()=>{
        console.log(data)
    },[data])

    const onLogin = async (event) =>{
        event.preventDefault()
        let newUrl = url;
        if(currState==="Login"){
            newUrl += "/api/user/login"
        }
        else{
            newUrl += "/api/user/register"
        }

        const response = await axios.post(newUrl, data);

        if(response.data.success){
            setToken(response.data.token); //Token de la API backend
            localStorage.setItem("token", response.data.token);
            setShowLogin(false)
        }
        else{
            alert(response.data.message)
        }
    }

  return (
    <div className = "login-popup">
        <form onSubmit={onLogin} className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Iniciar sesión"?<></>: <input name='nombre' onChange={onChangeHandler} value={data.nombre} type="text" placeholder='Tu nombre' required />}
               
                <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Tu Correo' required />
                <input type="contraseña" onChange={onChangeHandler} value={data.contraseña} placeholder='Contraseña' required />
            </div>
            <button type='submit'>{currState==="Registrarse"?"Crear cuenta":"Iniciar sesión"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>
                    Al continuar acepto los terminos de uso y politica de privacidad
                </p>
            </div>
            {currState==="Iniciar sesión"
            ?<p>Nuevo aquí? <span onClick={()=>setCurrState("Registrarse")}>Has Click aquí</span></p>
            :<p>Ya tienes una cuenta? <span onClick={()=>setCurrState("Iniciar sesión")}>Inicia sesión aquí</span></p>
            }
            
            
        </form>
    </div>   
  )
}

export default LoginPopup