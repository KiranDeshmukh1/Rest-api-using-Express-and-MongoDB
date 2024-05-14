import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import { User } from "../models/userModel.js";

//@desc register new user
//@route POST /api/users
//@access Public
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already Exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@desc Authenticate new user (Login)
//@route POST /api/users/login
//@access Public
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const passwordCompare = bcrypt.compare(password, user.password);
  if (user && passwordCompare) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

//@desc get users data
//@route GET /api/users/me
//@access Private
export const getUser = asyncHandler(async (req, res) => {
  res.json({
    message: "User Data fetched",
  });
});
