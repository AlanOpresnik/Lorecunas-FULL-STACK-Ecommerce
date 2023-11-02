import { useContext } from "react";
import { ProductsDestacadosContext } from "../context/ProductsDestacadosContext";

export const useOferts = () => {
  const { productDestacado, loading, fetchProductDestacados } = useContext(ProductsDestacadosContext);
  return { productDestacado, loading , fetchProductDestacados };
};