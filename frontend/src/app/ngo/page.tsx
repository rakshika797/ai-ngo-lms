"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import NGOSidebar from "@/components/NGOSidebar";
import StatsCard from "@/components/StatsCard";
import ProgramCard from "@/components/ProgramCard";
import ApplicationTable from "@/components/ApplicationTable";
import Link from "next/dist/client/link";


export default function NGOPage() {
  return (
   
      <><div className="flex bg-gray-50 min-h-screen">
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
          value="124"
          color="bg-yellow-100" />

        <StatsCard
          title="Programs"
          value="8"
          color="bg-purple-100" />

        <StatsCard
          title="Volunteers"
          value="32"
          color="bg-pink-100" />

        <StatsCard
          title="Certificates"
          value="56"
          color="bg-blue-100" />
      </div><div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">
          Active Programs
        </h2>

        <div className="grid grid-cols-3 gap-4">
          <ProgramCard
            title="Web Development"
            students={40} />

          <ProgramCard
            title="Digital Literacy"
            students={30} />

          <ProgramCard
            title="Career Readiness"
            students={54} />
            <ApplicationTable />
        </div>
        </div>
      </main>
    </div>
      </>
    
  );
}