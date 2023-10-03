import express from "express";
const router = express.Router();

import { createUser, getAllUsers, updateSingleUser, deleteSingleUser } from "../controller/user.controller.js";

router.post("/user",createUser)
router.get("/user", getAllUsers)
router.put("/user/:id", updateSingleUser)
router.delete("/user/:id",deleteSingleUser)

export {router}