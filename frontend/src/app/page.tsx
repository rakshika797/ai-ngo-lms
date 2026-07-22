import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100">
      <h1 className="text-6xl font-bold text-purple-700">
        NGO LMS
      </h1>

      <p className="mt-4 text-xl text-gray-600">
        AI Powered Learning Management System
      </p>

      <div className="mt-10 flex gap-4">
        <Link
          href="/login"
          className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700"
        >
          Login
        </Link>

        <Link
          href="/register"
          className="border border-purple-600 text-purple-600 px-6 py-3 rounded-xl hover:bg-purple-100"
        >
          Register
        </Link>
      </div>
    </main>
  );
}