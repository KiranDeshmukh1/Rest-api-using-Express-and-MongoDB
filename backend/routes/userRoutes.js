import express from "express";
import {
  registerUser,
  loginUser,
  getUser,
} from "../controllers/userController.js";

export const router = express.Router();
router.route("/").post(registerUser);
router.route("/login").post(loginUser);
router.route("/me").get(getUser);
