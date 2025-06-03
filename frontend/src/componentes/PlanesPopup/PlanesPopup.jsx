import React from 'react'
import './PlanesPopup.css'

const PlanesPopup = () => {
  return (
    <div className='planes-popup'>
      <form className='planes-popup-container'>
        <div className='planes-popup-titulo'>
          <h2>Formulario</h2>
          <h4>Ingrese los siguientes datos para generar su propio plan</h4>
        </div>
        <div className="planes-popup-inputs">
          <input type="number" placeholder="Edad" required min="1" />

          <select required>
            <option value="">Sexo</option>
            <option value="femenino">Femenino</option>
            <option value="masculino">Masculino</option>
          </select>

          <input type="number" step="0.01" placeholder="Altura (m)" required min="1" max="2.5" />
          <input type="number" step="0.1" placeholder="Peso actual (kg)" required min="30" max="250" />

          <select required>
            <option value="1">1 día</option>
            <option value="2">2 días</option>
            <option value="3">3 días</option>
            <option value="4">4 días</option>
            <option value="5">5 días</option>
            <option value="6">6 días</option>
            <option value="7">7 días</option>
          </select>

          <label>Equipo disponible:</label>
          <div className="equipamiento-checks">
            <label><input type="checkbox" name="equipo" value="mancuernas" /> Mancuernas</label>
            <label><input type="checkbox" name="equipo" value="banda" /> Bandas de resistencia</label>
            <label><input type="checkbox" name="equipo" value="barra" /> Barra</label>
            <label><input type="checkbox" name="equipo" value="colchoneta" /> Colchoneta</label>
            <label><input type="checkbox" name="equipo" value="banco" /> Banco de pesas</label>
            <label><input type="checkbox" name="equipo" value="ninguno" /> Ninguno</label>
          </div>

          <textarea placeholder="Problemas de salud o limitaciones físicas" required rows="2"></textarea>

          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default PlanesPopup
