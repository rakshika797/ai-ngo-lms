import { Request, Response } from "express";
import prisma from "../lib/prisma";

export const createCertificate = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      studentId,
      programId,
    } = req.body;

    const certificate =
      await prisma.certificate.create({
        data: {
          studentId,
          programId,
        },
      });

    res.status(201).json({
      message:
        "Certificate created",
      certificate,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

export const getStudentCertificates =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const { studentId } =
        req.params;

      const certificates =
        await prisma.certificate.findMany({
          where: {
            studentId: Number(
              studentId
            ),
          },
          include: {
            program: true,
          },
          orderBy: {
            issuedAt: "desc",
          },
        });

      res.status(200).json(
        certificates
      );
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Server error",
      });
    }
  };

  export const getCertificateById =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const { id } = req.params;

      const certificate =
        await prisma.certificate.findUnique({
          where: {
            id: Number(id),
          },
          include: {
            student: true,
            program: true,
          },
        });

      if (!certificate) {
        return res.status(404).json({
          message:
            "Certificate not found",
        });
      }

      res.status(200).json(
        certificate
      );
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Server error",
      });
    }
  };