const { Schema, model } = require("mongoose");
const OfertSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],
  category: {
    type: String,
  },
  ofert: {
    type: Boolean,
  },
  category:{
    type: String,
    required: true,
  }
});

module.exports = model("Ofert", OfertSchema);
