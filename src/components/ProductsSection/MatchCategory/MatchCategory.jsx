import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./match.css"
import axios from "axios";

const MatchCategory = () => {
  const { id } = useParams();
  const [matchs, setMatchs] = useState([]);

  useEffect(() => {
    try {
      axios
        .get(
          import.meta.env.VITE_API_GET_MATCH_PRODUUCTS+id
        )
        .then((res) => {
          setMatchs(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <div>
        <h3 className="text-2xl text-center font-bold mt-[120px] md:mt-[0px] mb-6">
          OPCIONES QUE PODRIAN  <span className="text-[#FF9FCE]">INTERESARTE</span>
        </h3>
      </div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation ]}
        navigation
        className="mySwiper matchSwiper"
        breakpoints={{
          300: {
            slidesPerView: 1,
            navigation:true
          },
          400: {
            slidesPerView: 1.2,
          },
          500: {
            slidesPerView: 1.4,
          },
          660: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2.2,
          },
          820: {
            slidesPerView: 2.4,
          },
          1022: {
            slidesPerView: 3,
          },
          1300: {
            slidesPerView: 4,
          },
        }}
      >
        {matchs.length < 1 ? (
          <SwiperSlide>
            <p>NO HAY COINCIDENCIAS</p>
          </SwiperSlide>
        ) : (
          matchs.map((product) => (
            <SwiperSlide key={product._id}>
              <div className="group relative shadow transition-shadow hover:shadow-lg p-6 pt-0 rounded px-0 w-[320px]">
                <div className="h-60 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none transition-opacity group-hover:opacity-75 lg:h-60">
                  <img
                    src={import.meta.env.VITE_API_FAV_DRAWER+product.images[0].filename}
                    alt={product.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-[320px]"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="p-3">
                    <h3 className="text-lg font-bold">
                      <Link
                        className="line-clamp-1 mr-5"
                        to={`/productDetail/${product._id}`}
                      >
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </Link>
                    </h3>
                    <p className="text-2xl font-bold text-[#ff9fce]">
                      ${product.price}
                    </p>
                    <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};

export default MatchCategory;
