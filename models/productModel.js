import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  // Image will saved in buffer data type
  image: {
    type: String,
  },
  title: {
    type: String,
    require: true,
    unique: true,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
  brand: {
    type: String,
  },
  category: {
    type: String,
  },
});
const prodcuct_schema = mongoose.model("Product", productSchema);
export default prodcuct_schema;
