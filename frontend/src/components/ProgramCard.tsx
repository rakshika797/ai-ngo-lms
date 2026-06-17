
import Link from "next/link";
type Props = {
  title: string;
  students: number;
};

export default function ProgramCard({
  title,
  students,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow p-5">
      <h3 className="font-bold text-lg">
        {title}
      </h3>

      <p className="text-gray-500 mt-2">
        {students} Students
      </p>

      
      <Link
  href={`/ngo/programs/manage`}
  className="inline-block mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg"
>
  Manage
</Link>
    </div>
  );
}