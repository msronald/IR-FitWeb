import React, { useState } from 'react'
import BarraDeNavegacion from './componentes/BarraDeNavegacion/BarraDeNavegacion'
import { Route, Routes } from 'react-router-dom'
import Inicio from './paginas/Inicio/Inicio.jsx'
import Carrito from './paginas/Carrito/Carrito.jsx'
import Orden from './paginas/Orden/Orden.jsx'
import Footer from './footer/Footer.jsx'
import LoginPopup from './componentes/LoginPopup/LoginPopup.jsx'
import PlanesPopup from './componentes/PlanesPopup/PlanesPopup.jsx'
import Verify from './paginas/Verify/Verify.jsx'
import MyOrders from './paginas/MyOrders/MyOrders.jsx'

const App = () => {

  const [showLogin,setShowLogin] = useState(false)
  
  const [popupVisible, setPopupVisible] = useState(false);

  return (
    <>
    {showLogin? <LoginPopup setShowLogin={setShowLogin}/>:<></>}
    {popupVisible? <PlanesPopup setPopupVisible={setPopupVisible}/>:<></>}

      <div className='app'>
        <BarraDeNavegacion setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Inicio setPopupVisible={setPopupVisible}/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
          <Route path='/orden' element={<Orden/>}/>
          <Route path='/verify' element={<Verify/>} />
          <Route path='/myorders' element={<MyOrders/>} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
