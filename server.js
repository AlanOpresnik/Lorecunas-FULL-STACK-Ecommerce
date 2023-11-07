const { connection } = require("./server/database/conection");
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

// Configura multer para gestionar las cargas de archivos


//Aviso
console.log("conexion establecida");

//conectar bd
connection();

//Servidor node
const app = express();
const port = 3900;

//cors
app.use(cors());

//datos a obj
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PRODUCT_ROUTES = require("./server/routes/products");
const BANNER_ROUTES = require("./server/routes/banner");
const OFERT_ROUTES = require("./server/routes/oferts");

app.use("/api/products", PRODUCT_ROUTES);
app.use("/api/banners", BANNER_ROUTES);
app.use("/api/oferts", OFERT_ROUTES);

app.use('/uploadsProducts', express.static('./server/uploadsProducts'));

app.listen(port, () => {
  console.log("listening on port " + port);
});
