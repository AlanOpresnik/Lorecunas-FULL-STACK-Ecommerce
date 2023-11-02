import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useBannerData } from "../../hooks/BannerHook";

export default function Banner() {
  const { banners, loading } = useBannerData();

  return (
    <>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper rounded mt-[6rem]"
        >
          {banners.map((item) => (
            <SwiperSlide key={item._id}>
              <img
                className="w-full h-[24rem] max-h-full lg:h-[38rem]  object-cover  md:object-inherit"
                style={{ maxHeight: "100%",  }}
                src={item.img}
                alt={`Banner`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
