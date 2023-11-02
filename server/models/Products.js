const { Schema, model } = require("mongoose");

const ProductSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required:true,
  },
  price:{
    type: Number,
    required: true,
  },
  images: [
    {
      type: String, 
    },
  ],
  category:{
    type: String,
  },
  ofert:{
    type: Boolean
  },
  destacado: {
    type: Boolean,
    default: false, 
  },
});

module.exports = model("Product", ProductSchema);
