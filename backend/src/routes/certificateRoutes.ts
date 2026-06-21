import express from "express";

import {
  createCertificate,
  getStudentCertificates,getCertificateById
} from "../controllers/certificateController";

const router =
  express.Router();

router.post(
  "/",
  createCertificate
);

router.get(
  "/student/:studentId",
  getStudentCertificates
);

router.get(
  "/:id",
  getCertificateById
);

export default router;