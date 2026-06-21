import { Request, Response } from "express";
import prisma from "../lib/prisma";

export const applyToProgram = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      studentId,
      programId,
    } = req.body;

    const application =
      await prisma.application.create({
        data: {
          studentId,
          programId,
        },
      });

    res.status(201).json({
      message:
        "Application submitted",
      application,
    });
  } catch (error) {
  console.error("APPLICATION ERROR:", error);

  res.status(500).json({
    message: "Server error",
    error,
  });
}
};

export const getApplications =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const applications =
        await prisma.application.findMany({
          include: {
            student: true,
            program: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        });

      res.status(200).json(
        applications
      );
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Server error",
      });
    }
  };

 export const updateApplicationStatus =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const { id } = req.params;

      const { status } =
        req.body;

      const application =
        await prisma.application.update({
          where: {
            id: Number(id),
          },
          data: {
            status,
          },
        });

      if (
        status === "APPROVED"
      ) {
        await prisma.enrollment.create({
          data: {
            studentId:
              application.studentId,
            programId:
              application.programId,
          },
        });
      }

      res.status(200).json({
        message:
          "Application updated",
        application,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Server error",
      });
    }
  };