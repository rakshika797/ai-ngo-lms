import express from "express";
import { createProgram,  getPrograms, } from "../controllers/programController";

const router = express.Router();

router.post("/", createProgram);
router.get("/", getPrograms);

export default router;