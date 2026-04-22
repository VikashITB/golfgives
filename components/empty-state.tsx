type EmptyStateProps = {
  title: string;
  text: string;
};

export default function EmptyState({
  title,
  text
}: EmptyStateProps) {
  return (
    <div className="rounded-3xl border bg-white p-8 text-center shadow-soft">
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-gray-500">
        {text}
      </p>
    </div>
  );
}
