"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  const router = useRouter();

  const handleLogout = () => {
    logout();

    router.push("/login");
  };

  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <h1 className="text-2xl font-bold">
        NGO LMS
      </h1>

      <div className="flex gap-4">
        {!user ? (
          <>
            <Link href="/login">
              Login
            </Link>

            <Link href="/register">
              Register
            </Link>
          </>
        ) : (
          <>
            <Link href="/dashboard">
              Dashboard
            </Link>

            <button
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}