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

import { useAuth } from "@/context/AuthContext";

import { useEffect, useState } from "react";

import {
  getStudentEnrollments,
} from "@/services/enrollmentService";

export default function StudentPage() {
  const { user } = useAuth();

  const [enrollments, setEnrollments] =
    useState<any[]>([]);

  useEffect(() => {
    if (!user?.id) return;

    const fetchEnrollments =
      async () => {
        try {
          const data =
            await getStudentEnrollments(
              user.id
            );

          setEnrollments(data);
        } catch (error) {
          console.error(error);
        }
      };

    fetchEnrollments();
  }, [user]);

  

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
              value={
                enrollments.length.toString()
              }
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

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">
              My Programs
            </h2>

            <div className="grid grid-cols-3 gap-4">
              {enrollments.map(
                (enrollment) => (
                  <div
                    key={enrollment.id}
                    className="bg-white p-5 rounded-xl shadow"
                  >
                    <h3 className="font-bold">
                      {
                        enrollment.program
                          .name
                      }
                    </h3>

                    <p className="text-gray-500 mt-2">
                      Enrolled
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}