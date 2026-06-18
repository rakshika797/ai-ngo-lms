"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { createProgram }
from "@/services/programService";
type ProgramFormData = {
  name: string;
  description: string;
  duration: string;
  maxStudents: number;
};

export default function CreateProgramPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<ProgramFormData>();

  const onSubmit = async (
  data: ProgramFormData
) => {
  try {
    await createProgram(data);

    toast.success(
      "Program created successfully"
    );

    reset();

    router.push("/ngo/programs");
  } catch (error) {
    console.error(error);

    toast.error(
      "Failed to create program"
    );
  }
};
  return (
    <div className="min-h-screen bg-gray-50 p-10">

      <h1 className="text-4xl font-bold mb-8">
        Create Program
      </h1>

      <div className="bg-white p-8 rounded-2xl shadow max-w-2xl">

        <form
         onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          <div>
            <label className="block mb-2 font-medium">
              Program Name
            </label>

            <input
              type="text"
               {...register("name")}
              className="w-full border rounded-lg p-3"
              placeholder="Enter program name"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Description
            </label>

           <textarea
  {...register("description")}
  className="w-full border rounded-lg p-3"
  rows={4}
  placeholder="Program description"
/>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Duration
            </label>

            <input
              type="text"
              className="w-full border rounded-lg p-3"
              placeholder="e.g. 12 Weeks"
              {...register("duration")}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Max Students
            </label>

            <input
              type="number"
               {...register("maxStudents")}
              className="w-full border rounded-lg p-3"
              placeholder="50"
            />
          </div>

          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-3 rounded-xl"
          >
            Create Program
          </button>

          
        </form>

      </div>
    </div>
  );
}