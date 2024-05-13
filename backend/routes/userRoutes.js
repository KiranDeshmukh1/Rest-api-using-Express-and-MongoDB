import express from "express";
import { registerUser } from "../controllers/userController.js";

export const router = express.Router();
router.route("/").post(registerUser);