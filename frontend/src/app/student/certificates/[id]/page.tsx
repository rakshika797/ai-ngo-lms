"use client";

import {
  use,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  getCertificateById,
} from "@/services/certificateService";

export default function CertificatePage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = use(params);

  const [certificate, setCertificate] =
    useState<any>(null);

  const certificateRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchCertificate =
      async () => {
        try {
          const data =
            await getCertificateById(
              Number(id)
            );

          setCertificate(data);
        } catch (error) {
          console.error(error);
        }
      };

    fetchCertificate();
  }, [id]);

  const downloadPDF = async () => {
    if (!certificateRef.current)
      return;

    const html2canvas =
      (
        await import(
          "html2canvas"
        )
      ).default;

    const jsPDF =
      (
        await import(
          "jspdf"
        )
      ).default;

    const canvas =
  await html2canvas(
    certificateRef.current,
    {
      backgroundColor: "#ffffff",
      scale: 2,
      useCORS: true,
      logging: true,
    }
  );

    const imgData =
      canvas.toDataURL(
        "image/png"
      );

    const pdf =
      new jsPDF(
        "landscape",
        "mm",
        "a4"
      );

    const width =
      pdf.internal.pageSize.getWidth();

    const height =
      pdf.internal.pageSize.getHeight();

    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      width,
      height
    );

    pdf.save(
      `${certificate?.program?.name}-certificate.pdf`
    );
  };

  if (!certificate) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">

      <div
        ref={certificateRef}
        className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-4xl w-full border-8 border-gray-300"
      >
       <h1
         className="text-5xl font-bold mb-8"
          style={{ color: "#7c3aed" }}
        >
          Certificate of Completion
        </h1>

        <p className="text-xl">
          Presented To
        </p>

        <h2 className="text-5xl font-bold my-8">
          {certificate.student.name}
        </h2>

        <p className="text-xl">
          For Successfully Completing
        </p>

        <h3 className="text-4xl font-semibold my-8">
          {certificate.program.name}
        </h3>

        <p className="text-lg">
          Issued By
        </p>

        <p className="font-bold text-2xl mt-2">
          SkillSwap NGO LMS
        </p>

        <p className="mt-8 text-lg">
          Date:{" "}
          {new Date(
            certificate.issuedAt
          ).toLocaleDateString()}
        </p>

        <div className="flex justify-between mt-16">
          <div>
            <div className="border-t w-40 mx-auto"></div>
            <p className="mt-2">
              Program Manager
            </p>
          </div>

          <div>
            <div className="border-t w-40 mx-auto"></div>
            <p className="mt-2">
              NGO Director
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={downloadPDF}
        className="mt-8 bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700"
      >
        Download PDF
      </button>

    </div>
  );
}