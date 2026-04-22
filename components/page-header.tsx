type PageHeaderProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export default function PageHeader({
  eyebrow,
  title,
  text
}: PageHeaderProps) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
        {eyebrow}
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        {title}
      </h1>

      {text && (
        <p className="mt-3 max-w-2xl text-gray-600">
          {text}
        </p>
      )}
    </div>
  );
}
