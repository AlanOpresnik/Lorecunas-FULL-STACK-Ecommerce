import React from "react";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const InfoIcons = () => {
  return (
    <div className="flex justify-center gap-8 text-xl mt-5 flex-wrap" >
      <div className=" card p-10 md:border-r-2">
        <div className="flex font-bold flex-col items-center ">
          <CreditScoreIcon sx={{width:"50px", height:"50px",  opacity:".6"}} fontSize="large" />
          <h4 className="font-bold opacity-80">12 CUOTAS <span className="text-[#FE98CB]  font-bold">SIN INTERES</span></h4>
          <p className="opacity-50 text-xs">Solo comprando en nuestro comercio</p>
        </div>
      </div>
      <div className=" card p-10 md:border-r-2">
        <div className="flex font-bold flex-col items-center">
          <LocalShippingIcon sx={{width:"50px", height:"50px", opacity:".6"}}  fontSize="large" />
          <h4 className="font-bold opacity-80">ENVIOS  <span className="text-[#FE98CB] font-bold">100%</span> SEGUROS</h4>
          <p className="opacity-50 text-xs">A cargo de nuestro sistema de envios</p>
        </div>
      </div>
      <div  className="card p-10 ">
        <div className="flex font-bold flex-col items-center">
          <WorkspacePremiumIcon sx={{width:"50px", height:"50px", opacity:".6"}} fontSize="large" />
          <h4 className="font-bold opacity-80">Garantías <span className="text-[#FE98CB] font-bold">oficiales</span></h4>
          <p className="opacity-50 text-xs">Durante mas de 3 meses</p>
        </div>
      </div>
    </div>
  );
};

export default InfoIcons;
