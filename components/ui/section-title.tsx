type SectionTitleProps = {
  label: string;
  title: string;
  center?: boolean;
};

export default function SectionTitle({
  label,
  title,
  center = false
}: SectionTitleProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
        {label}
      </p>

      <h2 className="mt-2 text-3xl font-bold">{title}</h2>
    </div>
  );
}
