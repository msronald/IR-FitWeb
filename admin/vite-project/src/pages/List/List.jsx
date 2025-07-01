import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";
const List = ({url}) => {
  
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/gym/list`);
  
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };
  const removeFood = async (foodId) => {
    
    
    const response=await axios.post(`${url}/api/gym/remove`,{id:foodId});
    await fetchList();
    if(response.data.success){
      toast.success("Item removido correctamente", {
        autoClose: 1500,
      });

    }else{
      toast.error("Error al remover el item", {
        autoClose: 1500,
      });
    }

  };
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <p>Lista completa de productos</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Imagen</b>
          <b>Nombre</b>
          {/* <b>Description</b> */}
          <b>Categoria</b>
          <b>Precio</b>
          <b>Accion</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/${item.image}`} alt={item.name} />
              <p>{item.name}</p>
              {/* <p>{item.description}</p> */}
              <p>{item.category}</p>
              <p>{item.price}</p>
              {/*<p onClick={() => removeFood(item._id)} className="cursor">
                remove
              </p>*/}
              <button onClick={() => removeFood(item._id)} className="cursor">
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;