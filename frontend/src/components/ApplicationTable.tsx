export default function ApplicationTable() {
  const applications = [
    {
      name: "Rahul Sharma",
      program: "Web Development",
      status: "Pending",
    },
    {
      name: "Anjali Verma",
      program: "Digital Literacy",
      status: "Approved",
    },
    {
      name: "Priya Singh",
      program: "Career Readiness",
      status: "Pending",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-6 mt-10">
      <h2 className="text-2xl font-bold mb-6">
        Student Applications
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3">
              Name
            </th>

            <th className="text-left py-3">
              Program
            </th>

            <th className="text-left py-3">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {applications.map(
            (application, index) => (
              <tr
                key={index}
                className="border-b"
              >
                <td className="py-3">
                  {application.name}
                </td>

                <td className="py-3">
                  {application.program}
                </td>

                <td className="py-3">
                  {application.status}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}