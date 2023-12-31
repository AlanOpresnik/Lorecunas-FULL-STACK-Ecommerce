import axios from "axios";
import React, { useEffect, useState } from "react";

import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Swal from "sweetalert2";


const CargarOfertaForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    beforePrice: "",
    category: "",
  });

  const [imagePreviews, setImagePreviews] = useState([]);
  const [fileInput, setFileInput] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const files = e.target.files;

    // Leer y mostrar previsualizaciones de imágenes
    const previews = Array.from(files).map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImagePreviews((prevPreviews) => [...prevPreviews, reader.result]);
      };
      return reader;
    });

    setFileInput(files);
  };

  const handleSubmit = async (e) => {
 
    
    e.preventDefault();
    if (imagePreviews.length === 0) {
      return Swal.fire({
        icon: "error",
        title: "Porfavor seleccione una imagen",
        text: "Es nesecario una imagen valida para subir el producto",
        footer: "si seguis teniendo este problema contactate con @alan_opk",
      });
    }
    let timerInterval;
    Swal.fire({
      title: "Su oferta se esta subiendo",
      html: "Este cartel se cerrara en <b></b> milisegundos .",
      timer: 10000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });

    const formDataToSend = new FormData();

    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("beforePrice", formData.beforePrice);
    formDataToSend.append("category", formData.category);

    for (let i = 0; i < fileInput.length; i++) {
      formDataToSend.append("images", fileInput[i]);
    }

    try {
      const response = await axios.post(
        import.meta.env.VITE_API_POST_OFERT,
        formDataToSend
      );
      console.log("Datos enviados con éxito", response.data);
      setFormData({
        title: "",
        description: "",
        price: 0,
        beforePrice: 0,
        category: "",
      });
      setFileInput(null);
      setImagePreviews([]); // Limpiar las previsualizaciones
    } catch (error) {
      console.error("Error al enviar los datos", error);
    }
  };
  

  return (
    <form
      onSubmit={handleSubmit}
      method="post"
      encType="multipart/form-data"
      className="mt-12 md:ml-[15rem]"
    >
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12 flex flex-col">
          <h2 className="text-xl font-bold leading-7 text-gray-900 border-b">
            Subir una nueva{" "}
            <span className="text-indigo-500 uppercase">oferta</span>
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Completa la información para poder cargar una nueva oferta
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nombre del producto
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="title"
                    placeholder="Título"
                    value={formData.title}
                    onChange={handleChange}
                    autoComplete="title"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="price"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Precio
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="number"
                    name="price"
                    placeholder="Precio"
                    value={formData.price}
                    onChange={handleChange}
                    autoComplete="price"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="sm:col-span-4">
                  <div className="mt-6">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Precio anterior
                    </label>

                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="number"
                        name="beforePrice"
                        placeholder="Precio anterior"
                        value={formData.beforePrice}
                        onChange={handleChange}
                        autoComplete="beforePrice"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4 mt-6">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Categoria
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="category"
                        placeholder="category"
                        value={formData.category}
                        onChange={handleChange}
                        autoComplete="price"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Descripción del producto
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  rows={3}
                  name="description"
                  placeholder="Descripción del producto"
                  value={formData.description}
                  onChange={handleChange}
                  autoComplete="description"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="images"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Imágenes del producto
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Sube el archivo</span>
                      <input
                        id="file-upload"
                        name="images"
                        multiple
                        onChange={handleFileChange}
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">o arrastra y suéltalo</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, JPEG
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Previsualización de imágenes */}
          <div className="flex gap-6">
            {imagePreviews.map((preview, index) => (
              <img
                key={index}
                src={preview}
                alt={`Preview ${index}`}
                className="max-w-[120px] flex"
              />
            ))}
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Subir producto
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CargarOfertaForm;
