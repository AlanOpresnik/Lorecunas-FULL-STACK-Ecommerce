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
        <div className=" ">
          <img
            className="rounded min-w-[100px] w-[100px] h-[80px]"
            src={`http://localhost:3900/uploadsProducts/${prodFav.productDetail.images[0].filename}`}
          />
        </div>
        <div className="max-h-20 overflow-hidden">
          <h3 className="text-md line-clamp-3   leading-4">{prodFav.productDetail.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default FavCard;
