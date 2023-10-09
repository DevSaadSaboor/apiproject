import express from "express"
const routes = express.Router()

import { creatProduct, getAllProducts, updateSingleProduct, deleteSingleProduct } from "../controller/productController.js"

routes.post("/product", creatProduct)
routes.get("/product", getAllProducts)
routes.put("/products/:id", updateSingleProduct)
routes.delete("/products/:id", deleteSingleProduct)


export { routes }

