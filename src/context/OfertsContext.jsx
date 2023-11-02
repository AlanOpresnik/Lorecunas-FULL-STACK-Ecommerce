import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const OfertsContext = createContext();

export const useOferts = () => {
  return useContext(OfertsContext);
};

export const OfertsProvider = ({ children }) => {
  const [oferts, setOferts] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchOfert = axios.get("http://localhost:3900/api/oferts/getOferts");

  useEffect(() => {
    try {
      fetchOfert.then((res) => {
        setOferts(res.data.oferts);
        setLoading(false);
      });
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, [oferts]);

  return (
    <OfertsContext.Provider value={{ oferts, loading, fetchOfert }}>
      {children}
    </OfertsContext.Provider>
  );
};
