import express from "express";
import goalRoutes from "./routes/goalRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

import { config as dotenv } from "dotenv";

dotenv();

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
