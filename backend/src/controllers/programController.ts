import { Request, Response } from "express";
import prisma from "../lib/prisma";

export const createProgram = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      name,
      description,
      duration,
      maxStudents,
    } = req.body;

    const program = await prisma.program.create({
      data: {
        name,
        description,
        duration,
        maxStudents,
      },
    });

    res.status(201).json({
      message: "Program created",
      program,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
  
};
export const getPrograms = async (
  req: Request,
  res: Response
) => {
  try {
    const programs =
      await prisma.program.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });

    res.status(200).json(programs);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};