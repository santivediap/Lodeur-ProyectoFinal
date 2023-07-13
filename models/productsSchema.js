const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  relevance: {
    type: Number,
    required: true
  },
  image:{
        type: String,
        required: true,
        validate: {
            validator: function(url){
                if(url.indexOf('.jpg') != -1 || url.indexOf('.png') != -1)
                    return true;
                else {
                    return false;
                }
            }, 
            message: "La imagen debe ser PNG o JPG"
        }
  },
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Provider'
  }
});
const product = new mongoose.model("products", productSchema);

module.exports = product;