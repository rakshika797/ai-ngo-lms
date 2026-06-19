"use client";

import {
  use,
  useEffect,
} from "react";

import {
  useForm,
} from "react-hook-form";

import {
  useRouter,
} from "next/navigation";

import toast from "react-hot-toast";

import {
  getProgramById,
  updateProgram,
} from "@/services/programService";

type ProgramFormData = {
  name: string;
  description: string;
  duration: string;
  maxStudents: number;
};

export default function EditProgramPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = use(params);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<ProgramFormData>();

  useEffect(() => {
    const fetchProgram =
      async () => {
        const data =
          await getProgramById(
            Number(id)
          );

        reset({
          name: data.name,
          description:
            data.description,
          duration:
            data.duration,
          maxStudents:
            data.maxStudents,
        });
      };

    fetchProgram();
  }, [id, reset]);

  const onSubmit = async (
    data: ProgramFormData
  ) => {
    try {
      await updateProgram(
        Number(id),
        data
      );

      toast.success(
        "Program updated"
      );

      router.push(
        `/ngo/programs/${id}`
      );
    } catch (error) {
      console.error(error);

      toast.error(
        "Update failed"
      );
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        Edit Program
      </h1>

      <form
        onSubmit={handleSubmit(
          onSubmit
        )}
        className="space-y-6 max-w-2xl"
      >
        <input
          {...register("name")}
          className="w-full border p-3 rounded"
          placeholder="Program Name"
        />

        <textarea
          {...register(
            "description"
          )}
          className="w-full border p-3 rounded"
          rows={4}
        />

        <input
          {...register(
            "duration"
          )}
          className="w-full border p-3 rounded"
        />

        <input
          type="number"
          {...register(
            "maxStudents"
          )}
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}