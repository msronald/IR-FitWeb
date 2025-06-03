import React, { useState } from 'react'
import BarraDeNavegacion from './componentes/BarraDeNavegacion/BarraDeNavegacion'
import { Route, Routes } from 'react-router-dom'
import Inicio from './paginas/Inicio/Inicio.jsx'
import Carrito from './paginas/Carrito/Carrito.jsx'
import Orden from './paginas/Orden/Orden.jsx'
import Footer from './footer/footer.jsx'
import LoginPopup from './componentes/LoginPopup/LoginPopup.jsx'
import PlanesPopup from './componentes/PlanesPopup/PlanesPopup.jsx'

const App = () => {

  const [showLogin,setShowLogin] = useState(false)
  const [popupVisible, setPopupVisible] = useState(false);

  return (
    <>
    {showLogin? <LoginPopup setShowLogin={setShowLogin}/>:<></>}
    {popupVisible? <PlanesPopup/>:<></>}

      <div className='app'>
        <BarraDeNavegacion setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Inicio setPopupVisible={setPopupVisible}/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
          <Route path='/orden' element={<Orden/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
