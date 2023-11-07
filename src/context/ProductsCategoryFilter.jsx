import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductsCategoryContext = createContext();

export const useProductsCategory = () => {
  return useContext(ProductsCategoryContext);
};

export const ProductsCategoryProvider = ({ children }) => {
  const [productCategory, setProductCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    const fetchProductsCategorys = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3900/api/products/getProductFiltrado/${category}`
        );
        setProductCategory(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchProductsCategorys();
  }, [category]);

  return (
    <ProductsCategoryContext.Provider
      value={{ productCategory, loading }}
    >
      {children}
    </ProductsCategoryContext.Provider>
  );
};
