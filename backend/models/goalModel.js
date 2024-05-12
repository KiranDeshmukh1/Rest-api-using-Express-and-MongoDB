import mongoose from "mongoose";

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);

let Goal;
try {
  Goal = mongoose.model("goals");
} catch (error) {
  Goal = mongoose.model("goals", goalSchema);
}
export default Goal;
