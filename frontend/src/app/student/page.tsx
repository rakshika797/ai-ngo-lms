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
import {
  getStudentCertificates,
} from "@/services/certificateService";

import { useAuth } from "@/context/AuthContext";

import { useEffect, useState } from "react";

import {
  getStudentEnrollments,
} from "@/services/enrollmentService";

export default function StudentPage() {
  const { user } = useAuth();

  const [enrollments, setEnrollments] =
    useState<any[]>([]);
  const [certificates, setCertificates] =
    useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.id) return;

    const fetchData = async () => {
      try {
        setLoading(true);

        const [enrollmentData, certificateData] =
          await Promise.all([
            getStudentEnrollments(user.id),
            getStudentCertificates(user.id),
          ]);

        setEnrollments(enrollmentData);
        setCertificates(certificateData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

const progress = Math.min(
  enrollments.length * 20,
  100
);
if (loading) {
  return (
    <ProtectedRoute>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>

          <p className="mt-4 text-gray-600 font-medium">
            Loading dashboard...
          </p>
        </div>
      </div>
    </ProtectedRoute>
  );
}
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
              value={`${progress}%`}
              color="bg-purple-100"
            />

            <StatsCard
              title="Certificates"
              value={
                certificates.length.toString()
              }
              color="bg-pink-100"
            />

            <StatsCard
              title="Enrolled"
              value={enrollments.length.toString()}
              color="bg-blue-100"
            />
          </div>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <ContinueLearning
              enrollments={enrollments}
            />
            <RecentCertificates
              certificates={certificates}
            />
          </div>

          <div className="mt-8">
            <RecentActivity
              enrollments={enrollments}
              certificates={certificates}
            />
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