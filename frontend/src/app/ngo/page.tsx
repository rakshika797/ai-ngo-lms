"use client";


import NGOSidebar from "@/components/NGOSidebar";
import StatsCard from "@/components/StatsCard";
import ProgramCard from "@/components/ProgramCard";
import ApplicationTable from "@/components/ApplicationTable";
import Link from "next/dist/client/link";
import { useEffect, useState } from "react";

import { getPrograms } from "@/services/programService";
import { getApplications } from "@/services/applicationService";
import { getAllEnrollments } from "@/services/enrollmentService";
import { getAllCertificates } from "@/services/certificateService";
import LoadingScreen from "@/components/LoadingScreen";
import RoleProtectedRoute from "@/components/RoleProtectedRoute";

export default function NGOPage() {

  const [programs, setPrograms] =
    useState<any[]>([]);

  const [applications, setApplications] =
    useState<any[]>([]);

  const [enrollments, setEnrollments] =
    useState<any[]>([]);

  const [certificates, setCertificates] =
    useState<any[]>([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        setLoading(true);

        const [
          programsData,
          applicationsData,
          enrollmentsData,
          certificatesData,
        ] = await Promise.all([
          getPrograms(),
          getApplications(),
          getAllEnrollments(),
          getAllCertificates(),
        ]);

        console.log("Programs:", programsData);
        console.log("Applications:", applicationsData);
        console.log("Enrollments:", enrollmentsData);
        console.log("Certificates:", certificatesData);

        setPrograms(programsData);
        setApplications(applicationsData);
        setEnrollments(enrollmentsData);
        setCertificates(certificatesData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

if (loading) {
  return (
    <RoleProtectedRoute allowedRole="NGO">
      <LoadingScreen text="Loading Dashboard..." />
    </RoleProtectedRoute>
  );
}

 return (
  <RoleProtectedRoute allowedRole="NGO">
    <div className="flex bg-gray-50 min-h-screen">
      <NGOSidebar />

      <main className="flex-1 p-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">
              NGO Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              Manage programs and students
            </p>
          </div>

          <Link
            href="/ngo/programs/create"
            className="bg-purple-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-purple-700"
          >
            + Create Program
          </Link>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-8">
          <StatsCard
            title="Students"
            value={enrollments.length.toString()}
            color="bg-yellow-100"
          />

          <StatsCard
            title="Programs"
            value={programs.length.toString()}
            color="bg-purple-100"
          />

          <StatsCard
            title="Applications"
            value={applications.length.toString()}
            color="bg-pink-100"
          />

          <StatsCard
            title="Certificates"
            value={certificates.length.toString()}
            color="bg-blue-100"
          />
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            Active Programs
          </h2>

          <div className="grid grid-cols-3 gap-4">
            {programs.map((program) => (
              <ProgramCard
                key={program.id}
                id={program.id}
                title={program.name}
                students={program.maxStudents}
              />
            ))}
          </div>

          <ApplicationTable />
        </div>
      </main>
    </div>
  </RoleProtectedRoute>
);
}