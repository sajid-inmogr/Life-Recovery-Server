import express from "express";
import { createAsr, updateAsr } from "../controllers/asr.js";

const router = express.Router();

//CREATE
router.post("/", createAsr);

//UPDATE
router.put("/:id", updateAsr);

export default router;
