import express from "express";
import { validate } from "../middleware/validate";
import {
  registerSchema,
  loginSchema,
} from "../validators/authValidators";
import { registerUser ,loginUser,} from "../controllers/authController";

const router = express.Router();

router.post("/register", validate(registerSchema), registerUser);
router.post("/login",validate(loginSchema) , loginUser);
export default router;