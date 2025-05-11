import React from 'react' //Con esto podemos "usar html" dentro de un .js sin tener que manipular el DOM con funciones como getDocumentbyId =P
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
      {showLogin?<LoginPopup/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <BarraDeNavegacion/> {/*Toma todo el codigo del "barradenavegacion.jsx" y lo pone aqui o en donde queramos, React sirve para esto*/}
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
