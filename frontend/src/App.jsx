import React from 'react' //Con esto podemos "usar html" dentro de un .js sin tener que manipular el DOM con funciones como getDocumentbyId =P
import BarraDeNavegacion from './componentes/BarraDeNavegacion/BarraDeNavegacion'

const App = () => {
  return (
    <div className='app'>
      <BarraDeNavegacion/> {/*Toma todo el codigo del "barradenavegacion.jsx" y lo pone aqui o en donde queramos, React sirve para esto*/}
    </div>
  )
}

export default App
