import express from "express";

import {
  getAllEnrollments,
  getStudentEnrollments,
} from "../controllers/enrollmentController";


const router =
  express.Router();

router.get("/", getAllEnrollments);

router.get(
  "/student/:studentId",
  getStudentEnrollments
);

export default router;