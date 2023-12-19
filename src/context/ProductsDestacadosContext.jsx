import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const ProductsDestacadosContext = createContext();

export const useProductsDestacados = () => {
  return useContext(ProductsDestacadosContext);
};

export const ProductsDestacadosProvider = ({ children }) => {
  const [productDestacado, setProductDestacado] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = import.meta.env.VITE_API;
  const apiDelete = import.meta.env.VITE_API_DELETE;

  const fetchProducts = async () => {
    try {
      const response = await axios.get(apiUrl);
      setProductDestacado(response.data.products);
      
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: "¿Estás seguro de que deseas eliminar este producto?",
      showDenyButton: true,
      confirmButtonText: "Sí, eliminar",
      denyButtonText: "Cancelar",
      icon: "error",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(apiDelete + id);
          Swal.fire({
            title: "El producto se eliminó correctamente",
            icon: "success",
          });
  
          // Después de eliminar, volver a obtener la lista de productos
          fetchProducts();
        } catch (error) {
          console.log(error);
        }
      } else if (result.isDenied) {
        return;
      }
    });
  };
  
  return (
    <ProductsDestacadosContext.Provider
      value={{ productDestacado, loading, handleDeleteProduct,fetchProducts }}
    >
      {children}
    </ProductsDestacadosContext.Provider>
  );
};
