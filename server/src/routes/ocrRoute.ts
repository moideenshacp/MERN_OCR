import express from "express";
import { uploadImage } from "../controllers/ocrController";

const router = express.Router();

router.post("/extract-text", uploadImage);

export default router;
