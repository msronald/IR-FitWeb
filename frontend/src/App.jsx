import React from 'react' //Con esto podemos "usar html" dentro de un .js sin tener que manipular el DOM con funciones como getDocumentbyId =P
import BarraDeNavegacion from './componentes/BarraDeNavegacion/BarraDeNavegacion'
import { Route, Routes } from 'react-router-dom'
import Inicio from './paginas/Inicio/Inicio.jsx'
import Carrito from './paginas/Carrito/Carrito.jsx'
import Orden from './paginas/Orden/Orden.jsx'
import Footer from './footer/footer.jsx'

const App = () => {
  return (
    <div>
      <div className='app'>
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
