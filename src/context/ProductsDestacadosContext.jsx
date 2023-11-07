import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

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
    try {
      axios.delete(`http://localhost:3900/api/products/deleteProduct/${id}`);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <ProductsDestacadosContext.Provider value={{ productDestacado, loading , handleDeleteProduct}}>
      {children}
    </ProductsDestacadosContext.Provider>
  );
};
