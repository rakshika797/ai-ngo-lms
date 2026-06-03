import express from "express";

import {
  protect,
  AuthRequest,
} from "../middleware/authMiddleware";

const router = express.Router();

router.get(
  "/profile",
  protect,
  (req: AuthRequest, res) => {
    res.status(200).json({
      message: "Protected route accessed",
      user: req.user,
    });
  }
);

export default router;