"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

type Props = {
  allowedRole: "ADMIN" | "NGO" | "STUDENT" | "VOLUNTEER";
  children: React.ReactNode;
};

export default function RoleProtectedRoute({
  allowedRole,
  children,
}: Props) {
  const { user, loading } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    if (!user) {
      router.replace("/login");
      return;
    }

    if (user.role !== allowedRole) {
      router.replace("/unauthorized");
    }
  }, [loading, user, allowedRole, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (!user) return null;

  if (user.role !== allowedRole) return null;

  return <>{children}</>;
}