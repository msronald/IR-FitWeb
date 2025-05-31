import React, { useState } from 'react'
import BarraDeNavegacion from './componentes/BarraDeNavegacion/BarraDeNavegacion'
import { Route, Routes } from 'react-router-dom'
import Inicio from './paginas/Inicio/Inicio.jsx'
import Carrito from './paginas/Carrito/Carrito.jsx'
import Orden from './paginas/Orden/Orden.jsx'
import Footer from './footer/footer.jsx'
import LoginPopup from './componentes/LoginPopup/LoginPopup.jsx'

const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <div>
      {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <BarraDeNavegacion setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
          <Route path='/orden' element={<Orden/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
