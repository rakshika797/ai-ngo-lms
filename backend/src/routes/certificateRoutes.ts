import express from "express";

import {
  createCertificate,
  getStudentCertificates,
  getCertificateById,
  getAllCertificates,
} from "../controllers/certificateController";

const router = express.Router();

router.post(
  "/",
  createCertificate
);

// Get all certificates (NGO Dashboard)
router.get(
  "/",
  getAllCertificates
);

// Get certificates of a specific student
router.get(
  "/student/:studentId",
  getStudentCertificates
);

// Get a single certificate
router.get(
  "/:id",
  getCertificateById
);

export default router;