"use client";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r p-4">
        <h2 className="text-2xl font-bold">
          NGO LMS
        </h2>

        <div className="mt-6 space-y-3">
          <p>Dashboard</p>
          <p>Courses</p>
          <p>Projects</p>
          <p>Profile</p>
        </div>
      </aside>

      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}