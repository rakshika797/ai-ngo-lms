import ProgramCard from "@/components/ProgramCard";

export default function ProgramsPage() {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">
        Programs
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <ProgramCard
          title="Web Development"
          students={40}
        />

        <ProgramCard
          title="Digital Literacy"
          students={30}
        />

        <ProgramCard
          title="Career Readiness"
          students={54}
        />
      </div>
    </div>
  );
}