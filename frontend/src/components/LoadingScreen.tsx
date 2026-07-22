type Props = {
  text?: string;
};

export default function LoadingScreen({
  text = "Loading...",
}: Props) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center">
        <div className="h-12 w-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />

        <p className="mt-4 text-gray-600 font-medium">
          {text}
        </p>
      </div>
    </div>
  );
}