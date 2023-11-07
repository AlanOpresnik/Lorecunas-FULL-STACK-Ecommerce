import React from "react";
import logo from "../../../img/logo.jpg";
import { Link } from "react-router-dom";

const NavbarAdmin = () => {
  const dropdown = () => {
    const submenu = document.querySelector("#submenu");
    const arrow = document.querySelector("#arrow");
    submenu.classList.toggle("hidden");
    arrow.classList.toggle("rotate-0");
  };

  const openSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("hidden");
  };

  return (
    
    <div className="bg-blue-600">
    
      <span
        className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
        onClick={openSidebar}
      >
        <p className="text-black">ABRIR</p>
      </span>
      <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">
              lORECUNAS ADMIN
            </h1>
            <p
              className="bi bi-x cursor-pointer ml-28 lg:hidden"
              onClick={openSidebar}
            >
              Cerrar
            </p>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>
        <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
          <i className="bi bi-search text-sm"></i>
          <input
            type="text"
            placeholder="Search"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
        <Link to={"/adminLorecunas/logeado/estadoDelIncioSucces=a878373734674674238283283723467426712/ofertas"}>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Ofertas
            </span>
          </Link>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
        <Link to={"/adminLorecunas/logeado/estadoDelIncioSucces=a878373734674674238283283723467426712"}>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Productos
            </span>
          </Link>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <Link to={"/adminLorecunas/logeado/estadoDelIncioSucces=a878373734674674238283283723467426712/cargarProductos"}>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Cargar Productos
            </span>
          </Link>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
        <Link to={"/adminLorecunas/logeado/estadoDelIncioSucces=a878373734674674238283283723467426712/banners"}>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Cargar Productos
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarAdmin;
