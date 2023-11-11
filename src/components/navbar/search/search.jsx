import React, { useState, useEffect } from "react";
import axios from "axios";
import ResultProductsCard from "./resultProducts/resultProductsCard";
import { useLocation } from "react-router-dom";
const Search = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [inputFocused, setInputFocused] = useState(false);

  const location = useLocation();

  const handleInputFocus = () => {
    setInputFocused(true);
  };
  
  useEffect(() => {
      setInputFocused(false);
      setSearch("")
  }, [location.pathname])

  useEffect(() => {
    if (search) {
      // Realiza una solicitud a tu API para obtener sugerencias de búsqueda
      axios(
        import.meta.env.VITE_API_GET_SEARCH_PRODUCTS+search
      ).then((res) => {
        setProducts(res.data);
      });
    } else {
      // Si el campo de búsqueda está vacío, borra las sugerencias
      setProducts([]);
    }
  }, [search]);

  const handleSuggestionClick = (product) => {
    // Al hacer clic en una sugerencia, establece el valor del input y borra las sugerencias
    setSearch(suggestion);
    setProducts([]);
  };

  return (
    <>
      <div
        className={`hidden md:flex items-center relative w-full md:w-[50%] lg:w-[33.33%] sm:ml-5 ${
          inputFocused ? "relative" : ""
        }`}
      >
        <input
          className="border relative p-1 rounded w-full ml-12"
          type="text"
          placeholder="¿Qué cuna estás buscando?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={handleInputFocus}
          
        />
        <div className="text-gray-500 absolute right-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      {products.length > 0 && inputFocused && (
        <div className="absolute top-[17rem] overflow-y-auto max-h-[400px] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 z-10">
          {products.map((prod, index) => (
            <ResultProductsCard prod={prod} key={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default Search;
