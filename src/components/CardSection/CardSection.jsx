import React from "react";
import cochesito from "../../img/cochechito.jpeg"
import dormitorio from "../../img/dormitorio.avif";
import butaca from "../../img/butaca.jpg"
import { Link } from "react-router-dom";


const CardSection = () => {
  return (
    <div className="flex justify-center gap-8 flex-wrap mt-12">
      <div className=" relative w-[24.1rem]">
        <img
          style={{
            borderRadius: "1rem",
          }}
          className="w-full h-[16rem]"
          src={cochesito}
          alt="Imagen de fondo"
        />

        <div
          className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white opacity-80"
          style={{ zIndex: 0 }}
        ></div>
         <div
          style={{ zIndex: 10 }}
          className="absolute flex flex-col items-start content-center top-0 left-0 right-0 p-4 text-white"
        >
          <h2 className="text-2xl font-bold mb-2 text-[#ff9fce]">
            Accesorios
          </h2>
          <p className="text-sm font-bold">para dormitorios</p>
          <Link to={"/productos/ACCESORIOS"} className="bg-[#ff9fce] ml-[-4px] hover:bg-[#fabfdb] text-xs text-white  py-2 px-4 mt-4 rounded-full">
            Ver Más
          </Link>
        </div>
      </div>
      <div className=" relative w-[24.1rem]">
        <img
          style={{
            borderRadius: "1rem",
          }}
          className="w-full h-[16rem]"
          src={"https://http2.mlstatic.com/D_NQ_NP_659418-MLA54741084711_032023-O.webp"}
          alt="Imagen de fondo"
        />

        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white opacity-80"
          style={{ zIndex: 0 }}
        ></div>
         <div
          style={{ zIndex: 10 }}
          className="absolute flex flex-col items-start content-center top-0 left-0 right-0 p-4 text-white"
        >
          <h2  style={{ zIndex: 10 }} className="text-2xl font-bold mb-2 text-[#ff9fce]">
            Chifoniers
          </h2>
          <p className="text-sm font-bold">Para tu dormitorio</p>
          <Link to={"/productos/chifoniers"} className="bg-[#ff9fce] hover:bg-[#fabfdb] text-xs text-white  py-2 px-4 mt-4 rounded-full">
            Ver Más
          </Link>
        </div>
      </div>
      <div className=" relative mb-20 w-[24.1rem] ">
        <img
          style={{
            borderRadius: "1rem",
          }}
          className="w-full h-[16rem]"
          src={dormitorio}
          alt="Imagen de fondo"
        />

        <div
          className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white opacity-80"
          style={{ zIndex: 0 }}
        ></div>
        <div
          style={{ zIndex: 10 }}
          className="absolute flex flex-col items-start content-center top-0 left-0 right-0 p-4 text-white"
        >
          <h2 className="text-2xl font-bold mb-2 text-[#ff9fce]">
            Dormitorios
          </h2>
          <p className="text-sm font-bold">Completos</p>
          <Link to={"/productos/DORMITORIOS%20COMPLETOS"} className="bg-[#ff9fce] hover:bg-[#fabfdb] text-xs text-white  py-2 px-4 mt-4 rounded-full">
            Ver Más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
