import { Button } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";

const FavCard = ({ prodFav, toggleDrawer }) => {
  return (
    <Link
      onClick={() => toggleDrawer()}
      to={`/productDetail/${prodFav.productDetail._id}`}
    >
      <div className="flex justify-center items-center gap-3 mt-2  h-[80px] border-b-2 border-[#ff9fce] mb-2 py-12">
        <div className="w-[180px] ">
          <img
            className="rounded min-w-[100px] w-full h-[80px]"
            src={prodFav.productDetail.images[0]}
          />
        </div>
        <div className="max-h-20 overflow-hidden">
          <h3 className="text-md   leading-4">{prodFav.productDetail.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default FavCard;
