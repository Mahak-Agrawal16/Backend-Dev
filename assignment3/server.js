import dotenv from "dotenv";
dotenv.config();
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { connectDB } from "./config/db.js";
import { sessionMiddleware } from "./config/session.js";
import authRoutes from "./routes/authroutes.js";
import courseRoutes from "./routes/courseroutes.js";
import quizRoutes from "./routes/quizroutes.js";
import messageRoutes from "./routes/messageroutes.js";
const app = express();
connectDB();
app.use(express.json());
app.use(helmet());
app.use(morgan("combined"));
app.use(sessionMiddleware);
app.use("/auth", authRoutes);
app.use("/courses", courseRoutes);
app.use("/quiz", quizRoutes);
app.use("/messages", messageRoutes);
app.get("/", (req, res) => {
  res.send("EduLearn Secure API 🚀");
});
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});