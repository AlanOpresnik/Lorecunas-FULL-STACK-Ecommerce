import React from "react";
import logo from "../../img/logo.jpg";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Footer = () => {
  return (
    <footer
      className="text-gray-600 body-font mt-16 md:mt-6"
      style={{
        borderTop: "1px solid rgba(0,0,0,0.2)",
      }}
    >
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-center md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 md:w-[120px] lg:w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img className="w-full md:w-[120px] lg:w-full" src={logo} />
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Hace mas de 16 años brindando la mejor atencion y calidad del
            mercado
          </p>
        </div>

        <div className="flex-grow flex flex-wrap md:pl-10 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIAS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 cursor-pointer  hover:text-[#FD98CA]">
                  CUNAS FUNCIONALES
                </a>
              </li>
              <li>
                <a className="text-gray-600 cursor-pointer hover:text-[#FD98CA] uppercase">
                  Cunas Melamina
                </a>
              </li>
              <li>
                <a className="text-gray-600 cursor-pointer hover:text-[#FD98CA]">
                  CUNAS FUTURISTAS
                </a>
              </li>
              <li>
                <a className="text-gray-600 cursor-pointer hover:text-[#FD98CA] uppercase ">
                  juguetes
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CONTACTO
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 cursor-pointer hover:text-[#FD98CA]">
                  WATSHAPP
                </a>
              </li>
              <li>
                <a className="text-gray-600 cursor-pointer hover:text-[#FD98CA]">
                  INSTAGRAM
                </a>
              </li>
              <li>
                <a className="text-gray-600 cursor-pointer hover:text-[#FD98CA]">
                  TIK TOK
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <a className="text-gray-600 cursor-pointer hover:text-[#FD98CA]">
                  <LocalPhoneIcon sx={{ width: "18px", height: "18px" }} />{" "}
                  +1158122033
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              METODOS DE PAGO
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 cursor-pointer hover:text-[#FD98CA]">
                  MERCADO PAGO
                </a>
              </li>
              <li>
                <a className="text-gray-600 cursor-pointer hover:text-[#FD98CA]">
                  DEBITO/CREDITO
                </a>
              </li>
              <li>
                <a className="text-gray-600 cursor-pointer hover:text-[#FD98CA]">
                  EFECTIVO
                </a>
              </li>
              <li>
                <a className="text-gray-600 cursor-pointer hover:text-[#FD98CA]">
                  TRANSFERENCIA BANCARIA
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              NAVEGACION
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 cursor-pointer hover:text-[#FD98CA]">
                  INICIO
                </a>
              </li>
              <li>
                <a className="text-gray-600 cursor-pointer hover:text-[#FD98CA]">
                  PRODUCTOS
                </a>
              </li>
              <li>
                <a className="text-gray-600 cursor-pointer hover:text-[#FD98CA]">
                  OFERTAS
                </a>
              </li>
              <li>
                <a className="text-gray-600 cursor-pointer hover:text-[#FD98CA]">
                  NOSOTROS
                </a>
              </li>
            </nav>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end">
        <h4 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ESTAMOS UBICADOS EN</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.1943169570636!2d-58.730572323462475!3d-34.62452945859889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbe250320443d%3A0xf133d4e47ac97fe8!2sLore%20Cunas!5e0!3m2!1ses-419!2sar!4v1698936758923!5m2!1ses-419!2sar"

          height="250"
          style={{ border: "0" }}
          className="w-[250px] md:w-[300px]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2020 Lorecunas —
            <a
              href="https://www.instagram.com/lorecunas/?hl=es"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @alan_opk
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a
              href="https://www.facebook.com/LORECUNASOUTLET?locale=es_LA"
              target="__BLANK"
              className="text-gray-500 hover:text-[#FD98CA] cursor-pointer"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>

            <a
              href="https://www.instagram.com/lorecunas/?hl=es"
              target="_BLANK"
              className="ml-3 text-gray-500 hover:text-[#FD98CA] cursor-pointer"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
