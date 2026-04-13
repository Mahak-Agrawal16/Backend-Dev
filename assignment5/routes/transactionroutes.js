import express from "express";
import { transferMoney } from "../controllers/transactioncontroller.js";
import { isAuth } from "../middlewares/authmiddleware.js";
import { transferLimiter } from "../middlewares/ratelimiter.js";
const router = express.Router();
router.post("/transfer", isAuth, transferLimiter, transferMoney);
export default router;