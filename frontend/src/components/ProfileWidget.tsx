"use client";

import { useAuth } from "@/context/AuthContext";

export default function ProfileWidget() {
  const { user } = useAuth();

  return (
    <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-xl shadow">
      <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
        {user?.name?.charAt(0)}
      </div>

      <div>
        <p className="font-semibold">
          {user?.name}
        </p>

        <p className="text-sm text-gray-500">
          {user?.role}
        </p>
      </div>
    </div>
  );
}