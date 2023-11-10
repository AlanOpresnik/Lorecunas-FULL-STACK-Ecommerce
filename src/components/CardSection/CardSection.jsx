import React from "react";
import cochesito from "../../img/cochechito.jpeg"
import dormitorio from "../../img/dormitorio.avif";
import butaca from "../../img/butaca.jpg"


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
          <button className="bg-[#ff9fce] ml-[-4px] hover:bg-[#fabfdb] text-xs text-white  py-2 px-4 mt-4 rounded-full">
            Ver Más
          </button>
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
          <button href={"https://www.argentina.gob.ar/noticias/impulso-un-nuevo-reglamento-para-reforzar-la-seguridad-de-cunas"} className="bg-[#ff9fce] hover:bg-[#fabfdb] text-xs text-white  py-2 px-4 mt-4 rounded-full">
            Ver Más
          </button>
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
          <button className="bg-[#ff9fce] hover:bg-[#fabfdb] text-xs text-white  py-2 px-4 mt-4 rounded-full">
            Ver Más
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
