import React, { useState } from "react";

const ProductDestacadosSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  return (
    <div>
      {isMobile ? (
        <div className="flex flex-col mt-[200px]">
          <h4 className="text-center">
            INICIO /<span className=" font-bold"> MUEBLES Y CUNAS</span>
          </h4>
        </div>
      ) : (
        <div className="flex flex-col mt-[200px] ml-8">
          <h4 className="">
            INICIO /<span className=" font-bold"> MUEBLES Y CUNAS</span>
          </h4>
        </div>
      )}
    </div>
  );
};

export default ProductDestacadosSection;





