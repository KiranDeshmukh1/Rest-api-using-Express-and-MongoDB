import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  registerUser,
  loginUser,
  getUser,
  getAllUser,
} from "../controllers/userController.js";

export const router = express.Router();
router.route("/").post(registerUser);
router.route("/login").post(loginUser);
router.get("/me", protect, getUser);
router.get("/all", getAllUser);
