import express from "express";
import { uploadRecord } from "../controllers/recordcontroller.js";
import { upload } from "../config/multer.js";
const router = express.Router();
router.post("/", upload.single("file"), uploadRecord);
export default router;