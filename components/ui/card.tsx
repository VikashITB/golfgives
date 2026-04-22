import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = ""
}: CardProps) {
  return (
    <div
      className={`rounded-3xl border bg-white p-6 shadow-soft ${className}`}
    >
      {children}
    </div>
  );
}
