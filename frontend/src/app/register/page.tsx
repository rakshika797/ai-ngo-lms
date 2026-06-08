"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

import { registerUser } from "@/services/authService";
import { useAuth } from "@/context/AuthContext";

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  role: string;
};

export default function RegisterPage() {
  const { login } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<RegisterFormData>();

  const onSubmit = async (
    data: RegisterFormData
  ) => {
    try {
      await registerUser(data);

      toast.success("Registration successful");

      reset();

      router.push("/login");
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ||
          "Registration failed"
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
          Register
        </h1>

        <input
          type="text"
          placeholder="Name"
          {...register("name")}
          className="w-full border p-3 rounded mb-4"
        />

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

        <select
          {...register("role")}
          className="w-full border p-3 rounded mb-4"
        >
          <option value="">
            Select Role
          </option>

          <option value="STUDENT">
            Student
          </option>

          <option value="NGO">
            NGO
          </option>

          <option value="VOLUNTEER">
            Volunteer
          </option>
        </select>

        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
}