import { Request, Response } from "express";
import prisma from "../lib/prisma";

export const getStudentEnrollments =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const { studentId } =
        req.params;

      const enrollments =
        await prisma.enrollment.findMany({
          where: {
            studentId: Number(
              studentId
            ),
          },
          include: {
            program: true,
          },
        });

      res.status(200).json(
        enrollments
      );
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Server error",
      });
    }
  };