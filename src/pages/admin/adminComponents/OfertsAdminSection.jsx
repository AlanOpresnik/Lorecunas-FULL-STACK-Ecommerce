import React, { useState, useEffect } from "react";
import { useOferts } from "../../../context/OfertsContext";
import OfertAdminCard from "./OfertAdminCard";
import axios from "axios";
import { Navigate } from "react-router-dom";

const OfertsAdminSection = () => {
  const { oferts } = useOferts();

  return (
    <>
      <div>
        <div className="mt-6 ">
          <h3 className="text-center mb-8 text-xl font-bold border-b-2 py-2">
            TUS OFERTAS ACTUALES
          </h3>
          {oferts.length > 0
            ? oferts.map((ofert, index) => (
                <div className="mt-6" key={ofert._id}>
                  <OfertAdminCard key={ofert._id} ofert={ofert} index={index} />
                </div>
              ))
            : (
              <p className="text-center text-xl">No hay ninguna oferta activa 😔</p>
            )}
        </div>
      </div>
    </>
  );
};

export default OfertsAdminSection;
