import React, { useEffect, useState } from "react";
import axios from "axios";
import { useProductsDestacados } from "../context/ProductsDestacadosContext";
import ProductAdminCard from "./admin/adminComponents/productAdminCard";

const Admin = () => {
  const { productDestacado, loading } = useProductsDestacados();

  if (loading) {
    return <p>Cargando Productos...</p>;
  }

  return (
    <div>
        <h3 className="text-center mb-8 text-xl font-bold border-b-2 py-2">
          Manejo de productos
        </h3>
      <div className="mt-6  pb-6 ">
        {productDestacado.length > 0 ? productDestacado.map((prod) => (
          <div className="mt-6 border-b p-2">
          <ProductAdminCard prod={prod} />
          </div>
        )):(
          <p className="text-center text-xl">No hay nigun producto subido actualmente <br></br> ¿que esperas a subir uno nuevo?  😁</p>
          
        )}
        
      </div>
    </div>
  );
};

export default Admin;
