export default function ContinueLearning() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-2xl font-bold mb-6">
        Continue Learning
      </h2>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between">
            <span>JavaScript Basics</span>
            <span>75%</span>
          </div>

          <div className="h-2 bg-gray-200 rounded mt-2">
            <div className="h-2 bg-purple-500 rounded w-3/4"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <span>React Fundamentals</span>
            <span>60%</span>
          </div>

          <div className="h-2 bg-gray-200 rounded mt-2">
            <div className="h-2 bg-purple-500 rounded w-3/5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}