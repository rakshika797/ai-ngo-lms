import express from "express";

import {
  getStudentEnrollments,
} from "../controllers/enrollmentController";

const router =
  express.Router();

router.get(
  "/student/:studentId",
  getStudentEnrollments
);

export default router;