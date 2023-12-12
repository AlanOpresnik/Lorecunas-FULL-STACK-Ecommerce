import React from "react";
import bannerImg from "../../img/banner.webp";
import "./banner.css";

export default function Banner() {

  return (
    <div className="relative h-[400px] md:h-[500px]">
        <div className="rounded mt-[6rem] h-[500px]">
          <img
            className="w-full h-[24rem] max-h-full lg:h-[38rem] object-cover md:object-inherit"
            style={{ maxHeight: "100%" }}
            src={bannerImg}
            alt={`Banner`}
          ></img>
        </div>
    </div>
  );
}
