import express from "express";
import { createFajr, updateFajr } from "../controllers/fajr.js";

const router = express.Router();

//CREATE
router.post("/", createFajr);

//UPDATE
router.put("/:id", updateFajr);

export default router;
