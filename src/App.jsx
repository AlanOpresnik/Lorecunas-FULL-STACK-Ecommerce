import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import NavBar from "./components/navbar/NavBar";
import "./App.css";
import Banner from "./components/banner/banner";
import { BannerProvider } from "./context/BannerContext.jsx";
import { OfertsProvider } from "./context/OfertsContext";
import { ProductsDestacadosProvider } from "./context/ProductsDestacadosContext";
import { ProductsCategoryProvider } from "./context/ProductsCategoryFilter.jsx";
import ProductsCategoryFiltrados from "./components/productsFilterCategory/productsSectionCategory/products/ProductsCategoryFiltrados.jsx";
import InfoIcons from "./components/InfoIcons/InfoIcons";
import CardSection from "./components/CardSection/CardSection";
import Oferts from "./components/OfertsSection/Oferts";
import OfertDetail from "./components/OfertDetail/OfertDetail";
import Footer from "./components/footer/Footer";
import NewsLetterDivider from "./components/newsLetterDivider/NewsLetterDivider";
import WspLogo from "./components/WspLogo/WspLogo";
import ProductDetail from "./components/ProductsSection/ProductsDetail/ProductDetail";
import ProductDestacados from "./components/ProductsSection/Productos/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ScrollToTop from "./helpers/scroll";
import { MagicMotion } from "react-magic-motion";
import { motion } from "framer-motion";
import Nosotros from "./components/nosotros/Nosotros.jsx";
import Clientes from "./components/nosotros/Clientes/Clientes.jsx";
import ResultProductsCard from "./components/navbar/search/resultProducts/resultProductsCard.jsx";
import toast, { Toaster } from "react-hot-toast";
import Login from "./pages/login.jsx";
import Admin from "./pages/admin.jsx";
import NavbarAdmin from "./pages/admin/adminComponents/NavbarAdmin.jsx";
import CargarProdForm from "./pages/admin/adminComponents/CargarProdForm.jsx";
import CargarOfertaForm from "./pages/admin/adminComponents/CargarOfertaForm.jsx";
import OfertAdminCard from "./pages/admin/adminComponents/OfertAdminCard.jsx";
import OfertsAdminSection from "./pages/admin/adminComponents/OfertsAdminSection.jsx";
import MatchCategory from "./components/ProductsSection/MatchCategory/MatchCategory.jsx";

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <Router>
      {" "}
      {/* Envuelve tu componente App con un Router */}
      <ScrollToTop />
      <div>
        <div className="bg-primary w-full overflow-hidden">
          <div className={`px-2 justify-center items-center`}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={containerVariants}
                    >
                      <NavBar />
                      <BannerProvider>
                        <Banner />
                      </BannerProvider>
                      <div className={`flex flex-col items-center w-full`}>
                        <InfoIcons />
                        <CardSection />
                        <h4 className="text-xl justify-start font-bold">
                          Ofertas del mes
                        </h4>
                        <OfertsProvider>
                          <Oferts />
                        </OfertsProvider>
                        <NewsLetterDivider />
                        <WspLogo />
                      </div>
                      <Footer />
                    </motion.div>
                  </>
                }
              />
              <Route
                path="/ofertDetail/:id"
                element={
                  <>
                    <NavBar />
                    <Toaster style={{ zIndex: 999999999999 }} />
                    <OfertDetail />
                    <Footer />
                    <WspLogo />
                  </>
                }
              />
              <Route
                path="/productos"
                element={
                  <>
                    <ProductsDestacadosProvider>
                      <>
                        <NavBar />
                        <div className={`flex flex-col items-center w-full`}>
                          <ProductDestacados />
                        </div>
                        <Footer />
                        <WspLogo />
                      </>
                      ;
                    </ProductsDestacadosProvider>
                    ;
                  </>
                }
              />
              <Route
                path="/productDetail/:id"
                element={
                  <>
                    <Toaster style={{ zIndex: 999999999999 }} />
                    <NavBar />
                    <ProductDetail />
                    <div className=" max-w-[1380px] mx-auto">
                      <MatchCategory />
                    </div>
                    <Footer />
                    <WspLogo />
                  </>
                }
              />
              <Route
                path="/productos/:category"
                element={
                  <ProductsCategoryProvider>
                    <>
                      <NavBar />
                      <div className={`flex flex-col items-center w-full`}>
                        <ProductsCategoryFiltrados />
                      </div>
                      <Footer />
                      <WspLogo />
                    </>
                  </ProductsCategoryProvider>
                }
              />

              <Route
                path="/nosotros"
                element={
                  <ProductsCategoryProvider>
                    <>
                      <NavBar />
                      <div className={`flex px-2 flex-col items-center w-full`}>
                        <Nosotros />
                      </div>
                      <div className=" px-2 max-w-[1524px] mx-auto  items-center">
                        <Clientes />
                      </div>
                      <Footer />
                      <WspLogo />
                    </>
                  </ProductsCategoryProvider>
                }
              />

              <Route
                path="/admin/login"
                element={
                  <ProductsCategoryProvider>
                    <>
                      <NavBar />
                      <div className={`flex px-2 flex-col items-center w-full`}>
                        <Login />
                      </div>

                      <Footer />
                      <WspLogo />
                    </>
                  </ProductsCategoryProvider>
                }
              />

              <Route
                path="/adminLorecunas/logeado/estadoDelIncioSucces=a878373734674674238283283723467426712"
                element={
                  <div classname={"px-0"}>
                  <ProductsDestacadosProvider>
                    <div className="p-0">
                      <Toaster />
                      <NavbarAdmin />
                      <div className={`flex  flex-col items-center w-full`}>
                        <Admin />
                      </div>
                    </div>
                  </ProductsDestacadosProvider>
                  </div>
                }
              />

              <Route
                path="/adminLorecunas/logeado/estadoDelIncioSucces=a878373734674674238283283723467426712/cargarProductos"
                element={
                  <div classname={"px-0"}>

                  <ProductsDestacadosProvider>
                    <div className="">
                      <Toaster />
                      <NavbarAdmin />
                      <div className={`flex flex-col items-center w-full`}>
                        <CargarProdForm />
                      </div>
                    </div>
                    
                  </ProductsDestacadosProvider>
                  </div>
                }
              />

              <Route
                path="/adminLorecunas/logeado/estadoDelIncioSucces=a878373734674674238283283723467426712/ofertas"
                element={
                  <ProductsDestacadosProvider>
                    <div className="p-0">
                      <Toaster />
                      <NavbarAdmin />
                      <div className={`flex px-2 flex-col items-center w-full`}>
                        <CargarOfertaForm />
                      </div>
                    </div>
                  </ProductsDestacadosProvider>
                }
              />

              <Route
                path="/adminLorecunas/logeado/estadoDelIncioSucces=a878373734674674238283283723467426712/mis-ofertas"
                element={
                  <OfertsProvider>
                    <div className="p-0">
                      <Toaster />
                      <NavbarAdmin />
                      <div className={`flex px-2 flex-col items-center w-full`}>
                        <OfertsAdminSection />
                      </div>
                    </div>
                  </OfertsProvider>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
