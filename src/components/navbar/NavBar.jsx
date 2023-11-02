import { useState, useEffect } from "react";
import logo from "../../img/logo.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation,Pagination } from "swiper/modules";
import "./navbar.css"
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Función para controlar el evento de scroll y cambiar la opacidad
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Limpia el evento de scroll cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  return (
    <div
      className={`bg-white z-[99999] fixed top-0 w-full px-3 md:px-6 transition-opacity ${
        isScrolled ? "opacity-[98%]" : "opacity-100"
      }`}
    >
      <nav className="items-center py-5 z-16 bg-white md:flex md:items-center md:justify-between font-medium	">
        <div className="flex justify-between items-center sm:relative sm:top-[-10px]">
          <span className="text-2xl font-[Poppins] cursor-pointer xl:w-[350px]">
          <Link to={"/"}>
            <img
              className="h-12 sm:h-16 md:h-16"
              src={logo}
              alt="logo lorecunas"
            />
          </Link>
          </span>
          <div className="flex relative items-center w-full md:w-[50%] lg:w-[33.33%] sm:ml-5 mt-[12px] md:hidden">
            <input
              className="border p-0.5 rounded w-full ml-5 "
              type="text"
              placeholder="search"
            />
            <div className="text-gray-500 absolute right-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
          <span
            className="text-3xl cursor-pointer mx-2 md:hidden flex mt-[12px]"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </span>
        </div>
        <div className=" hidden md:flex relative items-center w-full md:w-[50%] lg:w-[33.33%] sm:ml-5 ">
          <input
            className="border p-1 rounded w-full ml-12"
            type="text"
            placeholder="search"
          />
          <div className="text-gray-500 absolute right-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
        <ul
          className={`sm:text-xs lg:text-base md:flex md:items-center z-5 md:z-5  md:static absolute bg-white w-[17rem] left-0 md:w-auto md:py-0 py-2 md:pl-0 pl-3 top-[120px]  ${
            menuOpen ? "shadow-md rounded left-[0px]" : "left-[-400px]"
          } transition-left ease-in duration-300`}
        >
          <li className="mx-4 my-3 md:my-0">
            <Link to={"/"}
              className="sm:text-xs lg:text-base uppercase hover:text-[#FE98CB] duration-500"
            >
              Inicio
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link to={"/nosotros"}
              className="sm:text-xs lg:text-base uppercase hover:text-[#FE98CB] duration-500"
            >
              Nosotros
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
               to={"/productos"}
              className="sm:text-xs lg:text-base uppercase hover:text-[#FE98CB] duration-500"
            >
              Productos
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
                to={"/contacto"}
              className="sm:text-xs lg:text-base uppercase hover:text-[#FE98CB] duration-500"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
      <div className="bg-white text-center">
        {window.innerWidth <= 768 ? (
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            Navigation={true}
            loop
            className=" pb-5 whitespace-nowrap"
          >
            <SwiperSlide className="">
              <Link
                to={"/cunas-funcionales"}
                className="text-[#FE98CB] text-sm p-0 m-0 whitespace-nowrap"
              >
                Cunas funcionales
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/cuna-melamina"} className="text-[#FE98CB] text-sm">
                Cunas melamina
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/a" className="text-[#FE98CB] text-sm">
                Cunas futuristas
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/a" className="text-[#FE98CB] text-sm">
                Promociones
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/a" className="text-[#FE98CB] text-sm">
                Cochesitos
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/a" className="text-[#FE98CB] text-sm">
                Juguetes
              </a>
            </SwiperSlide>
          </Swiper>
        ) : (
          <>
            <div className="flex justify-center gap-6 text-lg text-[#FE98CB]">
              <a href="/a" className="text-center">
                Cunas funcionales
              </a>
              <a href="/a" className="text-center">
                Cunas melamina
              </a>
              <a href="/a" className="text-center">
                Cunas futuristas
              </a>
              <a href="/a" className="text-center">
                Promociones
              </a>
              <a href="/a" className="text-center">
                Cochesitos
              </a>
              <a href="/a" className="text-center">
                Juguetes
              </a>
            </div>
            <div className="flex justify-center gap-6 text-lg text-[#FE98CB]">
              <a href="/a" className="text-center">
                Cunas funcionales
              </a>
              <a href="/a" className="text-center">
                Cunas melamina
              </a>
              <a href="/a" className="text-center">
                Cunas futuristas
              </a>
              <a href="/a" className="text-center pb-3">
                Promociones
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
