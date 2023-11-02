const Product = require("../models/Products");

const prueba = (req, res) => {
  return res.status(200).send({
    status: "200",
    msg: "prueba products",
  });
};

const getAllProducts = async (req, res) => {
  try {
    // Buscar todos los productos en la base de datos
    const products = await Product.find();

    return res.status(200).json({
      products, // Un objeto con una propiedad "products"
    });
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return res.status(500).json({
      status: "error",
      message: "Error al obtener productos",
    });
  }
};

const postProduct = async (req, res) => {
  // Obtener información del formulario
  const params = req.body;

  // Crear una instancia de Product con los datos del formulario
  const newProduct = new Product({
    title: params.title,
    description: params.description,
    price: params.price,
    images: params.images, // Asegúrate de que las imágenes se envíen en el formulario
  });

  try {
    // Guardar el producto en la base de datos utilizando una promesa
    const savedProduct = await newProduct.save();

    // Mostrar información del producto guardado
    return res.status(200).send({
      status: "success",
      msg: "Producto guardado con éxito",
      product: savedProduct,
    });
  } catch (error) {
    console.error("Error al guardar el producto:", error);
    return res.status(500).send({
      status: "error",
      msg: "Error al guardar el producto",
    });
  }
};

const editProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        status: "error",
        message: "Producto no encontrado",
      });
    }

    product.title = req.body.title || product.title;
    product.description = req.body.description || product.description;
    product.price = req.body.price || product.price;
    product.category = req.body.category || product.category
    product.ofert = req.body.ofert || product.ofert
    product.destacado = req.body.destacado || product.destacado

    const updatedProduct = await product.save();

    return res.status(200).json({
      status: "success",
      message: "Producto actualizado con éxito",
      product: updatedProduct,
    });
  } catch (error) {
    console.error("Error al editar el producto:", error);
    return res.status(500).json({
      status: "error",
      message: "Error al editar el producto",
    });
  }
};

const removeOneProduct = async (req, res) => {
  //encontrar product a eliminar
  const product = req.params.id;

  try {
    // Buscar el producto por su ID y eliminarlo
    const removedProduct = await Product.findByIdAndRemove(product);
    if (!removedProduct) {
      return res.status(404).json({
        status: "error",
        message: "Producto no encontrado",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "Producto eliminado con éxito",
      productRemove: removedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      msg: "el producto no se puede eliminar",
      error,
    });
  }
};

const getProductDestacado = (req, res) => {
  Product.find({ destacado: true })
    .then((productosDestacados) => {
      res.json(productosDestacados);
    })
    .catch((err) => {
      res.status(500).json({ error: "Error al obtener productos destacados" });
    });
};

const marcarProductoComoDestacado = (req, res) => {
  const productId = req.params.productId; // Asegúrate de obtener el ID del producto desde la solicitud

  Product.updateOne({ _id: productId }, { destacado: true })
    .then((result) => {
      if (result.nModified === 1) {
        res.json({ message: "error" });
      } else {
        res
          .status(200)
          .json({ msg: "Producto marcado como destacado con éxito" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: "Error al marcar el producto como destacado" });
    });
};

const eliminarProductoDestacado = async (req, res) => {
  const productId = req.params.productId;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    product.destacado = false; // Cambia el valor "destacado" a falso
    await product.save();

    res.json({ message: "Producto eliminado de destacados exitosamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error al eliminar el producto de destacados" });
  }
};

const getProductDetails = async (req, res) => {
  try {
    const ProductDetailId = req.params.id;

    // Realiza una consulta a la base de datos para obtener los detalles de la oferta por su ID
    const productDetail = await Product.findById(ProductDetailId);

    if (!productDetail) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    // Si se encuentra la oferta, envía los detalles como respuesta
    res.status(200).send({
      status: "success",
      msg: "aqui esta el productoDetail completo",
      productDetail,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al obtener los detalles de el product" });
  }
};

module.exports = {
  prueba,
  getAllProducts,
  postProduct,
  editProduct,
  removeOneProduct,
  getProductDestacado,
  marcarProductoComoDestacado,
  eliminarProductoDestacado,
  getProductDetails
};
