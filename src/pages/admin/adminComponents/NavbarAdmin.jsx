import React from "react";
import { Link } from "react-router-dom";
import Close from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";

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
    <>
      <div className="bg-gray-900 w-full  h-[65px] flex items-center justify-end p-2 lg:hidden left-[-8px] relative ">
        <Button
          className="absolute text-black text-4xl  left-4 cursor-pointer transition-all transform hover:scale-110"
          onClick={openSidebar}
        >
          <MenuIcon sx={{ color: "white", marginRight: "20px" }} />
        </Button>
      </div>
      <div className="sidebar z-50 fixed left-[-5px] top-0 bottom-0 lg:left-0 p-2 lg:w-[300px] overflow-y-auto text-center bg-gray-900 lg:block hidden transition-all transform duration-300">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">
              lORECUNAS ADMIN
            </h1>
            <p
              className="bi bi-x cursor-pointer ml-28 lg:hidden"
              onClick={openSidebar}
            >
              <Close />
            </p>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <Link
            to={
              "/adminLorecunas/logeado/estadoDelIncioSucces=a878373734674674238283283723467426712"
            }
          >
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Mis productos
            </span>
          </Link>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <Link
            to={
              "/adminLorecunas/logeado/estadoDelIncioSucces=a878373734674674238283283723467426712/cargarProductos"
            }
          >
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Cargar Productos
            </span>
          </Link>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <Link
            to={
              "/adminLorecunas/logeado/estadoDelIncioSucces=a878373734674674238283283723467426712/ofertas"
            }
          >
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Subir una nueva oferta
            </span>
          </Link>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <Link
            to={
              "/adminLorecunas/logeado/estadoDelIncioSucces=a878373734674674238283283723467426712/mis-ofertas"
            }
          >
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Mis Ofertas
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarAdmin;
