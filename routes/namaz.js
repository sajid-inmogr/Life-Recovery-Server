import express from "express";
import { createNamaz, updateNamaz } from "../controllers/namaz.js";

const router = express.Router();

//CREATE
router.post("/", createNamaz);

//UPDATE
router.put("/:id", updateNamaz);

export default router;
