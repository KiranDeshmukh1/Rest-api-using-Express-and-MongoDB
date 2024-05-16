import asyncHandler from "express-async-handler";

import Goal from "../models/goalModel.js";
import { User } from "../models/userModel.js";
import mongoose from "mongoose";

//@desc Get goals
//@route GET /api/goals
//@access Private
export const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });

  res.status(200).json(goals);
});

//@desc Set goals
//@route POST /api/goals
//@access Private
export const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text");
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(goal);
});

//@desc update goals
//@route PUT /api/goals/:id
//@access Private

//PUT code
export const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const user = User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("Not Authorized");
  }

  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("Not Authorized");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

//@desc Delete goals
//@route DELETE /api/goals
//@access Private
export const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const user = await User.findById(req.user.id);

  if (!user) {
    console.log("inside usercheck");
    res.status(401);
    throw new Error("Not Authorized");
  }

  if (goal.user.toString() !== user.id) {
    console.log(goal.user.toString());
    console.log(user.id);
    res.status(401);
    throw new Error("Not Authorized");
  }

  await goal.deleteOne();
  res.status(200).json({ id: req.params.id });
});
