import express from "express"
const routers = express.Router()
import {addToCart, getCart,deleteCart,updateCart} from "../controller/cartController.js"

routers.post("/addtocart", addToCart)
routers.get("/addtocart", getCart)
routers.put("/addtocart/:id",updateCart)
routers.delete("/addtocart/:id",deleteCart)

export {routers};





