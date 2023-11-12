import React, { useEffect, useState, useRef } from "react";
import newsLetterImg from "../../img/newsletterIMG.jpg";
import "./animationNewsLetterDivider.css";

const NewsLetterDivider = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [animationsActivated, setAnimationsActivated] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const windowHeight = window.innerHeight;
        const sectionRect = sectionRef.current.getBoundingClientRect();

        // Calcula el progreso del scroll basado en la posición relativa de la sección
        const progress = 1 - sectionRect.top / windowHeight;

        // Asegúrate de que el progreso esté dentro del rango [0, 1]
        const clampedProgress = Math.min(1, Math.max(0, progress));
        setScrollProgress(clampedProgress);

        // Activa las animaciones una vez que el progreso alcance cierto umbral
        if (clampedProgress >= 0.3) {
          setAnimationsActivated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="text-gray-600 body-font border-t-2">
      <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
        <div
          className={`newsletter-divider-section lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-5 md:mb-0 items-center text-center ${
            animationsActivated ? "slide-in-left block" : "hidden"
          }`}
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Lorecunas
          </h1>
          <p className="mb-8 max-w-[550px]">
            Recibi informacion de nuestros nuevos modelos e ingresos de stock
            colocando tu email aqui
          </p>
          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
              <label
                htmlFor="hero-field"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="inline-flex text-white bg-[#fd98ca] border-0 py-2 px-6 focus:outline-none hover:bg-[#fcb8da] rounded text-lg">
              Enviar
            </button>
          </div>
          <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
            Quiero recibir correos electronicos de @lorecunas
          </p>
          <div className="flex lg:flex-row md:flex-col"></div>
        </div>
        <div
          className={`newsletter-divider-section lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative ${
            animationsActivated ? "slide-in-right block" : "hidden"
          }`}
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-white opacity-50 rounded"></div>
          <img
            className="object-cover object-center rounded max-h-[280px] w-[580px] md:max-h-[450px]"
            alt="hero"
            src={newsLetterImg}
          />
        </div>
      </div>
    </section>
  );
};

export default NewsLetterDivider;
