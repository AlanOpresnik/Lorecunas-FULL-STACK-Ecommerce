const express = require("express");
const OfertController = require("../controllers/Oferts")
const router = express.Router();

// Define tus rutas y middleware para PRODUCT_ROUTES aquí
router.get("/prueba", OfertController.prueba)
router.get("/getOferts", OfertController.getAllOferts)
router.post("/postOfert", OfertController.postOfert)
router.put("/editOfert/:id", OfertController.editOfert)
router.get("/getOfertDetails/:id", OfertController.getOfertDetails)
router.delete("/deleteOfert/:id", OfertController.removeOneOfert)
module.exports = router;