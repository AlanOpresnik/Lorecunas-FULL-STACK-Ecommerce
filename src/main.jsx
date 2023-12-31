import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NavBar from "./components/navbar/NavBar.jsx";
import { motion } from "framer-motion";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createHashRouter,
  useLocation,
} from "react-router-dom";

import Banner from "./components/banner/banner.jsx";
import InfoIcons from "./components/InfoIcons/InfoIcons.jsx";
import CardSection from "./components/CardSection/CardSection.jsx";
import { OfertsProvider } from "./context/OfertsContext.jsx";
import Oferts from "./components/OfertsSection/Oferts.jsx";
import NewsLetterDivider from "./components/newsLetterDivider/NewsLetterDivider.jsx";
import WspLogo from "./components/WspLogo/WspLogo.jsx";
import Footer from "./components/footer/Footer.jsx";
import { Toaster } from "react-hot-toast";
import OfertDetail from "./components/OfertDetail/OfertDetail.jsx";
import { ProductsDestacadosProvider } from "./context/ProductsDestacadosContext.jsx";
import ProductDestacados from "./components/ProductsSection/Productos/Products.jsx";
import ProductDetail from "./components/ProductsSection/ProductsDetail/ProductDetail.jsx";
import MatchCategory from "./components/ProductsSection/MatchCategory/MatchCategory.jsx";
import { ProductsCategoryProvider } from "./context/ProductsCategoryFilter.jsx";
import ProductsCategoryFiltrados from "./components/productsFilterCategory/productsSectionCategory/products/ProductsCategoryFiltrados.jsx";
import Nosotros from "./components/nosotros/Nosotros.jsx";
import Clientes from "./components/nosotros/Clientes/Clientes.jsx";
import Login from "./pages/login.jsx";
import NavbarAdmin from "./pages/admin/adminComponents/NavbarAdmin.jsx";
import Admin from "./pages/admin.jsx";
import CargarProdForm from "./pages/admin/adminComponents/CargarProdForm.jsx";
import CargarOfertaForm from "./pages/admin/adminComponents/CargarOfertaForm.jsx";
import OfertsAdminSection from "./pages/admin/adminComponents/OfertsAdminSection.jsx";
import ScrollToTop from "./scrollTop.jsx";
import { Helmet } from "react-helmet";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const router = createHashRouter([
  {
    path: "/",

    element: (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Lorecunas</title>
          <meta name="description" />
          <meta
            name="description"
            content="Lorecunas- Lore Cunas se dedica a la elaboración de muebles Infanto Juveniles con los mejores precios del mercado,              confeccionando nuestros productos en maderas de Pino-guatambu-MDF-Melamina. Con un gran equilibrio Precio-Calidad.
       Contamos con Showroom, disponemos de gran variedad en modelos-colores y terminaciones en forma artesanal."
          />
        </Helmet>
        <div className="bg-primary w-full overflow-hidden">
          <div className={`justify-center items-center`}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <NavBar />
              <Banner />
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
                <ScrollToTop />
              </div>
              <Footer />
            </motion.div>
          </div>
        </div>
      </>
    ),
  },
  {
    path: "/ofertDetail/:id",
    element: (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Lorecunas - oferta</title>
          <meta name="description" />
          <meta
            name="description"
            content="Lorecunas- Lore Cunas se dedica a la elaboración de muebles Infanto Juveniles con los mejores precios del mercado,              confeccionando nuestros productos en maderas de Pino-guatambu-MDF-Melamina. Con un gran equilibrio Precio-Calidad.
       Contamos con Showroom, disponemos de gran variedad en modelos-colores y terminaciones en forma artesanal."
          />
        </Helmet>
        <NavBar />
        <Toaster style={{ zIndex: 999999999999 }} />
        <OfertDetail />
        <Footer />
        <WspLogo />
        <ScrollToTop />
      </>
    ),
  },
  {
    path: "/productos",
    element: (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Lorecunas - Productos</title>
          <meta name="description" />
          <meta
            name="description"
            content="Lorecunas- Lore Cunas se dedica a la elaboración de muebles Infanto Juveniles con los mejores precios del mercado,              confeccionando nuestros productos en maderas de Pino-guatambu-MDF-Melamina. Con un gran equilibrio Precio-Calidad.
       Contamos con Showroom, disponemos de gran variedad en modelos-colores y terminaciones en forma artesanal."
          />
        </Helmet>
        <ProductsDestacadosProvider>
          <>
            <NavBar />
            <div className={`flex flex-col items-center w-full`}>
              <ProductDestacados />
            </div>
            <Footer />
            <WspLogo />
          </>
          <ScrollToTop />
        </ProductsDestacadosProvider>
      </>
    ),
  },
  {
    path: "/productDetail/:id",
    element: (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Lorecunas - Detalles del producto</title>
          <meta name="description" />
          <meta
            name="description"
            content="Lorecunas- Lore Cunas se dedica a la elaboración de muebles Infanto Juveniles con los mejores precios del mercado,              confeccionando nuestros productos en maderas de Pino-guatambu-MDF-Melamina. Con un gran equilibrio Precio-Calidad.
       Contamos con Showroom, disponemos de gran variedad en modelos-colores y terminaciones en forma artesanal."
          />
        </Helmet>
        <Toaster style={{ zIndex: 999999999999 }} />
        <NavBar />
        <ProductDetail />
        <div className=" max-w-[1380px] ml-4 md:mx-auto">
          <MatchCategory />
        </div>
        <Footer />
        <WspLogo />
        <ScrollToTop />
      </>
    ),
  },
  {
    path: "/productos/:category",
    element: (
      <ProductsCategoryProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Lorecunas - categorias</title>
          <meta name="description" />
          <meta
            name="description"
            content="Lorecunas- Lore Cunas se dedica a la elaboración de muebles Infanto Juveniles con los mejores precios del mercado,              confeccionando nuestros productos en maderas de Pino-guatambu-MDF-Melamina. Con un gran equilibrio Precio-Calidad.
       Contamos con Showroom, disponemos de gran variedad en modelos-colores y terminaciones en forma artesanal."
          />
        </Helmet>
        <>
          <NavBar />
          <div className={`flex flex-col items-center w-full`}>
            <ProductsCategoryFiltrados />
          </div>
          <Footer />
          <WspLogo />
        </>
        <ScrollToTop />
      </ProductsCategoryProvider>
    ),
  },
  {
    path: "/nosotros",
    element: (
      <ProductsCategoryProvider>
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Lorecunas - Nosotros</title>
            <meta name="description" />
            <meta
              name="description"
              content="Lorecunas- Lore Cunas se dedica a la elaboración de muebles Infanto Juveniles con los mejores precios del mercado,              confeccionando nuestros productos en maderas de Pino-guatambu-MDF-Melamina. Con un gran equilibrio Precio-Calidad.
       Contamos con Showroom, disponemos de gran variedad en modelos-colores y terminaciones en forma artesanal."
            />
          </Helmet>
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
        <ScrollToTop />
      </ProductsCategoryProvider>
    ),
  },
  {
    path: "/admin/login",
    element: (
      <ProductsCategoryProvider>
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Lorecunas</title>
            <meta name="description" />
            <meta
              name="description"
              content="Lorecunas- Lore Cunas se dedica a la elaboración de muebles Infanto Juveniles con los mejores precios del mercado,              confeccionando nuestros productos en maderas de Pino-guatambu-MDF-Melamina. Con un gran equilibrio Precio-Calidad.
       Contamos con Showroom, disponemos de gran variedad en modelos-colores y terminaciones en forma artesanal."
            />
          </Helmet>
          <NavBar />
          <div className={`flex px-2 flex-col items-center w-full`}>
            <Login />
          </div>

          <Footer />
          <WspLogo />
        </>
        <ScrollToTop />
      </ProductsCategoryProvider>
    ),
  },
  {
    path: "/adminLorecunas/logeado/estadoDelIncioSucces=a878373734674674238283283723467426712",
    element: (
      <div classname={"px-0"}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Lorecunas - Admin</title>
          <meta name="description" />
          <meta
            name="description"
            content="Lorecunas- Lore Cunas se dedica a la elaboración de muebles Infanto Juveniles con los mejores precios del mercado,              confeccionando nuestros productos en maderas de Pino-guatambu-MDF-Melamina. Con un gran equilibrio Precio-Calidad.
       Contamos con Showroom, disponemos de gran variedad en modelos-colores y terminaciones en forma artesanal."
          />
        </Helmet>
        <ProductsDestacadosProvider>
          <div className="p-0 overflow-x-hidden w-full">
            <Toaster />
            <NavbarAdmin />
            <div className={`flex  flex-col items-center w-full`}>
              <Admin />
            </div>
          </div>
          <ScrollToTop />
        </ProductsDestacadosProvider>
      </div>
    ),
  },
  {
    path: "/adminLorecunas/logeado/estadoDelIncioSucces=a878373734674674238283283723467426712/cargarProductos",
    element: (
      <div classname={"px-0"}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Lorecunas - cargar producto</title>
          <meta name="description" />
          <meta
            name="description"
            content="Lorecunas- Lore Cunas se dedica a la elaboración de muebles Infanto Juveniles con los mejores precios del mercado,              confeccionando nuestros productos en maderas de Pino-guatambu-MDF-Melamina. Con un gran equilibrio Precio-Calidad.
       Contamos con Showroom, disponemos de gran variedad en modelos-colores y terminaciones en forma artesanal."
          />
        </Helmet>
        <ProductsDestacadosProvider>
          <div className="">
            <Toaster />
            <NavbarAdmin />
            <div className={`flex flex-col items-center w-full`}>
              <CargarProdForm />
            </div>
          </div>
          <ScrollToTop />
        </ProductsDestacadosProvider>
      </div>
    ),
  },
  {
    path: "/adminLorecunas/logeado/estadoDelIncioSucces=a878373734674674238283283723467426712/ofertas",
    element: (
      <ProductsDestacadosProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Lorecunas - cargar oferta</title>
          <meta name="description" />
          <meta
            name="description"
            content="Lorecunas- Lore Cunas se dedica a la elaboración de muebles Infanto Juveniles con los mejores precios del mercado,              confeccionando nuestros productos en maderas de Pino-guatambu-MDF-Melamina. Con un gran equilibrio Precio-Calidad.
       Contamos con Showroom, disponemos de gran variedad en modelos-colores y terminaciones en forma artesanal."
          />
        </Helmet>
        <div className="p-0">
          <Toaster />
          <NavbarAdmin />
          <div className={`flex px-2 flex-col items-center w-full`}>
            <CargarOfertaForm />
          </div>
        </div>
        <ScrollToTop />
      </ProductsDestacadosProvider>
    ),
  },
  {
    path: "/adminLorecunas/logeado/estadoDelIncioSucces=a878373734674674238283283723467426712/mis-ofertas",
    element: (
      <OfertsProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Lorecunas - Admin</title>
          <meta name="description" />
          <meta
            name="description"
            content="Lorecunas- Lore Cunas se dedica a la elaboración de muebles Infanto Juveniles con los mejores precios del mercado,              confeccionando nuestros productos en maderas de Pino-guatambu-MDF-Melamina. Con un gran equilibrio Precio-Calidad.
       Contamos con Showroom, disponemos de gran variedad en modelos-colores y terminaciones en forma artesanal."
          />
        </Helmet>
        <div className="p-0">
          <Toaster />
          <NavbarAdmin />
          <div className={`flex px-2 flex-col items-center w-full`}>
            <OfertsAdminSection />
          </div>
        </div>
        <ScrollToTop />
      </OfertsProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
