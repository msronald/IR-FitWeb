import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter} from 'react-router-dom'
import  TiendaContextProvider  from './context/TiendaContext.jsx' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TiendaContextProvider>
      <App />
    </TiendaContextProvider>
  </BrowserRouter>
)