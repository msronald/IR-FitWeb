import { createContext, useEffect, useState } from "react";
import { lista_productos } from "../assets/assets";
export const TiendaContext = createContext(null)

const TiendaContextProvider = (properties) =>{ //de forma anónima se envian propiedades

    const [itemsCarrito, setItemsCarrito] = useState({});

    const añadirAlCarrito = (itemId) => {
        if (!itemsCarrito[itemId]){
            setItemsCarrito((prev) => ({...prev, [itemId]:1}))
        }
        else{
            setItemsCarrito((prev) => ({...prev, [itemId]:prev[itemId]+1}))
        }
    }

    const removerDelCarrito = (itemId) => {
        setItemsCarrito((prev)=>({...prev, [itemId]:prev[itemId]-1})) 
    }

    const contextValue ={
        lista_productos,
        itemsCarrito,
        setItemsCarrito,
        añadirAlCarrito,
        removerDelCarrito
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