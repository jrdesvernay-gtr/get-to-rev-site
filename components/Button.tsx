import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "ghost-dark";
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: Props) {
  const base = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-red text-mist hover:bg-red-dark"
      : variant === "ghost-dark"
        ? "border border-mist/30 text-mist hover:border-mist"
        : "border border-line text-ink hover:border-ink";
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
