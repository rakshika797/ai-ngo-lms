"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import ApplicationTable from "@/components/ApplicationTable";

export default function StudentsPage() {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />

        <main className="flex-1 p-8">
          <DashboardHeader />
          <ApplicationTable />
        </main>
      </div>
    </ProtectedRoute>
  );
}