"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

import { loginUser } from "@/services/authService";
import { useAuth } from "@/context/AuthContext";
type LoginFormData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await loginUser(data);

      login(
  response.accessToken,
  response.user.role,
  response.user.email,
  response.user.name
);

      toast.success("Login successful");

      reset();

      const role = response.user.role;

if (role === "ADMIN") {
  router.push("/admin");
} else if (role === "NGO") {
  router.push("/ngo");
} else if (role === "STUDENT") {
  router.push("/student");
} else if (role === "VOLUNTEER") {
  router.push("/volunteer");
} else {
  router.push("/dashboard");
}
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ||
          "Login failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-6 border rounded-lg shadow"
      >
        <h1 className="text-3xl font-bold mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="w-full border p-3 rounded mb-4"
        />

        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}