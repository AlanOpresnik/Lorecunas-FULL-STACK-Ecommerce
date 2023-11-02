const mongoose = require("mongoose");


const connection = async () => {
    try {
      await mongoose.connect("mongodb://127.0.0.1:27017/loreCunas")
      console.log("Conectado correctamente a Lorecunas")
    } catch (error) {
        console.error(error)
        throw new Error("No se ah podido conectar a la base de datos")
    }
}

module.exports = {
    connection
}