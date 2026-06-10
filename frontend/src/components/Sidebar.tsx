"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  BookOpen,
  Award,
  User,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r min-h-screen p-6">
      <h1 className="text-3xl font-bold text-purple-600">
        NGO LMS
      </h1>

      <nav className="mt-10 space-y-4">
        <Link
          href="/student"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-100"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-100"
        >
          <BookOpen size={20} />
          My Courses
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-100"
        >
          <Award size={20} />
          Certificates
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-100"
        >
          <User size={20} />
          Profile
        </Link>

        <button
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-100 text-red-500 w-full"
        >
          <LogOut size={20} />
          Logout
        </button>
      </nav>
    </aside>
  );
}