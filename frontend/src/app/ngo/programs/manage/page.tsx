export default function ManageProgramPage() {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">

      <h1 className="text-4xl font-bold mb-8">
        Manage Program
      </h1>

      <div className="bg-white rounded-2xl shadow p-6">

        <h2 className="text-2xl font-bold">
          Web Development
        </h2>

        <p className="text-gray-500 mt-2">
          Duration: 12 Weeks
        </p>

        <p className="text-gray-500">
          Students Enrolled: 40
        </p>

        <div className="mt-6 flex gap-4">

          <button className="bg-blue-500 text-white px-5 py-2 rounded-lg">
            Edit
          </button>

          <button className="bg-red-500 text-white px-5 py-2 rounded-lg">
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}