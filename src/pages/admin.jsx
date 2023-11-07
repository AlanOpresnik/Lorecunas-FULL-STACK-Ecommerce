import React, { useEffect, useState } from "react";
import axios from "axios";
import { useProductsDestacados } from "../context/ProductsDestacadosContext";
import ProductAdminCard from "./admin/adminComponents/productAdminCard";

const Admin = () => {

  const { productDestacado, loading, } = useProductsDestacados();
  console.log(productDestacado);

  if (loading) {
    return <p>Cargando Productos...</p>;
  }

  return (
    <div>
      <div className="mt-6 ">
      <h3 className="text-center mb-8 text-xl font-bold border-b-2 py-2">Manejo de productos</h3>
       {productDestacado.map((prod) => (
        <ProductAdminCard prod={prod}/>
       ))}
      </div>
    </div>
  );
};

export default Admin;
