import React, { useEffect } from "react";
import {useProductsCategory} from "../../../../context/ProductsCategoryFilter"
import ProductCategorySection from "./ProductsCategorySection";
import ProductCategoryCard from "./ProductCategoryCard";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";


const productCategory = () => {
  const { productCategory, loading, fetchProductsCategorys } = useProductsCategory();
  const location = useLocation();
  const currentURL = location.pathname;
  useEffect(() => {
    fetchProductsCategorys;
  }, [currentURL]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <ProductCategorySection />
      <ProductCategoryCard />
    </motion.div>
  );
};

export default productCategory;
