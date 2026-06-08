"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="p-10 text-3xl font-bold">
        Dashboard Page
      </div>
    </ProtectedRoute>
  );
}