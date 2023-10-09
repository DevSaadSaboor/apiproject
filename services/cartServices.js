import Cart from "../models/cartModel.js"

// export const addToCart = async ({ userId, productId, quantity }) => {
//     try {

//         if (!userId || !productId || !quantity) {
//             throw new Error('userId, productId, and quantity are required fields.');
//         }

//         // Create a new cart entry
//         const cartItem = new Cart({
//             user: userId,
//             product: productId,
//             quantity: quantity,
//         });

//         await cartItem.save();
//         return cartItem;
//     } catch (error) {
//         throw new Error(error.message);
//     }
// };