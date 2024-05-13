import mongoose from "mongoose";

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);

// let Goal;
// try {
//   Goal = mongoose.model("goals");
// } catch (error) {
//   Goal = mongoose.model("goals", goalSchema);
// }

const Goal = mongoose.model("goals", goalSchema) || mongoose.model("goals");
export default Goal;
