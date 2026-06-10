import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import prisma from "../lib/prisma";
import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler";

export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { name, email, password, role } = req.body;

      // Check existing user
      const existingUser = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (existingUser) {
        return res.status(400).json({
          message: "User already exists",
        });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create user
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role,
        },
      });

      res.status(201).json({
        message: "User registered successfully",
        user,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        message: "Server Error",
      });
    }
  }
);

export const loginUser = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      // Find user
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (!user) {
        return res.status(400).json({
          message: "Invalid credentials",
        });
      }

      // Compare password
      const isPasswordCorrect = await bcrypt.compare(
        password,
        user.password
      );

      if (!isPasswordCorrect) {
        return res.status(400).json({
          message: "Invalid credentials",
        });
      }

      // Generate JWT
      const accessToken = jwt.sign(
        {
          id: user.id,
          role: user.role,
        },
        process.env.JWT_SECRET as string,
        {
          expiresIn: "15m",
        }
      );

      const refreshToken = jwt.sign(
        {
          id: user.id,
        },
        process.env.JWT_SECRET as string,
        {
          expiresIn: "7d",
        }
      );

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

     res.status(200).json({
  message: "Login successful",
  accessToken,
  user: {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  },
});
    } catch (error) {
      console.log(error);

      res.status(500).json({
        message: "Server Error",
      });
    }
  }
);

export const logoutUser = (
  req: Request,
  res: Response
) => {
  res.clearCookie("refreshToken");

  res.status(200).json({
    message: "Logged out successfully",
  });
};