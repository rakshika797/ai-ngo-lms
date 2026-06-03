import express from "express";

import {
  protect,
  authorizeRoles,
  AuthRequest,
} from "../middleware/authMiddleware";

const router = express.Router();

router.get(
  "/dashboard",
  protect,
  authorizeRoles("ADMIN"),
  (req: AuthRequest, res) => {
    res.status(200).json({
      message: "Welcome Admin",
      user: req.user,
    });
  }
);

export default router;