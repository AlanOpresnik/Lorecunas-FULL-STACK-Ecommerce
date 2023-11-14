import React, { useEffect } from "react";
import nosotrosFamiliaImg from "../../img/nosotrosFamilia.jpeg";
import nosotrosEspecialistas from "../../img/nosotrosEspecialistas.webp";
import nosotrosFabrica from "../../img/nosotrosFabrica.jpg";
import nosotrosFabrica3 from "../../img/nosotrosFabrica3.webp";
import nosotrosFabrica2 from "../../img/nosotrosFabrica2.jpeg";
import nosotrosFabrica4 from "../../img/nosotrosFabrica.4.webp";
import Clientes from "./Clientes/Clientes";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Nosotros = () => {
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".familia", {
      duration: 1000,
      distance: "50px",
    });

    const sr2 = ScrollReveal();
    sr.reveal(".especialistas", {
      duration: 2000,
      distance: "50px",
      origin: "left",
      delay: 500,
    });

    const sr3 = ScrollReveal();
    sr.reveal(".clientes", {
      duration: 2000,
      distance: "50px",
      origin: "rigth",
      delay: 500,
    });
  }, []);

  return (
    <section className="text-gray-600 body-font mt-[10rem] md:mt-[10rem] max-w-[1250px] overflow-hidden">
      <div className="familia border-b-2 container mx-auto flex px-5 py-6 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-6 items-center text-center">
          <h3 className="title-font border-b-2 border-[#FE98CB] w-fit sm:text-4xl text-4xl mb-4 font-medium text-gray-900">
            ¿Quienes Somos?
          </h3>
          <p className="mb-8 leading-relaxed">
            En <span className="text-[#FE98CB] font-semibold">Lore Cunas</span>,
            nos enorgullece ofrecer una experiencia única en la elaboración de
            muebles Infanto Juveniles, fusionando calidad excepcional y precios
            asequibles. Nos especializamos en la confección de productos
            utilizando maderas de Pino, Guatambu, MDF y Melamina, asegurando un
            equilibrio perfecto entre precio y calidad. Con un compromiso
            arraigado en la artesanía, cada uno de nuestros muebles refleja la
            dedicación y la habilidad de nuestros artesanos.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center ">
          <img
            className="object-cover object-center rounded-lg h-[400px] md:h-[550px]"
            alt="hero"
            src={nosotrosFamiliaImg}
          />
        </div>
      </div>

      <div className="especialistas border-b-2 container mx-auto px-5 py-14 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-16">
          <img
            className="object-cover object-center rounded-lg h-[400px] md:h-[550px] w-full"
            alt="hero"
            src={nosotrosEspecialistas}
          />
        </div>

        <div className="lg:w-1/2 lg:text-left text-center">
          <p className="title-font border-b-2 pb-4 border-[#FE98CB] w-fit sm:text-[1.98rem] text-4xl mb-4 font-medium text-gray-900">
            Estamos recomendados por especialistas
          </p>
          <p className="mb-8 leading-relaxed">
            En <span className="text-[#FE98CB] font-semibold">Lore Cunas</span>,
            nos enorgullece contar con el respaldo y la recomendación de
            destacados especialistas en el ámbito de mobiliario Infanto Juvenil.{" "}
            <span className="text-[#FE98CB] font-semibold">
              Nuestra dedicación
            </span>{" "}
            a la excelencia en la fabricación de muebles, junto con nuestro
            compromiso constante con la calidad y la innovación, nos ha
            posicionado como una elección confiable y recomendada por
            profesionales del sector.
          </p>
        </div>
      </div>

      <div className="clientes container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-6 items-center text-center">
          <h3 className="title-font border-b-2 border-[#FE98CB] sm:text-4xl text-4xl mb-4 font-medium text-gray-900">
            Nuestra fabrica
          </h3>
          <p className="mb-8 leading-relaxed">
            En el   <span className="text-[#FE98CB] font-semibold">corazón de Lore Cunas</span>, late una fábrica comprometida con la
            excelencia, la creatividad y la dedicación artesanal. Nos
            enorgullece presentarles el alma de nuestros productos, donde la
            magia de la fabricación de muebles Infanto Juveniles cobra vida.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-[20rem] ">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper rounded mt-[1rem]"
          >
            <SwiperSlide>
              <img
                className="object-cover object-center rounded-lg h-[400px] md:h-[550px]"
                alt="hero"
                src={nosotrosFabrica}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-cover object-center rounded-lg h-[400px] md:h-[550px]"
                alt="hero"
                src={nosotrosFabrica2}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-cover object-center rounded-lg h-[400px] md:h-[550px]"
                alt="hero"
                src={nosotrosFabrica3}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-cover object-center rounded-lg h-[400px] md:h-[550px]"
                alt="hero"
                src={nosotrosFabrica4}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <h1 className="title-font border-t-2 py-6 text-center sm:text-4xl text-4xl mb-4 font-medium text-gray-900">
        Nuestros <span className="text-[#FE98CB]">clientes</span> te cuentan su
        experiencia
      </h1>
    </section>
  );
};

export default Nosotros;
