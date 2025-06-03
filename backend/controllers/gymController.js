import gymModel from "../models/gymModels.js";
import fs from "fs";

//añadiendo los productos del gym a la base de datos 
const addgym = async (req, res) => {
 image_filename = `${req.file.filename}`;
  const gym = new gymModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: ["image_filename"], 
    category: req.body.category,
  });
  try {
    await gym.save();
    res.json({ sucess: true, message: "Gym item added successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//añadiendo lista de gym (esto lo maneja el admingym)
// Listando los productos del gym
const listgym = async (req, res) => {
  try {
    const gyms = await gymModel.find({});
    res.json({ success: true, data: gyms });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

//remove gym item
const removegym = async (req, res) => {
  try {
    const gym = await gymModel.findById(req.body.id);
    fs.unlink(`uploads/${gym.image}`, () => {});
    await gymModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "gym removed" });
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"error"})
  }
};
 
export { addgym, listgym, removegym };