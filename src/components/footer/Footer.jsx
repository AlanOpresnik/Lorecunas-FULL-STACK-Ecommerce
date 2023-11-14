import React from "react";
import logo from "../../img/logo.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const Footer = () => {
  const position = [-34.6245338, -58.7328683,17]; // Latitud y longitud del Puente Márquez 978


  return (
    <footer
      className="text-gray-600 body-font mt-16 md:mt-6"
      style={{
        borderTop: "1px solid rgba(0,0,0,0.2)",
      }}
    >
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-center md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 md:w-[120px] lg:w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img className="w-full md:w-[120px] lg:w-full" src={logo} alt="logo lorecunas"/>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Hace mas de 20 años brindamos la mejor atencion, calidad y precio del mercado
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
                  Dormitorios
                </a>
              </li>
              <li>
                <a className="text-gray-600 cursor-pointer hover:text-[#FD98CA]">
                  ROPEROS
                </a>
              </li>
              <li>
                <a className="text-gray-600 cursor-pointer hover:text-[#FD98CA] uppercase ">
                  PROMOS
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
                <a phoneNumber="+541169393427"  className="text-gray-600 cursor-pointer hover:text-[#FD98CA]">
                  <LocalPhoneIcon sx={{ width: "18px", height: "18px" }} />{" "}
                  +1169393427
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
                <Link to={'/'} className="text-gray-600 cursor-pointer hover:text-[#FD98CA]">
                  INICIO
                </Link>
              </li>
              <li>
                <Link to={"/productos"} className="text-gray-600 cursor-pointer hover:text-[#FD98CA]">
                  PRODUCTOS
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-gray-600 cursor-pointer hover:text-[#FD98CA]">
                  OFERTAS
                </Link>
              </li>
              <li>
                <Link to={"/nosotros"} className="text-gray-600 cursor-pointer hover:text-[#FD98CA]">
                  NOSOTROS
                </Link>
              </li>
            </nav>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-end mt-6 md:mt-0">
        <h4 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ESTAMOS UBICADOS EN</h4>
     
        <MapContainer center={position} zoom={13} style={{ height: "250px", width: "250px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; LORECUNASFABRICA'
      />
      <Marker position={position}>
        <Popup><a target="_BLANK" href="https://www.google.com/maps/@-34.6245338,-58.7328683,17z?entry=ttu">VER UBICACION</a></Popup>
      </Marker>
    </MapContainer>
        
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2023 Lorecunas —
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
            aria-label="facebook"
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
            aria-label="instagram"
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
