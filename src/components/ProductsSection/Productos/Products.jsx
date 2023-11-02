import React, { useEffect } from "react";
import { useProductsDestacados } from "../../../context/ProductsDestacadosContext";
import ProductCard from "./ProductsCard";
import ProductsSection from "./ProductsSection";
import { motion } from "framer-motion";

const ProductDestacados = () => {
  const { productDestacado, loading, fetchProductDestacados } =
    useProductsDestacados();
  useEffect(() => {
    fetchProductDestacados;
  }, [productDestacado]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <ProductsSection />
      <ProductCard />
    </motion.div>
  );
};

export default ProductDestacados;
