import { useState, useEffect } from "react";
import logo from "../../img/logo.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./navbar.css";
import { Link } from "react-router-dom";
import SearchMobile from "./search/SearchMobile";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Search from "./search/search";
import { Button } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import FavCard from "../FavCard/FavCard";
import CloseIcon from "@mui/icons-material/Close";
import toast from "react-hot-toast";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmDeleteModal from "../ConfirmDeleteModal";
import FavDrawerEmpty from "../FavDrawer/FavDrawerEmpty";

import "sweetalert2/src/sweetalert2.scss";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [favoritos, setFavoritos] = useState([]);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const openConfirmDelete = (item) => {
    setOpen(false)
    setIsConfirmDeleteOpen(true);
    setItemToDelete(item);
  };

  const closeConfirmDelete = () => {
    setIsConfirmDeleteOpen(false);
    setItemToDelete(null);
  };
  const prodFavoritos = JSON.parse(localStorage.getItem("favoritos"));

  const toggleDrawer = (isOpen) => () => {
    setOpen(isOpen);
  };
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

  const eliminarFav = (prodFav) => {
    console.log(prodFav);
    const productoId = prodFav.productDetail._id;
    const favoritosGuardados =
      JSON.parse(localStorage.getItem("favoritos")) || [];

    // Filtra la lista de favoritos para excluir el producto a eliminar
    const nuevosFavoritos = favoritosGuardados.filter(
      (favorito) => favorito.productDetail._id !== productoId
    );

    // Guarda la nueva lista de favoritos en localStorage
    localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));

    toast("Producto eliminado de favoritos", {
      duration: 1500,
      position: "top-right",
    });

    setFavoritos(nuevosFavoritos); // Actualiza el estado
    toggleDrawer(false); // Cierra el modal
  };

  return (
    <div
      className={`bg-white z-[999] fixed top-0 w-full px-3 md:px-6 transition-opacity ${
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
          <div className="max-w-[190px]">
            <SearchMobile />
          </div>
          <div className="relative block mt-3 md:hidden">
            <Button sx={{ color: "#FE98CB" }} onClick={toggleDrawer(true)}>
              <FavoriteIcon />
            </Button>
            <Drawer
              anchor="right"
              style={{ zIndex: 99999 }}
              open={open}
              onClose={toggleDrawer(false)}
            >
              <div className="shadow  px-4" style={{ width: 170 }}>
                <div className="mt-4 flex justify-between items-center mb-3">
                  <h3 className="text-[#FE98CB] font-bold">FAVORITOS</h3>
                  <Button className="" onClick={toggleDrawer(false)}>
                    <CloseIcon sx={{ color: "#FE98CB", fontSize: "22px" }} />
                  </Button>
                </div>

                {prodFavoritos && prodFavoritos.length > 0 ? (
                  prodFavoritos.map((prodFav) => (
                    <div
                      className="flex flex-col justify-center max-w-[250px]"
                      key={prodFav.productDetail.title}
                    >
                      <FavCard
                        prodFav={prodFav}
                        toggleDrawer={toggleDrawer(false)}
                      />
                    </div>
                  ))
                ) : (
                  <p>No hay favoritos disponibles.</p>
                )}
              </div>
            </Drawer>
          </div>
          <span
            className="text-2xl cursor-pointer mx-2 md:hidden flex mt-[12px] mr-[2rem]"
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
        <Search />

        <ul
          className={`sm:text-xs lg:text-base md:flex md:items-center z-5 md:z-5  md:static absolute bg-white w-[17rem] left-0 md:w-auto md:py-0 py-2 md:pl-0 pl-3 top-[120px]  ${
            menuOpen ? "shadow-md rounded left-[0px]" : "left-[-400px]"
          } transition-left ease-in duration-300`}
        >
          <li className="mx-4 my-3 md:my-0">
            <Link
              to={"/"}
              className="sm:text-xs lg:text-base uppercase hover:text-[#FE98CB] duration-500"
            >
              Inicio
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              to={"/nosotros"}
              className="sm:text-xs lg:text-base uppercase hover:text-[#FE98CB] duration-500"
            >
              Nosotros
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              to={"https://lorecunas-full-stack-ecommerce.vercel.app/productos"}
              className="sm:text-xs lg:text-base uppercase hover:text-[#FE98CB] duration-500"
            >
              Productos
            </Link>
          </li>
          <div className="relative hidden md:block">
            <Button sx={{ color: "#FE98CB" }} onClick={toggleDrawer(true)}>
              <FavoriteIcon />
            </Button>
            <Drawer
              anchor="right"
              style={{ zIndex: 99999 }}
              open={open}
              onClose={toggleDrawer(false)}
            >
              <div className="  px-4  md:w-[320px]">
                <div className="mt-4 flex justify-between items-center mb-3">
                  <h3 className="text-[#FE98CB] font-bold border-b border-[#FE98CB]">FAVORITOS</h3>
                  <Button className="" onClick={toggleDrawer(false)}>
                    <CloseIcon sx={{ color: "#FE98CB", fontSize: "22px" }} />
                  </Button>
                </div>

                {prodFavoritos && prodFavoritos.length > 0 ? (
                  prodFavoritos.map((prodFav) => (
                    <div
                      className="flex border-b flex-col justify-center  max-w-[320px]"
                      key={prodFav.productDetail.title}
                    >
                      <div className="flex  items-center overflow-hidden ">
                        <FavCard prodFav={prodFav} />
                        <Button
                          sx={{
                            paddingRight: "0px",
                            fontSize: "10px",
                            color: "#cccc",
                          }}
                          onClick={() => openConfirmDelete(prodFav)}
                        >
                          <DeleteIcon />
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <FavDrawerEmpty/>
                )}
              </div>
            </Drawer>
            {isConfirmDeleteOpen && itemToDelete && (
              <ConfirmDeleteModal
                open={isConfirmDeleteOpen}
                onClose={closeConfirmDelete}
                onConfirm={() => {
                  eliminarFav(itemToDelete);
                  closeConfirmDelete();
                }}
                itemTitle={itemToDelete.productDetail.title}
              />
            )}
          </div>
        </ul>
      </nav>

      <div className="bg-white text-center">
        {window.innerWidth <= 768 ? (
          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            Navigation={true}
            loop
            className=" pb-5 whitespace-nowrap"
          >
            <SwiperSlide className="">
              <Link
                to={"/productos/CUNAS%20FUNCIONALES%20COMPLETAS"}
                className="text-[#FE98CB] text-sm p-0 m-0 whitespace-nowrap"
              >
                Cunas funcionales completas
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/productos/CUNAS%20FUNCIONALES%20SOLAS"} className="text-[#FE98CB] text-sm">
                Cunas funcionales solas
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/productos/ACOLCHADOS%20Y%20CHICHONERAS"} className="text-[#FE98CB] text-sm">
                Acolchados y chichoneras
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/productos/DORMITORIOS%20COMPLETOS"} className="text-[#FE98CB] text-sm">
                Dormitorios completos
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/productos/cajoneras"} className="text-[#FE98CB] text-sm">
                Cajoneras
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/productos/CUNAS%20COLECHO%20COMPLETAS"} className="text-[#FE98CB] text-sm">
                Cunas colecho completas
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/productos/CUNAS%20COLECHO%20SOLAS"} className="text-[#FE98CB] text-sm">
                Cunas colecho solas
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/productos/PROMOS%20DORMITORIOS"} className="text-[#FE98CB] text-sm">
                Promos dormitorios
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/productos/accesorios"} className="text-[#FE98CB] text-sm">
                Accesorios
              </Link>
            </SwiperSlide>
          </Swiper>
        ) : (
          <>
            <div className="flex justify-center gap-6 text-lg text-[#FE98CB]">
            <Link to={"/productos/cajoneras"} className="text-center">
                Cajoneras
              </Link>
              <Link to={"/productos/CUNAS%20COLECHO%20COMPLETAS"} className="text-center">
                Cunas colecho completas
              </Link>
              <Link to={"/productos/CUNAS%20COLECHO%20SOLAS"} className="text-center">
                Cunas colecho solas
              </Link>
              <Link to={"/productos/PROMOS%20DORMITORIOS"} className="text-center">
                Promo dormitorios
              </Link>
              <Link to={"/productos/accesorios"} className="text-center">
                Accesorios
              </Link>
            </div>
            <div className="flex justify-center gap-6 text-lg text-[#FE98CB]">
              <Link  to={"/productos/CUNAS%20FUNCIONALES%20COMPLETAS"} className="text-center">
                Cunas funcionales completas
              </Link>
              <Link to={"/productos/CUNAS%20FUNCIONALES%20SOLAS"} className="text-center">
                Cunas funcionales solas
              </Link>
              <Link to={"/productos/ACOLCHADOS%20Y%20CHICHONERAS"} className="text-center">
                Acolchados y chichoneras
              </Link>
              <Link to={"/productos/DORMITORIOS%20COMPLETOS"} className="text-center pb-3">
                Dormitorios completos
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
