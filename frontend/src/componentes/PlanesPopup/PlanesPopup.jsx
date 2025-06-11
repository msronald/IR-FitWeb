import React from 'react'
import './PlanesPopup.css'
import {InferenceClient} from "@huggingface/inference"

const PlanesPopup = () => {

  const handleSubmit = async (submitEvent) => {
    submitEvent.preventDefault();

    const formulario = new FormData(submitEvent.target);

    const edad = formulario.get("edad");
    const sexo = formulario.get('sexo');
    const altura = formulario.get('altura');
    const peso = formulario.get('peso');
    const dias = formulario.get('dias');
    const salud = formulario.get('salud');
    const equipo = formulario.getAll("equipo");

    const prompt = `
      Eres un entrenador personal. Crea un plan de entrenamiento semanal breve y estructurado para una persona de ${edad} años, sexo ${sexo}, altura ${altura} metros, peso ${peso} kilogramos. Esta persona entrenará ${dias} días por semana y tiene el siguiente equipo disponible: ${equipo.join(', ')}. La persona tiene las siguientes limitaciones o problemas de salud: ${salud}.
      
      El plan debe ser claro y separado por días. Limita la respuesta a solo el plan. No incluyas saludos ni explicaciones.

      Ejemplo de formato:
      Día 1: Cardio y flexiones
      Día 2: Sentadillas y entrenamiento con bandas
      Día 3: Estiramientos y descanso activo
      Día 4: Ejercicios de fuerza con mancuernas
      Día 5: Cardio ligero y abdominales
      Día 6: Descanso
      Día 7: Caminata de recuperación

      Genera un plan similar para este caso:
    `;

    console.log("Datos del formulario:", { edad, sexo, altura, peso, dias, salud, equipo });
    const hf = new InferenceClient(import.meta.env.VITE_HF_ACCESS_TOKEN);

    try {
      const respuesta = await hf.chatCompletion({
        provider: "novita",
        model: "deepseek-ai/DeepSeek-V3-0324",
        messages: [
          {
              role: "user",
              content: prompt,
          },
        ],
      });

      const texto = respuesta.choices[0].message
      alert(texto ?? "No se pudo generar el plan");
      console.log(texto.content);
    } catch (error) {
      console.error("Error al generar el plan:", error);
      alert("Ocurrió un error al generar el plan.");
    }
  }
  return (
    <div className='planes-popup'>
      <form className='planes-popup-container' onSubmit={handleSubmit}>
        <div className='planes-popup-titulo'>
          <h2>Formulario</h2>
          <h4>Ingrese los siguientes datos para generar su propio plan</h4>
        </div>
        <div className="planes-popup-inputs">
          <input type="number" name="edad" placeholder="Edad" required min="1" max="99" step="1"/> {/*Estos campos enrealidad necesitarán de consistencia*/}

          <select required name="sexo">
            <option value="">Sexo</option>
            <option value="femenino">Femenino</option>
            <option value="masculino">Masculino</option>
          </select>

          <input type="number" step="0.01" placeholder="Altura (m)" required min="1" max="2.5" name="altura"/>
          <input type="number" step="0.1" placeholder="Peso actual (kg)" required min="30" max="250" name="peso"/>

          <select required name="dias">
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

          <textarea name="salud" placeholder="Problemas de salud o limitaciones físicas" required rows="2"></textarea>

          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default PlanesPopup
