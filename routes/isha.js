import express from "express";
import { createIsha, updateIsha } from "../controllers/isha.js";

const router = express.Router();

//CREATE
router.post("/", createIsha);

//UPDATE
router.put("/:id", updateIsha);

export default router;
