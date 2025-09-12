// /components/Button.tsx
"use client";

import React from "react";
import Link from "next/link";

type Variant = "default" | "outline";

export type Props = {
  children: React.ReactNode;
  href?: string; // keep as string for easy use
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  variant?: Variant;
  className?: string;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  anchorProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
};

export default function Button({
  children,
  href,
  onClick,
  variant = "default",
  className = "",
  buttonProps,
  anchorProps,
}: Props) {
  const base =
    "inline-flex items-center gap-2 px-4 py-2 rounded-2xl font-medium transition";
  const variants: Record<Variant, string> = {
    default: "bg-accent text-black hover:opacity-95",
    outline: "border border-white/10 text-sm hover:bg-white/5",
  };

  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if (href) {
    // Link must have a single child element. Wrap children in a span if they might be multiple nodes.
    const content =
      typeof children === "string" ? <span>{children}</span> : <span>{children}</span>;

    return (
      <Link href={href as any} className={classes} onClick={onClick} {...anchorProps}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...buttonProps}>
      {children}
    </button>
  );
}
