import React, { useEffect, useState } from "react";
import { useProductsDestacados } from "../../../context/ProductsDestacadosContext"; // Asegúrate de que la ruta sea correcta
import { Link } from "react-router-dom"; // Importa el componente Link
import AsideCategory from "../../asideCategory/AsideCategory";
import FormatoDinero from "../../../helpers/FormatearDinero";

const ProductDestacadoCard = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { productDestacado, loading } = useProductsDestacados();
  if (loading) {
    return <p>Cargando Productos...</p>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl min-w-2xl px-4 py-2 lg:py-4 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900"></h2>
        {isMobile ? (
          <>
            <AsideCategory productDestacado={productDestacado} />
            <div className="col-span-4 lg:col-span-4">
              <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-3 xl:gap-x-8">
                {productDestacado.map((product) => (
                  <div
                    key={product._id}
                    className="group min-w-full relative shadow transition-shadow hover:shadow-lg p-6 pt-0 rounded px-0"
                  >
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none transition-opacity group-hover:opacity-75 lg:h-80">
                      <img
                        src={
                          import.meta.env.VITE_API_FAV_DRAWER +
                          product.images[0].filename
                        }
                        alt={product.title}
                        className="h-[200px] w-[400px] object-cover object-center lg:h-full lg:w-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div className="p-3">
                        <h3 className=" font-bold">
                          <Link
                            className="line-clamp-1 mr-5"
                            to={`/productDetail/${product._id}`}
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.title}
                          </Link>
                        </h3>
                        <p className="text-lg font-bold text-[#ff9fce]">
                        <FormatoDinero monto={product.price}/>
                        </p>
                        <p className="mt-1 line-clamp-2 text-sm max-w-[250px] text-gray-500">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="col-span-1 lg:col-span-1">
              <AsideCategory productDestacado={productDestacado} />
            </div>
            <div className="col-span-4 lg:col-span-4">
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {productDestacado.map((product) => (
                  <div
                    key={product._id}
                    className="group relative shadow transition-shadow hover:shadow-lg p-6 pt-0 rounded px-0"
                  >
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none transition-opacity group-hover:opacity-75 lg:h-80">
                      <img
                        src={
                          import.meta.env.VITE_API_FAV_DRAWER +
                          product.images[0].filename
                        }
                        alt={product.title}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div className="p-3">
                        <h3 className="text-lg font-bold">
                          <Link
                            className="line-clamp-1 mr-5"
                            to={`/productDetail/${product._id}`}
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.title}
                          </Link>
                        </h3>
                        <p className="text-2xl font-bold text-[#ff9fce]">
                         <FormatoDinero monto={product.price}/>
                        </p>
                        <p className="mt-1 line-clamp-2 max-w-[265px] text-sm text-gray-500">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDestacadoCard;
