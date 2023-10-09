import express from "express";
import mongoose from "mongoose";
import { router } from "./routes/userRoutes.js";
import { routes } from "./routes/productRoutes.js";
import {routers} from "./routes/cartRoutes.js"
import {rooters} from "./routes/orderRoutes.js"
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();


app.use(bodyParser.json());
// app.use(express.json());
app.use("/api",  router);
app.use("/api", routes);
app.use("/api",routers )
app.use("/api",rooters )

const dbConnection = process.env.mongoDB_URI;
const port = process.env.server_port;

mongoose.connect(dbConnection);
mongoose.connection.on("connected", () => {
  console.log("Database  connected");
});

app.listen(port, () => {
  console.log(`Server is working on port ${port}`);
});
