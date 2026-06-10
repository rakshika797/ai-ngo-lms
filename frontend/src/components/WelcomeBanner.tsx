export default function WelcomeBanner() {
  return (
    <div className="bg-purple-100 rounded-3xl p-8 flex justify-between items-center">
      <div>
        <h1 className="text-4xl font-bold">
          Hi, Student 👋
        </h1>

        <p className="text-gray-600 mt-3">
          Ready to continue your learning journey?
        </p>
      </div>

      <div className="text-6xl">
        🚀
      </div>
    </div>
  );
}