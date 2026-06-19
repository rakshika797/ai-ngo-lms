"use client";

import { use, useEffect, useState } from "react";
import {
  getProgramById,
  deleteProgram,
} from "@/services/programService";

import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type Program = {
  id: number;
  name: string;
  description: string;
  duration: string;
  maxStudents: number;
};

export default function ProgramPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const [program, setProgram] =
    useState<Program | null>(null);

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const data =
          await getProgramById(
            Number(id)
          );

        setProgram(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProgram();
  }, [id]);

  const handleDelete = async () => {
  try {
    await deleteProgram(
      Number(id)
    );

    toast.success(
      "Program deleted"
    );

    router.push(
      "/ngo/programs"
    );
  } catch (error) {
    console.error(error);

    toast.error(
      "Delete failed"
    );
  }
};

  if (!program) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

 return (
  <div className="p-10">
    <div className="flex justify-between items-center">
      <h1 className="text-4xl font-bold">
        {program.name}
      </h1>

      <div className="flex gap-4">
        <Link
          href={`/ngo/programs/${id}/edit`}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Edit
        </Link>

        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>

    <p className="mt-6">
      {program.description}
    </p>

    <p className="mt-4">
      Duration:
      {" "}
      {program.duration}
    </p>

    <p className="mt-2">
      Max Students:
      {" "}
      {program.maxStudents}
    </p>
  </div>
);
}