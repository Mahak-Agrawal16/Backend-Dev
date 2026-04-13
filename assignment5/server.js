import dotenv from "dotenv";
dotenv.config();
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import mongoSanitize from "express-mongo-sanitize";
import { connectDB } from "./config/db.js";
import { sessionMiddleware } from "./config/session.js";
import authRoutes from "./routes/authroutes.js";
import transactionRoutes from "./routes/transactionroutes.js";
import { errorHandler } from "./middlewares/errorhandler.js";
const app = express();
connectDB();
app.use(express.json());
app.use(helmet());
app.use(morgan("combined"));
app.use(mongoSanitize());
app.use(sessionMiddleware);
app.use("/auth", authRoutes);
app.use("/transactions", transactionRoutes);
app.use(errorHandler);
app.get("/", (req, res) => {
  res.send("QuickBank Secure API 💳");
});
app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});