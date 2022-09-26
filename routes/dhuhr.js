import express from "express";
import { createDhuhr, updateDhuhr } from "../controllers/dhuhr.js";

const router = express.Router();

//CREATE
router.post("/", createDhuhr);

//UPDATE
router.put("/:id", updateDhuhr);

export default router;
