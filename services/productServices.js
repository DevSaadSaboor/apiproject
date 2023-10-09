import Product from "../models/productModel.js";




export const getAllProducts = async () => {
    try {
        const products = await Product.find();
        return products;
    } catch (error) {
        throw new Error('Error retrieving products.');
    }
};

export const updateSingleProduct = async (productId, updatedData) => {
    try {
        const product = await Product.findByIdAndUpdate(productId, updatedData, {
            new: true,
        });
        return product;
    } catch (error) {
        throw new Error('Error updating product.');
    }
};
export const deleteSingleProduct = async (productId) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(productId);
        return deletedProduct;
    } catch (error) {
        throw new Error('Error deleting product.');
    }
};