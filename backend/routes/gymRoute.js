import express from 'express';
import { addgym, listgym, removegym } from '../controllers/gymController.js'
import multer from 'multer';

const gymRoute = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); //donde se guardaran los archivos
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
;
    }
}); //nombre del arch

const upload = multer({ storage: storage });

// creamos un objeto de almacenamiento con multer
gymRoute.post('/addgym', upload.single("image"), addgym);
gymRoute.get("/list", listgym)
gymRoute.post("/remove", removegym);



export default gymRoute;