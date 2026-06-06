import express from "express";
import { validate } from "../middleware/validate";
import {
  registerSchema,
  loginSchema,
} from "../validators/authValidators";
import { registerUser ,loginUser, logoutUser,} from "../controllers/authController";
import { refreshAccessToken } from "../controllers/refreshController";

const router = express.Router();

router.post("/register", validate(registerSchema), registerUser);
router.post("/login",validate(loginSchema) , loginUser);
router.post("/refresh", refreshAccessToken);
router.post("/logout", logoutUser);
export default router;