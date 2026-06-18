"use client";

import { use, useEffect, useState } from "react";
import { getProgramById } from "@/services/programService";

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

  if (!program) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">
        {program.name}
      </h1>

      <p className="mt-4">
        {program.description}
      </p>

      <p className="mt-2">
        Duration: {program.duration}
      </p>

      <p className="mt-2">
        Max Students: {program.maxStudents}
      </p>
    </div>
  );
}