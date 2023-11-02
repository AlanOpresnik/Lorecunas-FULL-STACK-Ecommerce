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

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/uploads/"); // Carpeta de destino para almacenar las imágenes
    },
    filename: function (req, file, cb) {
      const extname = path.extname(file.originalname);
      const timestamp = Date.now();
      cb(null, `image_${timestamp}${extname}`); // Nombre del archivo con marca de tiempo
    },
  });
  
  const upload = multer({ storage: storage });
  
  // Ruta para cargar una nueva imagen
  app.post("/api/oferts/upload", upload.single("image"), (req, res) => {
    if (req.file) {
      // La imagen se ha subido correctamente
      const imageUrl = `/uploads/${req.file.filename}`; // Ruta relativa de la imagen
  
      res.status(201).json({ imageUrl });
    } else {
      // Hubo un problema al subir la imagen
      res.status(500).json({ error: "Image upload failed" });
    }
  });

app.listen(port, () => {
  console.log("listening on port " + port);
});
