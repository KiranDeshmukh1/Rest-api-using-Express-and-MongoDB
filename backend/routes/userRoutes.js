import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  registerUser,
  loginUser,
  getUser,
} from "../controllers/userController.js";

export const router = express.Router();
router.route("/").post(registerUser);
router.route("/login").post(loginUser);
router.get("/me", protect, getUser);
