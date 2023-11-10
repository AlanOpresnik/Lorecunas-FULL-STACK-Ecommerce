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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3900/api/products/getProducts"
        );
        setProductDestacado(response.data.products);

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: "Estas seguro que deseas eliminar este producto?",
      showDenyButton: true,
      confirmButtonText: "Si, eliminar",
      denyButtonText: `Canecelar`,
      icon:"error",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        try {
          axios.delete(
            `http://localhost:3900/api/products/deleteProduct/${id}`
          );
          Swal.fire({title:"el producto se elimino correctamente", icon:"success"});
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
      value={{ productDestacado, loading, handleDeleteProduct }}
    >
      {children}
    </ProductsDestacadosContext.Provider>
  );
};
