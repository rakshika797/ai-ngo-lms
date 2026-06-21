"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

import {
  getStudentCertificates,
} from "@/services/certificateService";
import Link from "next/link";
type Certificate = {
  id: number;

  issuedAt: string;

  program: {
    name: string;
  };
};

export default function CertificatesPage() {
  const { user } = useAuth();

  const [
    certificates,
    setCertificates,
  ] = useState<Certificate[]>(
    []
  );

  useEffect(() => {
    if (!user?.id) return;

    const fetchCertificates =
      async () => {
        try {
          const data =
            await getStudentCertificates(
              user.id
            );

          setCertificates(data);
        } catch (error) {
          console.error(error);
        }
      };

    fetchCertificates();
  }, [user]);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        My Certificates
      </h1>

      <div className="grid grid-cols-3 gap-6">
  {certificates.map(
    (certificate) => (
      <Link
        key={certificate.id}
        href={`/student/certificates/${certificate.id}`}
      >
        <div
          className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition cursor-pointer"
        >
          <h2 className="font-bold text-lg">
            {certificate.program.name}
          </h2>

          <p className="text-gray-500 mt-2">
            Issued:
            {" "}
            {new Date(
              certificate.issuedAt
            ).toLocaleDateString()}
          </p>
        </div>
      </Link>
    )
  )}
</div>
    </div>
  );
}