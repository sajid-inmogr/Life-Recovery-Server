import express from "express";
import { createMaghrib, updateMaghrib } from "../controllers/maghrib.js";

const router = express.Router();

//CREATE
router.post("/", createMaghrib);

//UPDATE
router.put("/:id", updateMaghrib);

export default router;
