import type { TextareaHTMLAttributes } from "react";

type Props =
  TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({
  className = "",
  ...props
}: Props) {
  return (
    <textarea
      {...props}
      className={`w-full rounded-2xl border px-4 py-3 outline-none ${className}`}
    />
  );
}
