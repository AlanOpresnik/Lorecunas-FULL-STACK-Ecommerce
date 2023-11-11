import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const BannerContext = createContext();

export const useBanner = () => {
  return useContext(BannerContext);
};

export const BannerProvider = ({ children }) => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(import.meta.env.VITE_API_GET_BANNER)
    try {
      axios.get(import.meta.env.VITE_API_GET_BANNER).then((res) => {
        setBanners(res.data.banners);
        setLoading(false);
      });
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, []);

  return (
    <BannerContext.Provider value={{ banners, loading }}>
      {children}
    </BannerContext.Provider>
  );
};