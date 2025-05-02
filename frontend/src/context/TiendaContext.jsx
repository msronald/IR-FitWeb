import { createContext } from "react";
import { lista_productos } from "../assets/assets";
export const TiendaContext = createContext(null)

const TiendaContextProvider = (props) =>{
    const contextValue ={
        lista_productos
    }
    return(
        <TiendaContext.Provider value={contextValue}>
            {props.children}
        </TiendaContext.Provider>
    )
}

export default TiendaContextProvider