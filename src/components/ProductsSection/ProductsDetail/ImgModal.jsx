import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "./productDetail.css";
import { Navigation,Pagination } from "swiper/modules";


const ImageModal = ({ isOpen, images, initialSlide, onClose }) => {
  const modalRef = useRef(null);
  const closeModal = () => {
    onClose();
  };
  const handleOutsideClick = (e) => {
    // Si se hace clic en el div modal (o sus hijos), no cerrar el modal
    if (modalRef.current && modalRef.current.contains(e.target)) {
      return;
    }

    // Si se hace clic fuera del modal, cerrar el modal
    closeModal();
  };
  if (!isOpen) {
    return null;
  }
  const firstSwiperRef = useRef(null);
  const secondSwiperRef = useRef(null);

  return (
    
    <div  onClick={handleOutsideClick} className="fixed inset-0  flex items-center justify-center z-50">
      <div  className="fixed inset-0 bg-black opacity-50"></div>
      <div  ref={modalRef} className=" h-[30rem] items-center flex modal-container px-7 py-4 bg-white w-5/6 md:max-w-xl mx-auto rounded-lg z-50 relative modal-enter">
        <span
          className="modal-close absolute top-2 right-2 text-3xl cursor-pointer"
          onClick={onClose}
        >
          &times;
        </span>
        <Swiper
          initialSlide={initialSlide}
          spaceBetween={20}
            slidesPerView={1}
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            Navigation={true}
            loop
          onSwiper={(swiper) => (firstSwiperRef.current = swiper)}
        >
          {images.map((img, i) => (
            <SwiperSlide className="" key={i}>
              <img src={img} alt="ecommerce" className=" rounded-[1.5rem] w-full h-[20rem] md:w-full md:h-[30rem] py-4 " />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageModal;
