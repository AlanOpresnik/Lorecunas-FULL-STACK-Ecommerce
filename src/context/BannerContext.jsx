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
    try {
      axios.get('http://localhost:3900/api/banners/getBanners').then((res) => {
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