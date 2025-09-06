// components/Button.tsx
import React from "react";
import Link from "next/link";
import clsx from "clsx";

type Variant = "default" | "outline";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  /** pass additional anchor props if needed */
  target?: string;
  rel?: string;
};

const base = "inline-flex items-center gap-2 px-4 py-2 rounded-2xl font-medium transition";
const styles: Record<Variant, string> = {
  default: "bg-accent text-black hover:opacity-95",
  outline: "border border-white/10 hover:bg-white/5",
};

export default function Button({ href, children, variant = "default", className, target, rel }: Props) {
  const classes = clsx(base, styles[variant], className);

  // Treat mailto/tel/http(s) as external and render a normal <a>
  const isExternal = typeof href === "string" && /^(https?:\/\/|mailto:|tel:)/i.test(href);

  if (isExternal) {
    // If no rel provided and target is _blank, add recommended rel
    const safeRel = rel ?? (target === "_blank" ? "noopener noreferrer" : undefined);
    return (
      <a href={href} className={classes} target={target} rel={safeRel}>
        {children}
      </a>
    );
  }

  // Internal link — cast href to any to avoid strict RouteImpl typing issues
  return (
    <Link href={href as any} className={classes} aria-label={typeof children === "string" ? children : undefined}>
      {children}
    </Link>
  );
}
