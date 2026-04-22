type EmptyCardProps = {
  title: string;
};

export default function EmptyCard({
  title
}: EmptyCardProps) {
  return (
    <div className="rounded-3xl border bg-white p-8 text-center shadow-soft">
      <p className="font-semibold">{title}</p>
    </div>
  );
}
