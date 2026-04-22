type StatCardProps = {
  label: string;
  value: string | number;
};

export default function StatCard({
  label,
  value
}: StatCardProps) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-soft">
      <p className="text-sm text-gray-500">{label}</p>

      <p className="mt-2 text-3xl font-bold">
        {value}
      </p>
    </div>
  );
}
