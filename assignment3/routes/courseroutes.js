import express from "express";
import { createCourse } from "../controllers/coursecontroller.js";
import { isAuth } from "../middleware/authmiddleware.js";
import { allowRoles } from "../middleware/rolemiddleware.js";
const router = express.Router();
router.post("/", isAuth, allowRoles("instructor"), createCourse);
export default router;