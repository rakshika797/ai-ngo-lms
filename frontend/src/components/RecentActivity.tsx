type Props = {
  enrollments: any[];
  certificates: any[];
};

export default function RecentActivity({
  enrollments,
  certificates,
}: Props) {
  const activities = [
    ...enrollments.map((item) => ({
      id: `enroll-${item.id}`,
      text: (
        <>
          📚 Enrolled in{" "}
          <strong>{item.program.name}</strong>
        </>
      ),
      date: item.createdAt,
    })),

    ...certificates.map((item) => ({
      id: `certificate-${item.id}`,
      text: (
        <>
          🏆 Earned certificate for{" "}
          <strong>{item.program.name}</strong>
        </>
      ),
      date: item.issuedAt,
    })),
  ];

  activities.sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-xl font-bold mb-4">
        Recent Activity
      </h2>

      <div className="space-y-3">
        {activities.length > 0 ? (
          activities
            .slice(0, 5)
            .map((activity) => (
              <p key={activity.id}>
                {activity.text}
              </p>
            ))
        ) : (
          <p className="text-gray-500">
            No recent activity yet.
          </p>
        )}
      </div>
    </div>
  );
}