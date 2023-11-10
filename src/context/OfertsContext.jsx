import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const OfertsContext = createContext();

export const useOferts = () => {
  return useContext(OfertsContext);
};

export const OfertsProvider = ({ children }) => {
  const [oferts, setOferts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOfert = async () => {
    try {
      const response = await axios.get("http://localhost:3900/api/oferts/getOferts");
      setOferts(response.data.oferts);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOfert();
  }, []);

  const fetchImagesForOfert = async (ofertId) => {
    try {
      const response = await axios.get(`http://localhost:3900/api/oferts/ofert/${ofertId}/images`);
      return response.data.images;
    } catch (error) {
      console.error(error);
    }
  };
  
  const uploadImageForOfert = async (ofertId, formData) => {
    try {
      const response = await axios.post(
        `http://localhost:3900/api/oferts/ofert/${ofertId}/images`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      return response.data.editedOfert;
    } catch (error) {
      console.error("Error al subir la imagen:", error);
    }
  };
  
  
  const handleDeleteOfert = async (id) => {
    Swal.fire({
      title: "Estas seguro que deseas eliminar esta oferta?",
      showDenyButton: true,
      confirmButtonText: "Si, eliminar",
      denyButtonText: `Canecelar`,
      icon:"error",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        try {
          axios.delete(`http://localhost:3900/api/oferts/deleteOfert/${id}`);
          Swal.fire({title:"la oferta se elimino correctamente", icon:"success",});
        } catch (error) {
          console.log(error);
        } 
      } else if (result.isDenied) {
        return;
      }
    });
  };
   


  return (
    <OfertsContext.Provider value={{ oferts, loading, fetchOfert, handleDeleteOfert, fetchImagesForOfert , uploadImageForOfert }}>
      {children}
    </OfertsContext.Provider>
  );
};