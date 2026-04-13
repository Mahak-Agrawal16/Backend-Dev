import express from "express";
import { sendMessage } from "../controllers/messagecontroller.js";
import { isAuth } from "../middleware/authmiddleware.js";
const router = express.Router();
router.post("/", isAuth, sendMessage);
export default router;