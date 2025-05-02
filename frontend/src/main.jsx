import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter} from 'react-router-dom' //Cargar paginas como si no se cargaran, modifica el DOM en vez de redirigir
//import { TiendaContextProvider } from './context/TiendaContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/*<TiendaContextProvider>*/}
      <App />
    {/*</TiendaContextProvider>*/}
  </BrowserRouter>
)