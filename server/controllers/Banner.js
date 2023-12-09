const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Banner = require("../models/Banner");

// Ruta de destino para las imágenes de banners
const bannerDestination = "./server/uploadsBanners";

const bannerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, bannerDestination);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const bannerUpload = multer({ storage: bannerStorage });
const getBanners = async (req, res) => {
  try {
    // Encuentra todos los banners en la base de datos
    const banners = await Banner.find();

    return res.status(200).send({
      status: "success",
      msg: "Banners recuperados con éxito",
      banners: banners,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      msg: "Hubo un error al recuperar los banners",
      error: error,
    });
  }
};

const postBanner = async (req, res) => {
  // Aquí asocias el middleware al manejo de la ruta postBanner
  bannerUpload.single('bannerImage')(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).send({
        status: "error",
        msg: "Error en la carga de la imagen",
        error: err,
      });
    } else if (err) {
      return res.status(500).send({
        status: "error",
        msg: "Hubo un error al procesar la imagen",
        error: err,
      });
    }

    const bannerData = req.body;

    if (!req.file) {
      return res.status(400).send({
        status: "error",
        msg: "No se proporcionó ninguna imagen de banner",
      });
    }

    try {
      const banner = new Banner({
        ...bannerData,
        bannerImage: req.file.filename,
      });

      const savedBanner = await banner.save();

      return res.status(200).send({
        status: "success",
        msg: "Banner subido con éxito",
        banner: savedBanner,
      });
    } catch (error) {
      return res.status(500).send({
        status: "error",
        msg: "Hubo un error al guardar el banner",
        error: error,
      });
    }
  });
};

const deleteBanner = async (req, res) => {
  const bannerId = req.params.id;

  try {
    const deletedBanner = await Banner.findByIdAndRemove(bannerId);

    if (!deletedBanner) {
      return res.status(404).send({
        status: "error",
        msg: "Banner no encontrado",
      });
    }

    // Eliminar la imagen asociada al banner
    const imagePath = path.join(
      __dirname,
      "../uploadsBanners",
      deletedBanner.bannerImage
    );
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error(`Error al eliminar la imagen del banner: ${err}`);
      }
    });

    return res.status(200).send({
      status: "success",
      msg: "Banner eliminado con éxito",
      banner: deletedBanner,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      msg: "Hubo un error al eliminar el banner",
      error: error,
    });
  }
};

module.exports = {
  getBanners,
  postBanner,
  deleteBanner,
};