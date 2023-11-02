import React from "react";
import cochesito from "../../img/cochechito.jpeg"
import dormitorio from "../../img/dormitorio.avif";
import butaca from "../../img/butaca.jpg"


const CardSection = () => {
  return (
    <div className="flex justify-center gap-8 flex-wrap mt-12">
      <div className=" relative">
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
            Cochecitos
          </h2>
          <p className="text-sm font-bold">De paseo</p>
          <button className="bg-[#ff9fce] ml-[-4px] hover:bg-[#fabfdb] text-xs text-white  py-2 px-4 mt-4 rounded-full">
            Ver Más
          </button>
        </div>
      </div>
      <div className=" relative">
        <img
          style={{
            borderRadius: "1rem",
          }}
          className="w-full h-[16rem]"
          src={butaca}
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
            Butacas
          </h2>
          <p className="text-sm font-bold">De seguridad</p>
          <button className="bg-[#ff9fce] hover:bg-[#fabfdb] text-xs text-white  py-2 px-4 mt-4 rounded-full">
            Ver Más
          </button>
        </div>
      </div>
      <div className=" relative mb-20 ">
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
          <button className="bg-[#ff9fce] hover:bg-[#fabfdb] text-xs text-white  py-2 px-4 mt-4 rounded-full">
            Ver Más
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
