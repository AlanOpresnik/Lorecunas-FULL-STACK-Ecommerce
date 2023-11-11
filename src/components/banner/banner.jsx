import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useBannerData } from "../../hooks/BannerHook";
import "./banner.css";

export default function Banner() {
  const { banners, loading } = useBannerData();

  return (
    <div className="relative h-[400px] md:h-[500px]">
      {loading ? (
        // Fondo gris de carga mientras se carga el banner
        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center h-[450px] md:h-[550px]">
         
        </div>
      ) : (
        // Swiper con diapositivas reales una vez que se cargan los datos
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper rounded mt-[6rem] h-[500px]"
        >
          {banners.map((item) => (
            <SwiperSlide key={item._id}>
              <img
                className="w-full h-[24rem] max-h-full lg:h-[38rem] object-cover md:object-inherit"
                style={{ maxHeight: "100%" }}
                src={item.img}
                alt={`Banner`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
