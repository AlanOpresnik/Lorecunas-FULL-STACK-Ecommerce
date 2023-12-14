import React, { useState, useEffect } from "react";
import { useOferts } from "../../../context/OfertsContext";
import OfertAdminCard from "./OfertAdminCard";
import ActiveOferts from "./ActiveOferts";
import { Link } from "react-router-dom";

const OfertsAdminSection = () => {
  const { oferts, loading } = useOferts();
  if (loading) {
    return <p>Cargando Ofertas...</p>;
  }
  return (
    <>
      <div>
        <div className="mt-6  ">
          <h3 className="text-center mb-8 text-xl font-bold border-b-2 py-2">
            TUS OFERTAS ACTUALES
          </h3>
          <div>
            <ActiveOferts oferts={oferts} />
          </div>
          {oferts.length > 0 ? (
            oferts.map((ofert, index) => (
              <div className="mt-6" key={ofert._id}>
                <OfertAdminCard key={ofert._id} ofert={ofert} index={index} />
              </div>
            ))
          ) : (
            <p className="text-center text-xl">
              No hay ninguna oferta activa 😔
            </p>
          )}
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to={
              "/adminLorecunas/logeado/estadoDelIncioSucces=a878373734674674238283283723467426712/ofertas"
            }
            className=" bg-[#1976D2] p-[.5rem] rounded-lg text-white hover:bg-[#6697c7] transition-colors"
          >
            Cargar una nueva Oferta
          </Link>
        </div>
      </div>
    </>
  );
};

export default OfertsAdminSection;
