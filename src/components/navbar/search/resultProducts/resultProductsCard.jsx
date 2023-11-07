import React from "react";
import { Link } from "react-router-dom";

const ResultProductsCard = ({ prod }) => {
  return (
    <Link to={`/productDetail/${prod._id}`}>
    <div className="relative mb-[1rem] mt-3 h-auto md:h-[150px] p-4 flex-col md:flex md:flex-row md:mt-0 justify-center  bg-white rounded-lg shadow">
      <div className="h-[120px] w-[200px] md:h-[200px] md:w-[300px] md:flex-shrink-0">
        <img
          alt="Product"
          className="h-[120px] w-[250px] object-cover rounded-lg"
          src={prod.images[0]}
        />
      </div>
      <div className="mt-3 flex flex-col w-full md:w-[200px]">
        <p></p>
        <h3 className="text-[#ff9fce] text-xs tracking-widest mb-1">{prod.category}</h3>
        <h2 className="text-gray-900 text-md font-medium line-clamp-2">{prod.title}</h2>
        <p className="mt-1 text-xl text-gray-700">${prod.price}</p>
      </div>
    </div>
    </Link>
  );
};

export default ResultProductsCard;