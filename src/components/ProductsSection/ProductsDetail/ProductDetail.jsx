import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Modal, Box, Typography, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import FormatoDinero from "../../../helpers/FormatearDinero";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./productDetail.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const ProductDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Store the selected image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalImages, setModalImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [existeFavorito, setExisteFavorito] = useState(false);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalImages(data.productDetail.images);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const napoletanoGrosoCard = {
    hidden: { y: -60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 11, stiffness: 100 },
    },
    exit: {
      y: -60,
      opacity: 0,
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const style = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99999,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(import.meta.env.VITE_API_GET_PRODUCT_DETAIL + id);
        if (res.data && res.data.productDetail) {
          setData(res.data);
          const favoritosGuardados = JSON.parse(localStorage.getItem("favoritos")) || [];
          const productoEnFavoritos = favoritosGuardados.some(
            (favorito) => favorito.productDetail._id === res.data.productDetail._id
          );
          setExisteFavorito(productoEnFavoritos);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  let mensaje = "";
  if (data && data.productDetail && data.productDetail.title) {
    mensaje = encodeURIComponent(
      `Hola, estoy interesado en el siguiente producto: ${data.productDetail.title}, con un precio de: $${data.productDetail.price} pesos`
    );
  }

  const handleThumbnailClick = (image) => {
    setSelectedImageIndex(image);
    openModal(image)
  };

  const agregarFav = (nuevoFavorito) => {
    const favoritosGuardados =
      JSON.parse(localStorage.getItem("favoritos")) || [];
  
    // Verificar si ya existe un favorito con el mismo ID
    const favoritoExistenteIndex = favoritosGuardados.findIndex(
      (favorito) =>
        favorito.productDetail._id === nuevoFavorito.productDetail._id
    );
  
    if (favoritoExistenteIndex !== -1) {
      
      favoritosGuardados.splice(favoritoExistenteIndex, 1);
      setExisteFavorito(false); 
      toast("Producto eliminado de favoritos 🙁", {
        duration: 1500,
        position: "top-right",
        disableHover: true,
      });
    } else {
     
      favoritosGuardados.push(nuevoFavorito);
      setExisteFavorito(true); 
      toast("Producto agregado a favoritos ❤️", {
        duration: 1500,
        position: "top-right",
        disableHover: true,
      });
    }
  
    localStorage.setItem("favoritos", JSON.stringify(favoritosGuardados));
  };

  const firstSwiperRef = useRef(null);
  const secondSwiperRef = useRef(null);

  return (
    <>
      {isLoading && (
        <div className="flex justify-center content-center mt-[120px]">
          <span className="loader mt-[190px]"></span>
        </div>
      )}
      <section className="text-gray-600 body-font overflow-hidden mt-[9.6rem] lg:mt-[6.5rem]">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
          className="container px-5 md:py-24 mx-auto"
        >
          <motion.div className="h-[auto] lg:w-[94%] mx-auto flex flex-wrap">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              modules={[Pagination]}
              className="mySwiper swiperOfertDetails"
              onSwiper={(swiper) => (firstSwiperRef.current = swiper)}
            >
              {data.productDetail &&
                data.productDetail.images.map((img, i) => (
                  <SwiperSlide className="hover:opacity-75" key={i}>
                    <img
                      alt="imagen producto"
                      className={` cursor-pointer lg:w-full bg-gray-200 w-full lg:h-auto object-cover object-center rounded-lg h-[300px] md:min-h-[450px] md:max-h-[450px]`}
                      src={import.meta.env.VITE_API_FAV_DRAWER + img.filename}
                      onClick={() => handleThumbnailClick(i)}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
            <AnimatePresence>
              {isModalOpen && (
                <Modal
                  open={isModalOpen}
                  onClose={closeModal}
                  style={style}
                  className="modalContainer"
                >
                  <motion.div
                    variants={napoletanoGrosoCard}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <motion.div
                      variants={napoletanoGrosoCard}
                      className="bg-white p-4 rounded-lg shadow-md w-[300px] sm:w-[480px] md:w-[580px] lg:w-[700px] mx-auto   flex flex-col"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <button
                          aria-label="cerrar modal"
                          onClick={closeModal}
                          className="bg-slate-50 px-4 py-2 hover:bg-slate-200 rounded font-bold ml-auto"
                        >
                          <CloseIcon />
                        </button>
                      </div>
                      <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        modules={[Pagination, Navigation]}
                        pagination={{ clickable: true }}
                        navigation
                        initialSlide={selectedImageIndex}
                        className="mySwiper swiperImg w-[270px] sm:w-[430px] md:w-[550px] lg:w-[660px] mx-auto"
                      >
                        {data.productDetail &&
                          data.productDetail.images.map((img, i) => (
                            <SwiperSlide key={i}>
                              <img
                                className=" w-[570px] h-[320px] bg-gray-200 sm:w-[585px] md:w-[580px] lg:w-[680px] sm:h-[450px] object-cover rounded-lg"
                                src={
                                  import.meta.env.VITE_API_FAV_DRAWER +
                                  img.filename
                                }
                                alt={`Image ${i}`}
                              />
                            </SwiperSlide>
                          ))}
                      </Swiper>
                    </motion.div>
                  </motion.div>
                </Modal>
              )}
            </AnimatePresence>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <p className="text-xs text-[#ff9fce]">
                {data.productDetail && data.productDetail.category}
              </p>
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {data.products && data.productDetail.category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {data.productDetail && data.productDetail.title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-[#ff9fce]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-[#ff9fce]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-[#ff9fce]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-[#ff9fce]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">24 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
                  <a
                    aria-label="facebook"
                    target="_BLANK"
                    href="https://www.facebook.com/profile.php?id=100064492640082"
                    className="text-gray-500"
                  >
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
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
                    className="ml-3 text-gray-500 cursor-pointer"
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
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a
                    aria-label="mensaje para la cuna"
                    target="_BLANK"
                    href={`https://wa.me/+541169393427/?text=${mensaje}`}
                    className="text-gray-500"
                  >
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">
                {data.productDetail && data.productDetail.description}
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-[#ff9fce]">
                  <FormatoDinero
                    monto={data.productDetail && data.productDetail.price}
                  />
                </span>
                <Link
                  target="_BLANK"
                  to={`https://wa.me/+541169393427/?text=${mensaje}`}
                  className="flex ml-auto text-white bg-[#ff9fce] border-0 py-2 px-6 focus:outline-none hover:bg-[#ffd5ea] rounded"
                >
                  Consultar
                </Link>
                <button
                  aria-label="agregar a favoritos"
                  onClick={() => agregarFav(data)}
                  className={`rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 ${
                    existeFavorito ? "bg-red-200 text-red-500" : ""
                  }`}
                >
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper swiperOfertDetails swiperProduct"
              onSwiper={(swiper) => (secondSwiperRef.current = swiper)}
            >
              {data.productDetail &&
                data.productDetail.images.map((img, i) => (
                  <SwiperSlide
                    className="hover:opacity-75"
                    key={i}
                    onClick={() => {
                      if (firstSwiperRef.current) {
                        firstSwiperRef.current.slideTo(i);
                      }
                    }}
                  >
                    <img
                      className={`h-[120px] bg-gray-200 object-cover select-none w-[120px] rounded hover:opacity-75 cursor-pointer`}
                      src={import.meta.env.VITE_API_FAV_DRAWER + img.filename}
                      alt={`Image ${i + 1}`}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default ProductDetail;
