import React, { useEffect, useState } from "react";
import { useProductsCategory } from "../../../../context/ProductsCategoryFilter";
import { Link } from "react-router-dom"; // Importa el componente Link
import AsideCategory from "../../../asideCategory/AsideCategory";

const ProductCategoryCard = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { productCategory, loading } = useProductsCategory();

  if (loading) {
    return <p>Cargando Productos...</p>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-2 lg:py-4 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900"></h2>
        {isMobile ? (
          <>
            <AsideCategory />
            <div className="col-span-4 lg:col-span-4">
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {productCategory.length < 1 && (
                  <p className="mt-[1.8rem] w-full">
                    No hay productos en esta categoria. 😔
                  </p>
                )}
                {productCategory.map((product) => (
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
                          ${product.price}
                        </p>
                        <p className="mt-1 line-clamp-2 text-sm text-gray-500">
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
              <AsideCategory />
            </div>

            <div className="col-span-4 lg:col-span-4">
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {productCategory.length < 1 && (
                  <p className="ml-[7.2rem] w-full">
                    No hay productos en esta categoria. 😔
                  </p>
                )}
                {productCategory.map((product) => (
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
                          ${product.price}
                        </p>
                        <p className="mt-1 line-clamp-2 text-sm text-gray-500">
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

export default ProductCategoryCard;
