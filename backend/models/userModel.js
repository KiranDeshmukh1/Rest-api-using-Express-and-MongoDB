import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Input your Name"],
    },

    email: {
      type: String,
      required: [true, "Please Input your Email ID"],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "Please Input your password"],
    },
  },
  {
    timestamps: true,
  }
);

export const User =
  mongoose.model("users", userSchema) || mongoose.model("users");
