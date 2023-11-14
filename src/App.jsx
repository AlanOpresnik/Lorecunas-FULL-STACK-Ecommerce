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
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
  
  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };

  
}

export default App;
