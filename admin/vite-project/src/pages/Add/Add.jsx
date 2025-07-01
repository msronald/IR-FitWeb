import React, { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({url}) => {
  
  const [image, setImage] = useState(false);

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Suplemento",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  //conexión con la base de datos
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/gym/addgym`, formData);
    console.log("Respuesta del servidor:", response.data);

    if (response.data.sucess) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Suplementos",
      });

      setImage(false);
      toast.success("Item agregado correctamente!", {
        autoClose: 1500,
        
      }); 
     
    } else {
      toast.error( "Error al agregar el item",{
        autoClose: 1500,
      });

     }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Subir imagen</p>

          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Subir"
            />
          </label>

          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Nombre del producto</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Escribe aquí"
            required
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Descripción del producto</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Escribe aquí"
            required
          />
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Categoria</p>
            <select
              onChange={onChangeHandler}
              value={data.category}
              name="category"
            >
              <option value="Suplementos">Suplemento</option>
              <option value="Accesorios">Accesorios</option>
              <option value="Pesas y barras">Pesas y barras</option>
              <option value="Equipamiento">Equipamiento</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Precio</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="Escribe aquí"
              required
            />
          </div>
        </div>
        <button type="submit" className="add-button">
          Añadir item
        </button>
      </form>
    </div>
  );
};

export default Add;