"use client";

import { useEffect, useState } from "react";

import {
  getApplications,
  updateApplicationStatus,
} from "@/services/applicationService";

export default function ApplicationTable() {
  const [applications, setApplications] = useState<any[]>([]);

  const fetchApplications = async () => {
    try {
      const data = await getApplications();
      setApplications(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleStatus = async (
    id: number,
    status: "APPROVED" | "REJECTED"
  ) => {
    try {
      await updateApplicationStatus(id, status);
      fetchApplications();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6 mt-10">
      <h2 className="text-2xl font-bold mb-6">
        Student Applications
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3">Name</th>
            <th className="text-left py-3">Program</th>
            <th className="text-left py-3">Status</th>
            <th className="text-left py-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {applications.length === 0 ? (
            <tr>
              <td
                colSpan={4}
                className="py-6 text-center text-gray-500"
              >
                No applications found.
              </td>
            </tr>
          ) : (
            applications.map((application) => (
              <tr
                key={application.id}
                className="border-b"
              >
                <td className="py-3">
                  {application.student.name}
                </td>

                <td className="py-3">
                  {application.program.name}
                </td>

                <td className="py-3">
                  <span
                    className={
                      application.status === "APPROVED"
                        ? "text-green-600 font-semibold"
                        : application.status === "REJECTED"
                        ? "text-red-600 font-semibold"
                        : "text-yellow-600 font-semibold"
                    }
                  >
                    {application.status}
                  </span>
                </td>

                <td className="py-3">
                  {application.status === "PENDING" ? (
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          handleStatus(
                            application.id,
                            "APPROVED"
                          )
                        }
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() =>
                          handleStatus(
                            application.id,
                            "REJECTED"
                          )
                        }
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Reject
                      </button>
                    </div>
                  ) : (
                    <span className="text-gray-500">
                      No Action
                    </span>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}