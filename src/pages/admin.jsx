import React, { useEffect, useState } from "react";
import axios from "axios";
import { useProductsDestacados } from "../context/ProductsDestacadosContext";
import ProductAdminCard from "./admin/adminComponents/productAdminCard";
import ActiveProducts from "./admin/adminComponents/ActiveProducts";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Admin = () => {
  const { productDestacado, loading, fetchProducts } = useProductsDestacados();
  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Cargando Productos...</p>;
  }

  return (
    <div className="overflowX-hidden">
      <h3 className="text-center mb-8 text-xl font-bold border-b-2 py-2">
        Manejo de productos
      </h3>
      <div>
        <ActiveProducts productDestacado={productDestacado} />
      </div>
      <div className="mt-6  pb-6 ">
        {productDestacado.length > 0 ? (
          productDestacado.map((prod) => (
            <div key={prod._id} className="mt-6 border-b p-2">
              <ProductAdminCard key={prod._id} prod={prod} />
            </div>
          ))
        ) : (
          <p className="text-center text-xl">
            No hay nigun producto subido actualmente <br></br> ¿que esperas a
            subir uno nuevo? 😁
          </p>
        )}
      </div>
      <div className="flex justify-center mt-4">
        <Link
          to={"cargarProductos"}
          className=" bg-[#1976D2] p-[.5rem] rounded-lg text-white hover:bg-[#6697c7] transition-colors"
        >
          Cargar un nuevo producto
        </Link>
      </div>
    </div>
  );
};

export default Admin;
