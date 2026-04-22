import type { ReactNode } from "react";

type SectionShellProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionShell({
  children,
  className = ""
}: SectionShellProps) {
  return (
    <section className={`container py-16 ${className}`}>
      {children}
    </section>
  );
}
