import express from "express";
import { submitQuiz } from "../controllers/quizcontroller.js";
import { isAuth } from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/", isAuth, submitQuiz);

export default router;