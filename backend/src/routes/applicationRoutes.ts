import express from "express";

import {
  applyToProgram,getApplications,updateApplicationStatus
} from "../controllers/applicationController";

const router =
  express.Router();

router.post(
  "/apply",
  applyToProgram
);

router.get(
  "/",
  getApplications
);

router.put(
  "/:id",
  updateApplicationStatus
);

export default router;