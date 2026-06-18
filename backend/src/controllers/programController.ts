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
        maxStudents: Number(maxStudents),
      },
    });

    res.status(201).json({
      message: "Program created",
      program,
    });
  } catch (error) {
  console.error(error);

  res.status(500).json({
    message: "Server error",
    error,
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

export const getProgramById = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;

    const program =
      await prisma.program.findUnique({
        where: {
          id: Number(id),
        },
      });

    if (!program) {
      return res.status(404).json({
        message: "Program not found",
      });
    }

    res.status(200).json(program);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

export const updateProgram = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;

    const {
      name,
      description,
      duration,
      maxStudents,
    } = req.body;

    const program =
      await prisma.program.update({
        where: {
          id: Number(id),
        },
        data: {
          name,
          description,
          duration,
          maxStudents: Number(
            maxStudents
          ),
        },
      });

    res.status(200).json({
      message:
        "Program updated successfully",
      program,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

export const deleteProgram = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;

    await prisma.program.delete({
      where: {
        id: Number(id),
      },
    });

    res.status(200).json({
      message:
        "Program deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};