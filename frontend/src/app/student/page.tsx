"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import Sidebar from "@/components/Sidebar";
import WelcomeBanner from "@/components/WelcomeBanner";
import StatsCard from "@/components/StatsCard";

export default function StudentPage() {
  return (
    <ProtectedRoute>
      <div className="flex bg-gray-50 min-h-screen">
        <Sidebar />

        <main className="flex-1 p-8">
          <WelcomeBanner />

          <div className="grid grid-cols-4 gap-4 mt-8">
            <StatsCard
              title="Courses"
              value="5"
            />

            <StatsCard
              title="Progress"
              value="77%"
            />

            <StatsCard
              title="Certificates"
              value="2"
            />

            <StatsCard
              title="Hours"
              value="12"
            />
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}