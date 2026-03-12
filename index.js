

import express from "express";
import connectDb from "./Config/db.js";
import userRouter from "./Config/db.js";
import dotenv from "dotenv";
import bookRouter from "./routes/book.route.js";
dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectDb();
  console.log(`Our server is working at PORT :${PORT}`);
});

app.use("/api/authuser", userRouter);
app.use("/api/book", bookRouter);
