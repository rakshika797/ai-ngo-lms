import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const refreshAccessToken = (
  req: Request,
  res: Response
) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({
      message: "No refresh token",
    });
  }

  try {
    const decoded = jwt.verify(
      refreshToken,
      process.env.JWT_SECRET as string
    ) as any;

    const accessToken = jwt.sign(
      {
        id: decoded.id,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "15m",
      }
    );

    res.status(200).json({
      accessToken,
    });
  } catch (error) {
    res.status(403).json({
      message: "Invalid refresh token",
    });
  }
};