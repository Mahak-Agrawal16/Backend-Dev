import express from "express";
import { createPatient } from "../controllers/patientcontroller.js";
import { isAuth } from "../middlewares/authmiddleware.js";
const router = express.Router();
router.post("/", isAuth, createPatient);
export default router;