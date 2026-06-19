"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getApplications,
  updateApplicationStatus,
} from "@/services/applicationService";
import toast from "react-hot-toast";
type Application = {
  id: number;
  status: string;

  student: {
    name: string;
  };

  program: {
    name: string;
  };

  createdAt: string;
};

export default function ApplicationsPage() {
  const [
    applications,
    setApplications,
  ] = useState<Application[]>(
    []
  );

  const handleStatusUpdate =
  async (
    id: number,
    status: string
  ) => {
    try {
      await updateApplicationStatus(
        id,
        status
      );

      toast.success(
        `Application ${status}`
      );

      const updated =
        applications.map(
          (app) =>
            app.id === id
              ? {
                  ...app,
                  status,
                }
              : app
        );

      setApplications(
        updated
      );
    } catch (error) {
      console.error(error);

      toast.error(
        "Update failed"
      );
    }
  };

  useEffect(() => {
    const fetchApplications =
      async () => {
        const data =
          await getApplications();

        setApplications(data);
      };

    fetchApplications();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        Applications
      </h1>

      <table className="w-full bg-white rounded-xl shadow">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left">
              Student
            </th>

            <th className="p-4 text-left">
              Program
            </th>

            <th className="p-4 text-left">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {applications.map(
            (application) => (
              <tr
                key={
                  application.id
                }
                className="border-b"
              >
                <td className="p-4">
                  {
                    application
                      .student
                      .name
                  }
                </td>

                <td className="p-4">
                  {
                    application
                      .program
                      .name
                  }
                </td>

                <td className="p-4">
  <span className="font-medium">
    {application.status}
  </span>

  <div className="flex gap-2 mt-2">
    <button
      onClick={() =>
        handleStatusUpdate(
          application.id,
          "APPROVED"
        )
      }
      className="bg-green-500 text-white px-3 py-1 rounded"
    >
      Approve
    </button>

    <button
      onClick={() =>
        handleStatusUpdate(
          application.id,
          "REJECTED"
        )
      }
      className="bg-red-500 text-white px-3 py-1 rounded"
    >
      Reject
    </button>
  </div>
</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}