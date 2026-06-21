import express from "express";
import {
  analyzeSkillGap,
} from "../controllers/aiController";

const router =
  express.Router();

router.post(
  "/skill-gap",
  analyzeSkillGap
);

export default router;