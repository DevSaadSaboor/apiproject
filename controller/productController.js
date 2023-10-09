import Product from "../models/productModel.js";
import * as productService from '../services/productServices.js';


// Creating The product
export const creatProduct = async (req, res) => {
  try {
    const { image, title, description, price, brand, category } = req.body;
    const newProduct = new Product({
      image,
      title,
      description,
      price,
      brand,
      category,
    });
    await newProduct.save();
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: "error" });
  }
};

// Get all the Products

export const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();

    if (products.length > 0) {
      res.status(200).json(products);
    } else {
      res.status(404).json({ message: 'No products found.' });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};
// export const getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     if (products) {
//       res.status(200).json(products);
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Products Not Found" });
//   }
// };

// Update Product BY ID
export const updateSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await productService.updateSingleProduct(id, req.body);

    if (updatedProduct) {
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found.' });
    }
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: error.message });
  }
};

// export const updateSingleProduct = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const products = await Product.findByIdAndUpdate(id, req.body, {
//       new: true,
//     });
//     if (products) {
//       res.status(200).json(products);
//     }else {
//       res.status(404).json({ message: "Product not found" });
//     }

//   } catch (err) {
//     res.status(400).json({ message: "Got an Error in Catch Block" + err.message });
//   }
// };

// Delete Product by Id

export const deleteSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await productService.deleteSingleProduct(id);

    if (deletedProduct) {
      res.status(200).json(deletedProduct);
    } else {
      res.status(404).json({ message: 'Product not found.' });
    }
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: error.message });
  }
};

// export const deleteSingleProduct = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedProduct = await Product.findByIdAndDelete(id, req.body, {
//       new: true,
//     });
//     if (deletedProduct) {
//       res.status(200).json(deletedProduct);
//     }
//   } catch {
//     res.status(400).json({ message: "Got Error in Catch Block" });
//   }
// };
