import React, { useEffect } from "react";
import { useOferts } from "../../context/OfertsContext"; // Asegúrate de que la ruta sea correcta
import { Link } from "react-router-dom"; // Importa el componente Link
import FormatoDinero from "../../helpers/FormatearDinero";
import { Chip } from "@mui/material";

const OfertCard = () => {
  const { oferts, loading } = useOferts();
  console.log(oferts);

  if (loading) {
    return <p>Cargando ofertas...</p>;
  }
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto min-w-full w-full px-4 py-6 lg:py-4 sm:px-6 sm:py-24  lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900"></h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {oferts.map((ofert) => (
              <div
                key={ofert._id}
                className="group relative shadow transition-shadow hover:shadow-lg p-6 pt-0 rounded px-0 min-w-[20rem]"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none transition-opacity group-hover:opacity-75 lg:h-80">
                  <img
                    src={
                      import.meta.env.VITE_API_FAV_DRAWER +
                      ofert.images[0].filename
                    }
                    alt={ofert.title}
                    className="h-[22rem] w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="p-3">
                    <h3 className="text-lg  font-bold  ">
                      <Link
                        className="line-clamp-1 mr-5"
                        to={`/ofertDetail/${ofert._id}`}
                      >
                        <span aria-hidden="true" className="absolute inset-0" />
                        {ofert.title}
                      </Link>
                    </h3>
                    <div className="flex items-center gap-2">
                      <p className="text-2xl font-bold text-[#ff9fce]">
                        <FormatoDinero monto={ofert.price} />
                      </p>
                      <p className="text-xl  text-gray-400 line-through">
                        <FormatoDinero monto={ofert.beforePrice} />
                      </p>
                    </div>
                    <p className="mt-1  line-clamp-2  text-sm text-gray-500">
                      {ofert.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfertCard;
