import React, { useState } from "react";
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
import { useProductsDestacados } from "../../../context/ProductsDestacadosContext";
import axios from "axios";

const ProductAdminCard = ({ prod }) => {
  const { handleDeleteProduct } = useProductsDestacados();
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...prod });
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOverlayHovered, setIsOverlayHovered] = useState([]);

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
    setEditedProduct({ ...prod });
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleSaveEdit = async () => {
    try {
      // Enviar los datos editados a través de la solicitud PUT
      await axios.put(
        `http://localhost:3900/api/products/editProduct/${editedProduct._id}`,
        editedProduct
      );

      // Cerrar el modal de edición
      setIsEditing(false);
    } catch (error) {
      console.error("Error al actualizar el producto", error);
    }
  };

  const handleRemoveImage = async (index) => {
    if (editedProduct.images.length === 1) {
      toast.error("Debes mantener al menos una imagen.");
      return;
    }

    try {
      // Obten la ID de la imagen que deseas eliminar
      const imageId = editedProduct.images[index]._id;

      // Realiza una solicitud DELETE al servidor para eliminar la imagen
      await axios.delete(
        `http://localhost:3900/api/products/products/${editedProduct._id}/images/${imageId}`
      );

      // Actualiza el estado con las imágenes actualizadas
      const updatedImages = editedProduct.images.filter(
        (image, i) => i !== index
      );
      setEditedProduct({
        ...editedProduct,
        images: updatedImages,
      });
    } catch (error) {
      console.error("Error al eliminar la imagen", error);
    }
  };

  const handleUploadImage = async () => {
    try {
      if (!selectedImage) {
        alert("Selecciona una imagen primero.");
        return;
      }

      const formData = new FormData();
      formData.append("image", selectedImage);

      const response = await axios.post(
        `http://localhost:3900/api/products/products/${editedProduct._id}/images`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        const updatedProduct = response.data.updatedProduct;
        setEditedProduct(updatedProduct);
      }
    } catch (error) {
      console.error("Error al subir la imagen:", error);
    }
  };

  return (
    <div className="flex gap-6">
      <div>
        <img
          className="max-w-[120px]"
          src={`http://localhost:3900/uploadsProducts/${prod.images[0].filename}`}
          alt={`Product ${prod._id}`}
        />
      </div>
      <div className="w-[450px] flex items-center">
        <div>
          <p className="text-lg font-bold">{prod.title}</p>
          <p className="text-sm text-gray-500 line-clamp-2">
            {prod.description}
          </p>
        </div>
        <div className="flex">
          <Button onClick={handleEditClick}>
            <ModeEditIcon />
          </Button>
          <Button onClick={() => handleDeleteProduct(prod._id)}>
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
          }}
        >
          <div className="modal-content flex flex-col  max-w-full gap-6">
            <h2>Editar Producto</h2>
            <TextField
              label="Título"
              value={editedProduct.title}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, title: e.target.value })
              }
            />
            <TextField
              label="Descripción"
              value={editedProduct.description}
              onChange={(e) =>
                setEditedProduct({
                  ...editedProduct,
                  description: e.target.value,
                })
              }
            />
            <TextField
              label="Precio"
              value={editedProduct.price}
              onChange={(e) =>
                setEditedProduct({
                  ...editedProduct,
                  price: e.target.value,
                })
              }
            />
            <TextField
              label="Categoria"
              value={editedProduct.category}
              onChange={(e) =>
                setEditedProduct({
                  ...editedProduct,
                  category: e.target.value,
                })
              }
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={editedProduct.destacado}
                  onChange={(e) =>
                    setEditedProduct({
                      ...editedProduct,
                      destacado: e.target.checked,
                    })
                  }
                />
              }
              label="Destacado"
            />

            <h3>Imágenes del producto {"(actual)"}</h3>
            <div className="flex gap-6">
              {editedProduct.images.map((image, index) => (
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
            </div>
          </div>
        </Paper>
      </Modal>
    </div>
  );
};

export default ProductAdminCard;