import type { SelectHTMLAttributes } from "react";

type Props =
  SelectHTMLAttributes<HTMLSelectElement>;

export default function Select({
  className = "",
  ...props
}: Props) {
  return (
    <select
      {...props}
      className={`h-12 w-full rounded-2xl border px-4 outline-none ${className}`}
    />
  );
}
