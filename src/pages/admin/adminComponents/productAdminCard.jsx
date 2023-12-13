import React, { useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
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
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import FormatoDinero from "../../../helpers/FormatearDinero";

const ProductAdminCard = ({ prod }) => {
  const { handleDeleteProduct } = useProductsDestacados();
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...prod });
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOverlayHovered, setIsOverlayHovered] = useState([]);
  const navigate = useNavigate();
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
      
      await axios.put(
        import.meta.env.VITE_API_PUT_PRODUCT + editedProduct._id,
        editedProduct
      );

      

      setIsEditing(false);
      Swal.fire({
        title: "Producto editado con exito",
        text: `el producto ${editedProduct.title} fue editado correctamente `,
        icon: "success",
      });
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
      const imageId = editedProduct.images[index]._id;

      // Realiza una solicitud DELETE al servidor para eliminar la imagen
      await axios.delete(
        `https://lorecunas-backend.onrender.com/api/products/products/${editedProduct._id}/images/${imageId}`
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

  const handleRedirect = (id) => {
    navigate(`/productDetail/${id}`);
  };

  const handleUploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append("image", selectedImage);

      const response = await axios.post(
        `https://lorecunas-backend.onrender.com/api/products/products/${editedProduct._id}/images`,
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
    <div className="flex gap-6 overflow-x-auto max-w-[600px] ma">
      <div>
        <img
          className="w-[160px] h-[100px] object-cover rounded"
          src={import.meta.env.VITE_API_FAV_DRAWER + prod.images[0].filename}
          alt={`Product ${prod._id}`}
        />
      </div>
      <div className="flex flex-col items-center lg:flex-row lg:items-start w-full">
        <div>
          <p className="text-lg font-bold">{prod.title}</p>
          <p className="text-sm text-gray-500 line-clamp-2">
            {prod.description}
          </p>
          <p className="text-sm text-[#FF9FCE]">
            {" "}
            <FormatoDinero monto={prod.price} />
          </p>
        </div>
        <div className="flex mt-2 lg:mt-0">
          <Tooltip title="Editar" arrow>
            <Button onClick={handleEditClick}>
              <ModeEditIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Eliminar" arrow>
            <Button onClick={() => handleDeleteProduct(prod._id)}>
              <DeleteIcon sx={{ color: "red" }} />
            </Button>
          </Tooltip>
          <Tooltip title="Ver Producto" arrow>
            <Button onClick={() => handleRedirect(prod._id)}>
              <OpenInNewIcon sx={{ color: "#ff9fce" }} />
            </Button>
          </Tooltip>
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
                  key={index}
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
  );
};

export default ProductAdminCard;
