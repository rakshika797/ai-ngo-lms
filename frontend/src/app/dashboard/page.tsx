"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/DashboardLayout";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <h1 className="text-4xl font-bold">
          Welcome to NGO LMS 🚀
        </h1>

        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="border p-4 rounded-lg">
            Students
          </div>

          <div className="border p-4 rounded-lg">
            NGOs
          </div>

          <div className="border p-4 rounded-lg">
            Volunteers
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}