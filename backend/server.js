import express from "express";
import colors from "colors";
import { router as goalRoutes } from "./routes/goalRoutes.js";
import { router as userRoutes } from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import { connectDB } from "./config/db.js";

import { config as dotenv } from "dotenv";

dotenv();
connectDB();
const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
