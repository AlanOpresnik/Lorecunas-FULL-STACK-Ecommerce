import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import clienteImg from "../../../img/cliente1.jpeg";
import clienteImg2 from "../../../img/cliente2.jpeg";
import clienteImg3 from "../../../img/cliente3.jpeg";
import clienteImg4 from "../../../img/cliente4.jpeg";
import clienteImg5 from "../../../img/cliente5.jpeg";
import clienteImg6 from "../../../img/cliente6.jpeg";
import "swiper/css";
import "swiper/css/pagination";
import "./clientes.css";
import { Pagination } from "swiper/modules";
const Clientes = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center gap-6">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper rounded mt-[1rem]"
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1324: {
              slidesPerView: 2,
            },
            1340: {
              slidesPerView: 3,
            },
          }}
        >
          <div className="flex flex-col items-center justify-center">
            <SwiperSlide>
              <div className="mr-6 w-full">
                <img
                  className="h-[350px] w-full md:h-[450px]"
                  src={clienteImg}
                />
                <div
                  role="list"
                  aria-label="Testimonials"
                  class="w-[450px] flex-wrap justify-center items-start"
                >
                  <div
                    role="listitem"
                    class="bg-white shadow rounded p-4 xl:p-8"
                  >
                    <img
                      className="h-[25px]"
                      src="https://fundacionisabelmartin.es/wp-content/uploads/2021/01/comillas-2-1024x887.png"
                      aria-hidden="true"
                    />
                    <div class="pl-4 pt-4 flex items-start justify-between">
                      <div class="mr-6 w-full">
                        <p class="xl:text-xl xl:leading-loose text-gray-600 w-[20rem] h-[150px]">
                          Quiero expresar mi profundo agradecimiento por la cuna
                          que nos han brindado para nuestro bebé. Su generosidad
                          ha llenado de alegría y comodidad la vida de nuestro
                          pequeño tesoro
                        </p>
                        <div className="flex items-center mt-4 gap-3">
                          <img
                            className="max-w-[70px] h-[70px] rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=576&h=576&q=80"
                          />
                          <p class=" text-base font-semibold leading-none text-gray-800">
                            Anna Smith
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mr-6 w-full">
                <img
                  className="h-[350px] w-full md:h-[450px]"
                  src={clienteImg2}
                />
                <div
                  role="list"
                  aria-label="Testimonials"
                  class="w-[450px] flex-wrap justify-center items-start"
                >
                  <div
                    role="listitem"
                    class="bg-white shadow rounded p-4 xl:p-8"
                  >
                    <img
                      className="h-[25px]"
                      src="https://fundacionisabelmartin.es/wp-content/uploads/2021/01/comillas-2-1024x887.png"
                      aria-hidden="true"
                    />
                    <div class="pl-4 pt-4 flex items-start justify-between">
                      <div class="mr-6">
                        <p class="xl:text-xl xl:leading-loose text-gray-600  w-[20rem] h-[150px]">
                          Estoy inmensamente agradecida por haber comprado esta
                          hermosa cuna para nuestro bebé. Ha sido una inversión
                          que ha hecho que la llegada de nuestro hijo sea aún
                          más especial y confortable
                        </p>
                        <div className="flex items-center mt-4 gap-3">
                          <img
                            className="max-w-[70px] h-[70px] rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=576&h=576&q=80"
                          />
                          <p class=" text-base font-semibold leading-none text-gray-800">
                            Anna Smith
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mr-6 w-full">
                <img
                  className="h-[350px] w-full md:h-[450px]"
                  src={clienteImg3}
                />
                <div
                  role="list"
                  aria-label="Testimonials"
                  class="w-[450px] flex-wrap justify-center items-start"
                >
                  <div
                    role="listitem"
                    class="bg-white shadow rounded p-4 xl:p-8"
                  >
                    <img
                      className="h-[25px]"
                      src="https://fundacionisabelmartin.es/wp-content/uploads/2021/01/comillas-2-1024x887.png"
                      aria-hidden="true"
                    />
                    <div class="pl-4 pt-4 flex items-start justify-between">
                      <div class="mr-6">
                        <p class="xl:text-xl xl:leading-loose text-gray-600  w-[20rem] h-[150px]">
                          Estamos emocionados y agradecidos por la cuna que
                          compramos para nuestro bebé. Saber que nuestro pequeño
                          descansará de manera segura y cómoda nos llena de
                          felicidad
                        </p>
                        <div className="flex items-center mt-4 gap-3">
                          <img
                            className="max-w-[70px] h-[70px] rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=576&h=576&q=80"
                          />
                          <p class=" text-base font-semibold leading-none text-gray-800">
                            Anna Smith
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mr-6 w-full">
                <img
                  className="h-[350px] w-full md:h-[450px]"
                  src={clienteImg4}
                />
                <div
                  role="list"
                  aria-label="Testimonials"
                  class="w-[450px] flex-wrap justify-center items-start"
                >
                  <div
                    role="listitem"
                    class="bg-white shadow rounded p-4 xl:p-8"
                  >
                    <img
                      className="h-[25px]"
                      src="https://fundacionisabelmartin.es/wp-content/uploads/2021/01/comillas-2-1024x887.png"
                      aria-hidden="true"
                    />
                    <div class="pl-4 pt-4 flex items-start justify-between">
                      <div class="mr-6">
                        <p class="xl:text-xl xl:leading-loose text-gray-600  w-[20rem] h-[150px]">
                          La elección de esta cuna fue una decisión acertada.
                          Ver a nuestro bebé durmiendo en ella nos llena de
                          alegría y gratitud por haberla comprado.
                        </p>
                        <div className="flex items-center mt-4 gap-3">
                          <img
                            className="max-w-[70px] h-[70px] rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=576&h=576&q=80"
                          />
                          <p class=" text-base font-semibold leading-none text-gray-800">
                            Anna Smith
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mr-6 w-full">
                <img
                  className="h-[350px] w-full md:h-[450px]"
                  src={clienteImg5}
                />
                <div
                  role="list"
                  aria-label="Testimonials"
                  class="w-[450px] flex-wrap justify-center items-start"
                >
                  <div
                    role="listitem"
                    class="bg-white shadow rounded p-4 xl:p-8"
                  >
                    <img
                      className="h-[25px]"
                      src="https://fundacionisabelmartin.es/wp-content/uploads/2021/01/comillas-2-1024x887.png"
                      aria-hidden="true"
                    />
                    <div class="pl-4 pt-4 flex items-start justify-between">
                      <div className="mr-6 w-full">
                        <p class="xl:text-xl xl:leading-loose text-gray-600  w-[20rem] h-[150px]">
                          La cuna que elegimos para nuestro bebé ha resultado
                          ser una adquisición maravillosa. Gracias por tu apoyo
                          en esta emocionante etapa de nuestras vidas.
                        </p>
                        <div className="flex items-center mt-4 gap-3">
                          <img
                            className="max-w-[70px] h-[70px] rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=576&h=576&q=80"
                          />
                          <p class=" text-base font-semibold leading-none text-gray-800">
                            Anna Smith
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mr-6 w-full">
                <img
                  className="h-[350px] w-full md:h-[450px]"
                  src={clienteImg6}
                />
                <div
                  role="list"
                  aria-label="Testimonials"
                  class="w-[450px] flex-wrap justify-center items-start"
                >
                  <div
                    role="listitem"
                    class="bg-white shadow rounded p-4 xl:p-8"
                  >
                    <img
                      className="h-[25px]"
                      src="https://fundacionisabelmartin.es/wp-content/uploads/2021/01/comillas-2-1024x887.png"
                      aria-hidden="true"
                    />
                    <div class="pl-4 pt-4 flex items-start justify-between">
                      <div className="mr-6 w-full">
                        <p class="xl:text-xl xl:leading-loose text-gray-600  w-[20rem] h-[150px]">
                          La cuna que compramos para nuestro bebé se ha
                          convertido en un rincón de amor y descanso. Estamos
                          felices por la elección que hicimos y agradecidos por
                          tu ayuda en este proceso.
                        </p>
                        <div className="flex items-center mt-4 gap-3">
                          <img
                            className="max-w-[70px] h-[70px] rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=576&h=576&q=80"
                          />
                          <p class=" text-base font-semibold leading-none text-gray-800">
                            Anna Smith
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Clientes;
