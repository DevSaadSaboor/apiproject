import Cart from "../models/cartModel.js"


// Create Cart 
export const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    // Validate quantity: Check if it's a valid number
    if (isNaN(quantity) || parseInt(quantity) <= 0) {
      return res.status(400).json({ error: 'Invalid quantity. Quantity must be a positive number.' });
    }

    // Find if the cart item already exists for the user and product
    let cartItem = await Cart.findOne({ user: userId, product: productId });

    if (!cartItem) {
      // If the item doesn't exist, create a new cart entry
      cartItem = new Cart({
        user: userId,
        product: productId,
        quantity: 0,
      });
    }

    // Update the quantity
    cartItem.quantity += parseInt(quantity);

    await cartItem.save();

    res.json({ message: 'Item added to cart successfully.', cartItemId: cartItem._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};


// Get Cart 

export const getCart = async(req,res)=> {
  try {
    const cartItems = await Cart.find()
    if(cartItems)
    res.status(200).json(cartItems)
    
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}

// Update Card By Using ID 
export const updateCart = async(req,res) => {
  try {
    const {id} = req.params
    const cartProduct =  await Cart.findByIdAndUpdate(id,req.body,{
      new:true
    })
    if(cartProduct)
    res.status(200).json(cartProduct)
    else {
      res.status(404).json({ message: "Unable to Update Cart With Id" });
    }
    
  } catch (error) {
    res.status(400).json({message:error.message})
    
  }
}

export const  deleteCart = async(req,res) => {
  try {
    const {id} = req.params
    const deleteCartProduct = await Cart.findByIdAndDelete(id,req.body, {
      new:true
    })
    if(deleteCartProduct)
    res.status(200).json(deleteCartProduct)
    else {
      res.status(404).json({message:"Unable to Delete Cart With Id "})
    }
    
  } catch (error) {
    res.status(400).json({message:error.message})
    
  }

}



























// export const addToCart = async (req, res) => {
//   try {
//     const { userId, productId, quantity } = req.body;

//     // if (!userId || !productId || !quantity) {
//     //   return res.status(400).json({ error: 'userId, productId, and quantity are required fields.' });
//     // }

//     // Create a new cart entry
//     const cartItem = new Cart({
//       user: userId,
//       product: productId,
//       quantity: quantity,
//     });

//     await cartItem.save();

//     res.json({ message: 'Item added to cart successfully.', cartItemId: cartItem._id });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error.' });
//   }
// };








// import * as cartService from '../services/cartServices.js';

// export const addToCart = async (req, res) => {
//   try {
//     const { userId, productId, quantity } = req.body;

//     const cartItem = await cartService.addToCart({ userId, productId, quantity });
    
//     res.json({ message: 'Item added to cart successfully.', cartItemId: cartItem._id });
//   } catch (error) {
//     console.error(error.message);
//     res.status(400).json({ error: error.message });
//   }
// };
