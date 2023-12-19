import React, { useEffect, useState } from "react";
import axios from "axios";
import { useProductsDestacados } from "../context/ProductsDestacadosContext";
import ProductAdminCard from "./admin/adminComponents/productAdminCard";
import ActiveProducts from "./admin/adminComponents/ActiveProducts";
import { Link } from "react-router-dom";

const Admin = () => {
  const { productDestacado, loading, fetchProducts } = useProductsDestacados();
  const [search, setSearch] = useState(""); 
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = productDestacado.filter((prod) =>
      prod.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [search, productDestacado]);

  if (loading) {
    return <p>Cargando Productos...</p>;
  }

  return (
    <div className="">
      <h3 className="text-center mb-4 text-xl font-bold border-b-2 py-2 ">
        Manejo de productos
      </h3>
      <div>
        <ActiveProducts productDestacado={productDestacado} />
      </div>
      <input
        type="text"
        placeholder="Buscar productos"
        value={search}
        className="border w-full p-2 rounded"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="mt-6 overflow-y-scroll max-h-[35rem] pb-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((prod) => (
            <div key={prod._id} className="mt-6 border-b p-2">
              <ProductAdminCard key={prod._id} prod={prod} />
            </div>
          ))
        ) : (
          <p className="text-center text-xl">
            No hay ningún producto que coincida con la búsqueda.
          </p>
        )}
      </div>
      <div className="flex justify-center mt-4">
        <Link
          to={"cargarProductos"}
          className="bg-[#1976D2] p-[.5rem] rounded-lg text-white hover:bg-[#6697c7] transition-colors mb-2"
        >
          Cargar un nuevo producto
        </Link>
      </div>
    </div>
  );
};

export default Admin;
