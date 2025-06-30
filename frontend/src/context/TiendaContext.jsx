import { createContext, useEffect, useState } from "react";
import axios from 'axios'
export const TiendaContext = createContext(null)

const TiendaContextProvider = (properties) =>{ //de forma anónima se envian propiedades

    const [itemsCarrito, setItemsCarrito] = useState({}); //itemsCarrito es un objeto vacio
    const url = "http://localhost:4000"
    const [token, setToken] = useState("")
    const [lista_productos, setListaProductos] = useState([])

    const añadirAlCarrito = async (itemId) => {
        if (!itemsCarrito[itemId]){
            setItemsCarrito((prev) => ({...prev, [itemId]:1})) //Esta estructura es un objeto que genera un atributo basado en itemId tal que se tiene un objeto anonimo {itemId : valor}, donde itemId es el valor ._id en lista_productos
        }
        else{
            setItemsCarrito((prev) => ({...prev, [itemId]:prev[itemId]+1}))
        }
        if(token){
            await axios.post(url+"/api/cart/add", {itemId}, {headers:{token}})
        }
    }

    const removerDelCarrito = async (itemId) => {
        setItemsCarrito((prev)=>({...prev, [itemId]:prev[itemId]-1})) 
        if(token){
            await axios.post(url+"/api/cart/remove", {itemId}, {headers:{token}})
        }
        
    }

    const carritoObtenerMontoTotal = () => {
        let montoTotal = 0;
        for(const item in itemsCarrito){ // [Indice, numero de items], donde el indice coincide con el atributo _id de un objeto en lista.producto
            if (itemsCarrito[item]>0){
                let itemInfo = lista_productos.find((producto)=>producto._id.toString() === item)
                console.log(itemInfo)
                montoTotal += itemInfo.precio * itemsCarrito[item];
            }    
        }
        return montoTotal;
    }

    const traerListaProductos = async () =>{
        const response = await axios.get(url+"/api/gym/list");
        setListaProductos(response.data.data)
    }

    const cargarCarrito = async (token) => {
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
        setItemsCarrito(response.data.cartData);
    }

    useEffect(()=>{
        async function cargarData() {
            await traerListaProductos();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await cargarCarrito(localStorage.getItem("token"))
            }
        }
        cargarData();
    },[])

    const contextValue ={
        lista_productos,
        itemsCarrito,
        setItemsCarrito,
        añadirAlCarrito,
        removerDelCarrito,
        carritoObtenerMontoTotal,
        url,
        token,
        setToken
    }

    useEffect(() => {
        console.log(itemsCarrito);
    },[itemsCarrito])

    return(
        <TiendaContext.Provider value={contextValue}>
            {properties.children}
        </TiendaContext.Provider>
    )
}

export default TiendaContextProvider