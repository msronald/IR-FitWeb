
/**
 * CONFIGURANDO EL SERVIDOR.....
 */


// Importamos Express para crear el servidor
import "dotenv/config"
import express from "express";
// Importamos CORS para permitir solicitudes desde diferentes orígenes (necesario para frontend-backend)
import cors from "cors";
import { connectDB } from "./config/db.js";
import gymRoute from "./routes/gymRoute.js";
import userRouter from "./routes/userRoute.js";
import orderRouter from "./routes/orderRoute.js";
import cartRouter from "./routes/cartRoute.js";

// Creamos una instancia de la aplicación Express
const app = express();
// Definimos el puerto en el que correrá el servidor
const port = 4000;
// Conectamos a la base de datos MongoDB
// Middleware para habilitar el uso de JSON en las solicitudes
app.use(express.json());
// Middleware para permitir solicitudes desde otros dominios (CORS)
app.use(cors());

//db coneccion
connectDB();

//Api endoints
app.use("/api/gym", gymRoute); // Ruta para manejar las operaciones relacionadas con el gimnasio
app.use("/images",express.static("uploads")) //para mostrar las imagenes en uploads
app.use("/api/user", userRouter);
app.use("/api/order", orderRouter); // Ruta para las ordenes 
app.use("/api/cart", cartRouter); // Ruta para el carrito de compras 

// Ruta principal: responde con un mensaje cuando se accede a "/"
app.get("/", (req, res) => {
  res.send("API Working"); // Responde con un mensaje simple para verificar que la API está en funcionamiento
});

// Inicia el servidor y escucha en el puerto definido
app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port} `); // Mensaje en consola indicando que el servidor está en ejecución
});