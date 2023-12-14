import React, { useState, useEffect } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import toast from "react-hot-toast";
import {
  Button,
  Checkbox,
  Chip,
  FormControlLabel,
  Modal,
  Paper,
  TextField,
  Tooltip,
} from "@mui/material";
import { useOferts } from "../../../context/OfertsContext";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import FormatoDinero from "../../../helpers/FormatearDinero";

const OfertAdminCard = ({ ofert, index }) => {
  const { fetchOfert, handleDeleteOfert } = useOferts();
  const [isEditing, setIsEditing] = useState(false);
  const [editedOfert, setEditedOfert] = useState({ ...ofert });
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOverlayHovered, setIsOverlayHovered] = useState([]);
  const [isDataUpdated, setIsDataUpdated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (isDataUpdated) {
      fetchOfert();
      setIsDataUpdated(false);
    }
  }, [isDataUpdated]);

  const handleOverlayHoverEnter = (index) => {
    const updatedIsOverlayHovered = [...isOverlayHovered];
    updatedIsOverlayHovered[index] = true;
    setIsOverlayHovered(updatedIsOverlayHovered);
  };

  const handleOverlayHoverLeave = (index) => {
    const updatedIsOverlayHovered = [...isOverlayHovered];
    updatedIsOverlayHovered[index] = false;
    setIsOverlayHovered(updatedIsOverlayHovered);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedOfert({ ...ofert });
  };

  const handleImageChange = (e) => {
    const selectedImageFile = e.target.files[0];
    setSelectedImage(selectedImageFile);
    toast.success("imagen seleccionada exitosamente");
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(
        import.meta.env.VITE_API_PUT_OFERT + editedOfert._id,
        editedOfert
      );

      setIsDataUpdated(true);

      setIsEditing(false);
      Swal.fire({
        title: "Oferta actualizada con exito",
        text: "Recarga la pagina para ver los cambios completos",
        icon: "success",
      });
    } catch (error) {
      console.error("Error al actualizar el producto", error);
    }
  };

  const handleRemoveImage = async (index) => {
    if (editedOfert.images.length === 1) {
      toast.error("Debes mantener al menos una imagen.");
      return;
    }
    toast.success(
      "imagen eliminada correctamente, Recarga la pagina para ver los cambios"
    );

    try {
      
      const imageId = editedOfert.images[index]._id;

     
      await axios.delete(
        `https://lorecunas-backend.onrender.com/api/oferts/ofert/${editedOfert._id}/images/${imageId}`
      );

      const updatedImages = editedOfert.images.filter(
        (image, i) => i !== index
      );
      setEditedProduct({
        ...editedOfert,
        images: updatedImages,
      });
    } catch (error) {
      console.error("Error al eliminar la imagen", error);
    }
  };

  const handleUploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append("image", selectedImage);

      const response = await axios.post(
        `https://lorecunas-backend.onrender.com/api/oferts/ofert/${editedOfert._id}/images`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        const editedOfert = response.data.editedOfert;
        setEditedProduct(editedOfert);
      }
    } catch (error) {
      console.error("Error al subir la imagen:", error);
    }
  };

  const handleTitleChange = (e) => {
    setEditedOfert({
      ...editedOfert,
      title: e.target.value,
    });
  };

  const handleDescriptionChange = (e) => {
    setEditedOfert({
      ...editedOfert,
      description: e.target.value,
    }); 
  };

  const handlePriceChange = (e) => {
    setEditedOfert({
      ...editedOfert,
      price: e.target.value,
    }); 
  };
  const handleBeforePriceChange = (e) => {
    setEditedOfert({
      ...editedOfert,
      beforePrice: e.target.value,
    }); 
  };

  const handleCategoryChange = (e) => {
    setEditedOfert({
      ...editedOfert,
      category: e.target.value,
    }); 
  };
  const handleRedirect = (id) => {
    navigate(`/ofertDetail/${id}`);
  };
  return (
    <>
      <div className="flex gap-6 overflow-x-auto max-w-[600px] border-b pb-2 ">
        <div>
          <img
            className="w-[160px] h-[120px] object-cover rounded"
            src={import.meta.env.VITE_API_FAV_DRAWER + ofert.images[0].filename}
            alt={`Product ${ofert._id}`}
          />
        </div>
        <div className="w-full lg:w-[450px] flex flex-col lg:flex-row items-center">
          <div>
            <p className="text-lg font-bold">{ofert.title}</p>
            <p className="text-sm text-gray-500 max-w-[250px] line-clamp-2">
              {ofert.description}
            </p>

            <p
             className="text-[#ff9fce]">
              {" "}
              <FormatoDinero monto={ofert.price} />
            </p>
            <div>
            <p className="text-gray-500 line-through">
              {" "}
              <FormatoDinero monto={ofert.beforePrice} />
            </p>
            </div>

           
          </div>
          <div className="flex mt-2 lg:mt-0">
            <Tooltip title="Editar" arrow>
              <Button onClick={handleEditClick}>
                <ModeEditIcon />
              </Button>
            </Tooltip>
            <Tooltip title="Eliminar" arrow>
              <Button onClick={() => handleDeleteOfert(ofert._id)}>
                <DeleteIcon sx={{ color: "red" }} />
              </Button>
            </Tooltip>
            <Tooltip title="Ver oferta" arrow>
              <Button onClick={() => handleRedirect(ofert._id)}>
                <OpenInNewIcon sx={{ color: "#ff9fce" }} />
              </Button>
            </Tooltip>
          </div>
        </div>
        <Modal
          className=" overflow-y-auto"
          open={isEditing}
          onClose={handleCancelEdit}
        >
          <Paper
            sx={{
              position: "absolute",
              borderRadius: ".7rem",
              width: 620, // Estilo predeterminado para pantallas más grandes
              bgcolor: "background.paper",
              boxShadow: 24,
              overflowY: "auto",
              p: 4,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              "@media (max-width: 768px)": {
                width: 350, // Estilo para pantallas de 768px o menos
              },
              "@media (max-width: 398px)": {
                height: 660, // Estilo para pantallas de 768px o menos
              },
            }}
          >
            <div className="modal-content flex flex-col max-h-[920px] md:max-h-[56rem] max-w-full gap-6">
              <h2>Editar Oferta</h2>
              <TextField
                label="Título"
                value={editedOfert.title}
                onChange={handleTitleChange}
              />
              <TextField
                label="Descripción"
                value={editedOfert.description}
                onChange={handleDescriptionChange}
              />
              <TextField
                label="Precio"
                value={editedOfert.price}
                onChange={handlePriceChange}
              />
              <TextField
                label="Precio anterior"
                value={editedOfert.beforePrice}
                onChange={handleBeforePriceChange}
              />
              <TextField
                label="Categoria"
                value={editedOfert.category}
                onChange={handleCategoryChange}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={editedOfert.destacado}
                    onChange={(e) =>
                      setEditedProduct({
                        ...editedOfert,
                        destacado: e.target.checked,
                      })
                    }
                  />
                }
                label="Destacado"
              />

              <h3>Imágenes de la oferta {"(actual)"}</h3>
              <div className="flex gap-6">
                {editedOfert.images.map((image, index) => (
                  <div
                    className="relative w-36 h-36 overflow-hidden cursor-pointer"
                    onMouseEnter={() => handleOverlayHoverEnter(index)}
                    onMouseLeave={() => handleOverlayHoverLeave(index)}
                    onClick={() => handleRemoveImage(index)}
                  >
                    <img
                      src={import.meta.env.VITE_API_FAV_DRAWER + image.filename}
                      alt={`Image ${index}`}
                      className="w-full h-full object-cover"
                    />
                    {isOverlayHovered[index] && (
                      <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
                        <span className="text-white text-3xl">X</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4">
                {selectedImage < 1 ? (
                  <p>Todavia no hay nuevas imagenes que cargar</p>
                ) : (
                  <>
                    <h3>Previsualización de Imágenes {"(a cargar)"}</h3>
                    <div className="flex gap-4">
                      {selectedImage && (
                        <div>
                          <Button onClick={handleCancelEdit}>
                            <img
                              src={URL.createObjectURL(selectedImage)}
                              alt="Imagen seleccionada"
                              className="max-w-[120px] max-h-[130px]"
                            />
                          </Button>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                name="image"
                onChange={handleImageChange}
              />

              <div className="flex justify-end gap-6 ">
                <Button
                  onClick={() => {
                    handleSaveEdit();
                    handleUploadImage();
                  }}
                >
                  Guardar cambios
                </Button>
                <Button
                  className=" bg-red-400"
                  onClick={() => {
                    setIsEditing(false);
                  }}
                  sx={{
                    bgcolor: "red",
                    color: "white",
                    "&:hover": { backgroundColor: "rgb(248 113 113)" },
                  }}
                >
                  Cancelar
                </Button>
              </div>
            </div>
          </Paper>
        </Modal>
      </div>
    </>
  );
};

export default OfertAdminCard;
