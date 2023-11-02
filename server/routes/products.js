const express = require("express");
const productController = require("../controllers/Product")
const router = express.Router();

// Define tus rutas y middleware para PRODUCT_ROUTES aquí
router.get("/getProducts", productController.getAllProducts)
router.post("/postProduct", productController.postProduct)
router.put("/editProduct/:id", productController.editProduct)
router.delete("/deleteProduct/:id", productController.removeOneProduct)
router.get('/getProductsDestacados', productController.getProductDestacado);
router.put('/marcar-producto-destacado/:productId', productController.marcarProductoComoDestacado);
router.delete('/eliminar-producto-destacado/:productId', productController.eliminarProductoDestacado);
router.get("/getProductDetail/:id", productController.getProductDetails)

module.exports = router;