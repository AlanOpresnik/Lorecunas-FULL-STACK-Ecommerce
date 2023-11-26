import React, { useEffect, useState } from "react";
import axios from "axios";
import ResultProductsCard from "./resultProducts/resultProductsCard";
import { useLocation } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";
const SearchMobile = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [inputFocused, setInputFocused] = useState(false);

  const location = useLocation();

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  useEffect(() => {
    setInputFocused(false);
    setSearch("");
  }, [location.pathname]);

  // Utiliza useDebouncedCallback para manejar el evento onChange
  const handleSearchDebounced = useDebouncedCallback(
    (value) => {
      if (value) {
        axios(import.meta.env.VITE_API_GET_SEARCH_PRODUCTS + value).then(
          (res) => {
            setProducts(res.data);
          }
        );
      } else {
        setProducts([]);
      }
      console.log(value)
    },
    // Establece el tiempo de debounce en milisegundos
    200
  );

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearch(value);

    // Llama a la función debounced con el valor del input
    handleSearchDebounced(value);
  };

  const handleSuggestionClick = (product) => {
    setSearch(product);
    setProducts([]);
  };

  return (
    <>
      <div
        className={`flex relative  items-center w-full md:w-[50%] lg:w-[33.33%] sm:ml-5 mt-[12px] md:hidden  ${
          inputFocused ? "relative" : ""
        }`}
      >
        <input
          className="border p-0.5 relative rounded w-full ml-5 "
          type="text"
          placeholder="Buscar"
          value={search}
          onChange={handleSearchChange}
          onFocus={handleInputFocus}
        />
        <div className="text-gray-500 right-0 absolute">
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

export default SearchMobile;