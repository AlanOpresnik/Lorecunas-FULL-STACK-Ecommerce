const Ofert = require("../models/Oferts");

const prueba = (req, res) => {
  return res.status(200).send({
    msg: "dfafadf",
  });
};

const getAllOferts = async (req, res) => {
  try {
    // Buscar todos los productos en la base de datos
    const oferts = await Ofert.find();

    return res.status(200).json({
      oferts, // Un objeto con una propiedad "products"
    });
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return res.status(500).json({
      status: "error",
      message: "Error al obtener productos",
    });
  }
};

const postOfert = async (req, res) => {
  // Obtener información del formulario
  const params = req.body;

  // Crear una instancia de Product con los datos del formulario
  const newOfert = new Ofert({
    title: params.title,
    description: params.description,
    price: params.price,
    images: params.images,
    category: params.category, // Asegúrate de que las imágenes se envíen en el formulario
  });

  try {
    // Guardar el producto en la base de datos utilizando una promesa
    const savedOfert = await newOfert.save();

    // Mostrar información del producto guardado
    return res.status(200).send({
      status: "success",
      msg: "Producto guardado con éxito",
      ofert: savedOfert,
    });
  } catch (error) {
    console.error("Error al guardar el producto:", error);
    return res.status(500).send({
      status: "error",
      msg: "Error al guardar el producto",
    });
  }
};

const editOfert = async (req, res) => {
  const ofertId = req.params.id;

  try {
    const ofert = await Ofert.findById(ofertId);

    if (!ofert) {
      return res.status(404).json({
        status: "error",
        message: "Oferta no encontrada",
      });
    }

    // Verifica y actualiza solo si req.body contiene valores
    if (req.body.title) {
      ofert.title = req.body.title;
    }
    if (req.body.description) {
      ofert.description = req.body.description;
    }
    if (req.body.price) {
      ofert.price = req.body.price;
    }
    if (req.body.images) {
      ofert.images = req.body.images;
    }
    if (req.body.category) {
      ofert.category = req.body.category;
    }

    const updatedOfert = await ofert.save();

    return res.status(200).json({
      status: "success",
      message: "Oferta actualizada con éxito",
      Ofert: updatedOfert,
    });
  } catch (error) {
    console.error("Error al editar la oferta:", error);
    return res.status(500).json({
      status: "error",
      message: "Error al editar la oferta",
      error: error
    });
  }
};

const removeOneOfert = async (req, res) => {
  //encontrar product a eliminar
  const ofert = req.params.id;

  try {
    // Buscar el producto por su ID y eliminarlo
    const removedOfert = await Ofert.findByIdAndRemove(ofert);
    if (!removedOfert) {
      return res.status(404).json({
        status: "error",
        message: "oferta no encontrado",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "Producto eliminado con éxito",
      removedOfert: removedOfert,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      msg: "el producto no se puede eliminar",
      error,
    });
  }
};

const getOfertDetails = async (req, res) => {
  try {
    const OfertDetailId = req.params.id;

    // Realiza una consulta a la base de datos para obtener los detalles de la oferta por su ID
    const ofertDetails = await Ofert.findById(OfertDetailId);

    if (!ofertDetails) {
      return res.status(404).json({ message: "Oferta no encontrada" });
    }

    // Si se encuentra la oferta, envía los detalles como respuesta
    res.status(200).send({
      status: "success",
      msg: "aqui esta la oferta completa",
      ofertDetails,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al obtener los detalles de la oferta" });
  }
};

const uploadImageOfert = (req, res) => {
    const ofertId = req.params.id;
  Ofert.findById(ofertId)
    .exec()
    .then((oferta) => {
      if (!oferta) {
        // Manejar si la oferta no se encuentra
        return res.status(404).json({ message: "Oferta no encontrada" });
      }

      // Agrega la nueva URL a la matriz de imágenes en el documento de oferta
      oferta.images.push(nuevaUrlDeImagen);

      // Guarda el documento actualizado en la base de datos
      return oferta.save();
    })
    .then((ofertaActualizada) => {
      // La oferta se ha actualizado correctamente
      return res
        .status(200)
        .json({
          message: "Imagen agregada con éxito",
          oferta: ofertaActualizada,
        });
    })
    .catch((error) => {
      // Manejar cualquier error que ocurra
      return res.status(500).json({ error: error.message });
    });
};
module.exports = {
  prueba,
  getAllOferts,
  postOfert,
  editOfert,
  removeOneOfert,
  getOfertDetails,
};
