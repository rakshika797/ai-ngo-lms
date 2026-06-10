"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function StudentPage() {
  return (
    <ProtectedRoute>
      <div className="p-8">
        <h1 className="text-4xl font-bold">
          Student Dashboard
        </h1>

        <p className="mt-4">
          Welcome Student 🚀
        </p>
      </div>
    </ProtectedRoute>
  );
}