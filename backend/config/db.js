import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://andremallco2002:rcWJbCT3D6rYEM4V@fitweb.yp1mnhe.mongodb.net/fit", {
    });
    
    console.log("🔥 Conectado a MongoDB");
  } catch (error) {
    console.error("❌ Error en la conexión a MongoDB:", error);
    process.exit(1); // Sale del proceso si hay error
  }
};
