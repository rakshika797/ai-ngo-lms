"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import Sidebar from "@/components/Sidebar";
import WelcomeBanner from "@/components/WelcomeBanner";
import StatsCard from "@/components/StatsCard";
import ContinueLearning from "@/components/ContinueLearning";
import RecentCertificates from "@/components/RecentCertificates";
import RecentActivity from "@/components/RecentActivity";
import DashboardHeader from "@/components/DashboardHeader";
import ProfileWidget from "@/components/ProfileWidget";

export default function StudentPage() {
  return (
    <ProtectedRoute>
      <div className="flex bg-gray-50 min-h-screen">
        <Sidebar />

        <main className="flex-1 p-8">
          <DashboardHeader />
          <ProfileWidget />
          <WelcomeBanner />

          <div className="grid grid-cols-4 gap-4 mt-8">
            <StatsCard
  title="Courses"
  value="5"
  color="bg-yellow-100"
/>

<StatsCard
  title="Progress"
  value="77%"
  color="bg-purple-100"
/>

<StatsCard
  title="Certificates"
  value="2"
  color="bg-pink-100"
/>

<StatsCard
  title="Hours"
  value="12"
  color="bg-blue-100"
/>

           
          </div>
          <div className="grid grid-cols-2 gap-6 mt-8">
  <ContinueLearning />
  <RecentCertificates />
</div>

<div className="mt-8">
  <RecentActivity />
</div>
        </main>
      </div>
    </ProtectedRoute>
  );
}