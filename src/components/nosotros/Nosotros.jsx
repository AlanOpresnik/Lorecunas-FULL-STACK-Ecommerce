import React, { useEffect } from "react";
import nosotrosFamiliaImg from "../../img/nosotrosFamilia.jpeg";
import nosotrosEspecialistas from "../../img/nosotrosEspecialistas.jpg"
import nosotrosFabrica from "../../img/nosotrosFabrica.jpg"

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
    <section className="text-gray-600 body-font mt-[10rem] md:mt-[10rem] max-w-[1250px]">
      <div className="familia border-b-2 container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-6 items-center text-center">
          <h3 className="title-font border-b-2 border-[#FE98CB] w-fit sm:text-4xl text-4xl mb-4 font-medium text-gray-900">
            ¿Quienes Somos?
          </h3>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
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
          <p className="title-font border-b-2 border-[#FE98CB] w-fit sm:text-[1.98rem] text-4xl mb-4 font-medium text-gray-900">
            Estamos recomendados por especialistas
          </p>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
        </div>
      </div>

      <div className="clientes container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-6 items-center text-center">
          <h3 className="title-font border-b-2 border-[#FE98CB] sm:text-4xl text-4xl mb-4 font-medium text-gray-900">
            Nuestra fabrica
          </h3>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
          <img
            className="object-cover object-center rounded-lg h-[400px] md:h-[550px]"
            alt="hero"
            src={nosotrosFabrica}
          />
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
