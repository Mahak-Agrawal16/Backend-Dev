import dotenv from "dotenv";
dotenv.config();
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import mongoSanitize from "express-mongo-sanitize";
import { connectDB } from "./config/db.js";
import { sessionMiddleware } from "./config/session.js";
import authRoutes from "./routes/authroutes.js";
import patientRoutes from "./routes/patientroutes.js";
import appointmentRoutes from "./routes/appointmentroutes.js";
import recordRoutes from "./routes/recordroutes.js";
const app = express();
connectDB();
app.use(express.json());
app.use(helmet());
app.use(morgan("combined"));
app.use(mongoSanitize());
app.use(sessionMiddleware);
app.use("/auth", authRoutes);
app.use("/patients", patientRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/records", recordRoutes);
app.get("/", (req, res) => {
  res.send("MediBook Secure API 🏥");
});
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});