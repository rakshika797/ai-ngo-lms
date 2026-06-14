type Props = {
  title: string;
  value: string;
  color: string;
};

export default function StatsCard({
  title,
  value,
  color,
}: Props) {
  return (
    <div
      className={`rounded-2xl p-6 shadow ${color}`}
    >
      <h3 className="text-gray-700">
        {title}
      </h3>

      <p className="text-3xl font-bold mt-2">
        {value}
      </p>
    </div>
  );
}