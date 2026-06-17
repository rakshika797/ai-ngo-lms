"use client";

import { useEffect, useState } from "react";

import ProgramCard from "@/components/ProgramCard";

import { getPrograms } from "@/services/programService";

type Program = {
  id: number;
  name: string;
  description: string;
  duration: string;
  maxStudents: number;
};

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<
    Program[]
  >([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchPrograms =
      async () => {
        try {
          const data =
            await getPrograms();

          setPrograms(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    fetchPrograms();
  }, []);

  if (loading) {
    return (
      <div className="p-10">
        Loading Programs...
      </div>
    );
  }

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">
        Programs
      </h1>

      <div className="grid grid-cols-3 gap-6">
        {programs.map((program) => (
          <ProgramCard
            key={program.id}
            title={program.name}
            students={
              program.maxStudents
            }
          />
        ))}
      </div>
    </div>
  );
}