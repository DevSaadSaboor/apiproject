import express from "express";
import mongoose from "mongoose";
import { router } from "../New folder/routes/user.routes.js";
import { routes } from "../New folder/routes/product.routes.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();


// app.use(bodyParser.json());
app.use(express.json());
app.use("/api", router);
app.use("/api", routes);

const dbConnection = process.env.mongoDB_URI;
const port = process.env.server_port;

mongoose.connect(dbConnection);
mongoose.connection.on("connected", () => {
  console.log("Database  connected");
});

app.listen(port, () => {
  console.log(`Server is working on port ${port}`);
});
