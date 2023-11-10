import React, { useState, useEffect } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import toast from "react-hot-toast";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Modal,
  Paper,
  TextField,
} from "@mui/material";
import { useOferts } from "../../../context/OfertsContext";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const OfertAdminCard = ({ ofert, index }) => {
  const {
    oferts,
    loading,
    fetchOfert,
    handleDeleteOfert,
    fetchImagesForOfert,
    uploadImageForOfert,
  } = useOferts();
  const [isEditing, setIsEditing] = useState(false);
  const [editedOfert, setEditedOfert] = useState({ ...ofert });
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOverlayHovered, setIsOverlayHovered] = useState([]);
  const [isDataUpdated, setIsDataUpdated] = useState(false);

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
      // Enviar los datos editados a través de la solicitud PUT
      await axios.put(
        `http://localhost:3900/api/oferts/editOfert/${editedOfert._id}`,
        editedOfert
      );

      setIsDataUpdated(true);

      // Cerrar el modal de edición
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
      // Obten la ID de la imagen que deseas eliminar
      const imageId = editedOfert.images[index]._id;

      // Realiza una solicitud DELETE al servidor para eliminar la imagen
      await axios.delete(
        `http://localhost:3900/api/oferts/ofert/${editedOfert._id}/images/${imageId}`
      );

      // Actualiza el estado con las imágenes actualizadas
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
        `http://localhost:3900/api/oferts/ofert/${editedOfert._id}/images`,
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
    }); // Assign the input value to the state
  };

  const handleDescriptionChange = (e) => {
    setEditedOfert({
      ...editedOfert,
      description: e.target.value,
    }); // Assign the input value to the state
  };

  const handlePriceChange = (e) => {
    setEditedOfert({
      ...editedOfert,
      price: e.target.value,
    }); // Assign the input value to the state
  };

  const handleCategoryChange = (e) => {
    setEditedOfert({
      ...editedOfert,
      category: e.target.value,
    }); // Assign the input value to the state
  };

  return (
    <>
   <div className="flex gap-6 overflow-x-auto max-w-[600px]">
        <div>
          <img
            className="max-w-[120px]"
            src={`http://localhost:3900/uploadsProducts/${ofert.images[0].filename}`}
            alt={`Product ${ofert._id}`}
          />
        </div>
        <div className="w-full lg:w-[450px] flex flex-col lg:flex-row items-center">
          <div>
            <p className="text-lg font-bold">{ofert.title}</p>
            <p className="text-sm text-gray-500 line-clamp-2">
              {ofert.description}
            </p>
          </div>
          <div className="flex mt-2 lg:mt-0">
            <Button onClick={handleEditClick}>
              <ModeEditIcon />
            </Button>
            <Button onClick={() => handleDeleteOfert(ofert._id)}>
              <DeleteIcon sx={{ color: "red" }} />
            </Button>
          </div>
        </div>

        {/* Modal de edición */}
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
                height:660, // Estilo para pantallas de 768px o menos
              },
            }}
          >
            <div className="modal-content flex flex-col  max-w-full gap-6">
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
                      src={`http://localhost:3900/uploadsProducts/${image.filename}`}
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

              <div className="flex justify-end gap-6">
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
