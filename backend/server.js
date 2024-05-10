import express from "express";
import goalRoutes from "./routes/goalRoutes.js";

import { config as dotenv } from "dotenv";

dotenv();

const port = process.env.PORT;

const app = express();

app.use("/api/goals", goalRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
