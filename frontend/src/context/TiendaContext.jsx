import { createContext, useEffect, useState } from "react";
import { lista_productos } from "../assets/assets";
export const TiendaContext = createContext(null)

const TiendaContextProvider = (properties) =>{ //de forma anónima se envian propiedades

    const [itemsCarrito, setItemsCarrito] = useState({}); //itemsCarrito es un objeto vacio
    const url = "http://localhost:4000"
    const [token, setToken] = useState("")

    const añadirAlCarrito = (itemId) => {
        if (!itemsCarrito[itemId]){
            setItemsCarrito((prev) => ({...prev, [itemId]:1})) //Esta estructura es un objeto que genera un atributo basado en itemId tal que se tiene un objeto anonimo {itemId : valor}, donde itemId es el valor ._id en lista_productos
        }
        else{
            setItemsCarrito((prev) => ({...prev, [itemId]:prev[itemId]+1}))
        }
    }

    const removerDelCarrito = (itemId) => {
        setItemsCarrito((prev)=>({...prev, [itemId]:prev[itemId]-1})) 
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

    useEffect(()=>{
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"))
        }
    })

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