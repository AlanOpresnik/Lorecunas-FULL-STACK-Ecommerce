import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./asideCategory.css";
import { Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const AsideCategory = ({ productDestacado }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [category, setCategory] = useState("");
  const [categoriaFiltrada, setCategoriaFiltrada] = useState({});
  const hasOutletProducts =
    Array.isArray(productDestacado) &&
    productDestacado.some((product) => product.category == "OUTLET");

  const navigate = useNavigate();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const updateIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const handleClickCategory = (event) => {
    const categoryText = event.target.innerText;
    setCategory(categoryText);
    navigate(`/productos/${categoryText}`, { replace: false });
    <Link to={`/productos/${categoryText}`} />;

    axios
      .get(
        `http://localhost:3900/api/products/getProductFiltrado/${categoryText}`
      )
      .then((res) => {
        setCategoriaFiltrada(res.data);
      })
      .catch((error) => {
        console.error("Error al filtrar productos:", error);
      });
  };

  const openCategoryList = () => {
    setShowMenu(true);

    // Asegura que la animación de apertura funcione correctamente
    setTimeout(() => {
      const categoryList = document.querySelector(".category-list");
      if (categoryList) {
        categoryList.style.maxHeight = "500px"; // Ajusta la altura máxima según tus necesidades
      }
    }, 0);
  };
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
  return (
    <div className="aside-category mb-4 ">
      {isMobile ? (
        <div className="category-toggle text-center">
          <Button
            onClick={showMenu ? toggleMenu : toggleMenu}
            sx={{
              color: "#FEA7D2",
              fontSize: "1.5rem",
            }}
            className={`cursor-pointer  menu-icon ${
              showMenu ? "rotate-icon" : ""
            }`}
          >
            {showMenu ? "X" : "☰"}
          </Button>
          {showMenu && (
            <>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: showMenu ? 0 : -100, opacity: showMenu ? 1 : 0 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="font-bold border-b-4">Categorias</h1>
                <div className="flex flex-col py-4 ">
                  <Link
                    className="p-1 border-b-2 text-center text-md text-gray-500 border-none  hover:text-[#FE98CB]"
                    sx={{
                      color: "rgb(75 85 99)",
                    }}
                    to={"/productos"}
                  >
                    TODAS
                  </Link>
                  <Button
                    className="p-1 border-b-2  hover:text-[#FE98CB]"
                    sx={{
                      color: "rgb(75 85 99)",
                    }}
                    onClick={handleClickCategory}
                  >
                    Roperos
                  </Button>
                  <Button
                    sx={{
                      color: "rgb(75 85 99)",
                    }}
                    className="p-1 border-b-2 hover:text-[#FE98CB]"
                    to={category}
                    onClick={handleClickCategory}
                  >
                    Cunas Funcionales completas
                  </Button>
                  <Button
                    sx={{
                      color: "rgb(75 85 99)",
                    }}
                    className="p-1 border-b-2 hover:text-[#FE98CB]"
                    to={category}
                    onClick={handleClickCategory}
                  >
                    Cunas funcionales solas
                  </Button>
                  <Button
                    sx={{
                      color: "rgb(75 85 99)",
                    }}
                    className="p-1 border-b-2 hover:text-[#FE98CB]"
                    to={category}
                    onClick={handleClickCategory}
                  >
                    Acolchados y chichoneras
                  </Button>
                  <Button
                    sx={{
                      color: "rgb(75 85 99)",
                    }}
                    className="p-1 border-b-2 hover:text-[#FE98CB]"
                    to={category}
                    onClick={handleClickCategory}
                  >
                    Dormitorios Completos
                  </Button>
                  <Button
                    sx={{
                      color: "rgb(75 85 99)",
                    }}
                    className="p-1 border-b-2 hover:text-[#FE98CB]"
                    to={category}
                    onClick={handleClickCategory}
                  >
                    Cajoneras
                  </Button>
                  <Button
                    sx={{
                      color: "rgb(75 85 99)",
                    }}
                    className="p-1 border-b-2 hover:text-[#FE98CB]"
                    to={category}
                    onClick={handleClickCategory}
                  >
                    Cunas colecho completas
                  </Button>
                  <Button
                    sx={{
                      color: "rgb(75 85 99)",
                    }}
                    className="p-1 border-b-2 hover:text-[#FE98CB]"
                    to={category}
                    onClick={handleClickCategory}
                  >
                    Cunas colecho solas
                  </Button>
                  <Button
                    sx={{
                      color: "rgb(75 85 99)",
                      textAlign: "center",
                    }}
                    className="p-1 border-b-2 hover:text-[#FE98CB]"
                    to={category}
                    onClick={handleClickCategory}
                  >
                    Promos Dormitorios
                  </Button>
                  <Button
                    sx={{
                      color: "rgb(75 85 99)",
                      textAlign: "center",
                    }}
                    className="p-1 border-b-2 hover:text-[#FE98CB]"
                    to={category}
                    onClick={handleClickCategory}
                  >
                    Accesorios
                  </Button>
                  {hasOutletProducts && (
                    <Button
                      sx={{
                        color: "rgb(75 85 99)",
                      }}
                      className="p-1 border-b-2 hover:text-[#FE98CB]"
                      to={category}
                      onClick={handleClickCategory}
                    >
                      Outlet
                    </Button>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </div>
      ) : (
        <>
          <h1 className="font-bold border-b-4">Categorias</h1>
          <div className="flex flex-col items-start py-4 ">
            <Link
              className="p-1 border-b-2 text-center text-md text-gray-500 border-none  hover:text-[#FE98CB]"
              sx={{
                color: "rgb(75 85 99)",
              }}
              to={"/productos"}
            >
              TODAS
            </Link>
            <Button
              className="p-1 border-b-2  hover:text-[#FE98CB]"
              sx={{
                color: "rgb(75 85 99)",
              }}
              onClick={handleClickCategory}
            >
              Roperos
            </Button>
            <Button
              sx={{
                color: "rgb(75 85 99)",
              }}
              className="p-1 border-b-2 text-start  hover:text-[#FE98CB] text-start "
              to={category}
              onClick={handleClickCategory}
            >
              Cunas Funcionales completas
            </Button>
            <Button
              sx={{
                color: "rgb(75 85 99)",
              }}
              className="p-1 border-b-2 hover:text-[#FE98CB] text-start"
              to={category}
              onClick={handleClickCategory}
            >
              Cunas funcionales solas
            </Button>
            <Button
              sx={{
                color: "rgb(75 85 99)",
              }}
              className="p-1 border-b-2 hover:text-[#FE98CB] text-start"
              to={category}
              onClick={handleClickCategory}
            >
              Acolchados y chichoneras
            </Button>
            <Button
              sx={{
                color: "rgb(75 85 99)",
              }}
              className="p-1 border-b-2 hover:text-[#FE98CB] text-start"
              to={category}
              onClick={handleClickCategory}
            >
              Dormitorios Completos
            </Button>
            <Button
              sx={{
                color: "rgb(75 85 99)",
              }}
              className="p-1 border-b-2 hover:text-[#FE98CB] text-start"
              to={category}
              onClick={handleClickCategory}
            >
              Cajoneras
            </Button>
            <Button
              sx={{
                color: "rgb(75 85 99)",
              }}
              className="p-1 border-b-2 hover:text-[#FE98CB] text-start"
              to={category}
              onClick={handleClickCategory}
            >
              Cunas colecho completas
            </Button>
            <Button
              sx={{
                color: "rgb(75 85 99)",
              }}
              className="p-1 border-b-2 hover:text-[#FE98CB] text-start"
              to={category}
              onClick={handleClickCategory}
            >
              Cunas colecho solas
            </Button>
            <Button
              sx={{
                color: "rgb(75 85 99)",
                textAlign: "center",
              }}
              className="p-1 border-b-2 hover:text-[#FE98CB] text-start"
              to={category}
              onClick={handleClickCategory}
            >
              Promos Dormitorios
            </Button>
            <Button
              sx={{
                color: "rgb(75 85 99)",
                textAlign: "center",
              }}
              className="p-1 border-b-2 hover:text-[#FE98CB] text-start"
              to={category}
              onClick={handleClickCategory}
            >
              Accesorios
            </Button>
            {hasOutletProducts && (
              <Button
                sx={{
                  color: "rgb(75 85 99)",
                }}
                className="p-1 border-b-2 hover:text-[#FE98CB] text-start"
                to={category}
                onClick={handleClickCategory}
              >
                Outlet
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  );
};
export default AsideCategory;
