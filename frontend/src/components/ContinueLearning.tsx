type Props = {
  enrollments: any[];
};

export default function ContinueLearning({
  enrollments,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-2xl font-bold mb-6">
        Enrolled Programs
      </h2>

      {enrollments.length === 0 ? (
        <p className="text-gray-500">
          No enrolled programs yet.
        </p>
      ) : (
        <div className="space-y-4">
          {enrollments.map((enrollment) => (
            <div
              key={enrollment.id}
              className="border rounded-lg p-4"
            >
              <h3 className="font-semibold">
                {enrollment.program.name}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Status: Enrolled
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}