"use client";

import { useAuth } from "@/context/AuthContext";

export default function DashboardHeader() {
  const { user } = useAuth();

  const today = new Date();

  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold">
          Good Evening, {user?.name} 👋
        </h1>

        <p className="text-gray-500">
          {today.toDateString()}
        </p>
      </div>
    </div>
  );
}