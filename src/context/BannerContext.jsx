import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const BannerContext = createContext();

export const useBanner = () => {
  return useContext(BannerContext);
};

export const BannerProvider = ({ children }) => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
   axios.get(import.meta.env.VITE_API_GET_BANNER)
  .then((res) => {
    if (res.data && res.data.banners) {
      setBanners(res.data.banners);
    } else {
      console.error("La respuesta no contiene 'banners':", res.data);
    }
    setLoading(false);
  })
  .catch((error) => {
    console.error("Error al hacer la solicitud GET:", error);
    setLoading(false);
  });
  }, []);

  const postBanner = async (bannerData) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_POST_BANNER,
        bannerData
      );

      if (response.status === 200) {
        console.log("Banner subido con éxito", response.data);
      } else {
        console.error(
          "Error al subir el banner",
          response.status,
          response.data
        );
      }
    } catch (error) {
      console.error("Error al realizar la solicitud POST", error);
    }
  };

  return (
    <BannerContext.Provider value={{ banners, loading, postBanner }}>
      {children}
    </BannerContext.Provider>
  );
};
