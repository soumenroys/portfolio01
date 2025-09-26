// /components/Button.tsx
"use client";

import React from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "outline";

export type Props = {
  children: React.ReactNode;
  href?: string;
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
  variant = "secondary",
  className = "",
  buttonProps,
  anchorProps,
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black";
  const variants: Record<Variant, string> = {
    primary:
      "bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-md hover:shadow-lg hover:opacity-95",
    secondary: "bg-accent text-black hover:opacity-95",
    outline:
      "border border-white/20 text-sm text-slate-200 hover:bg-white/5 hover:border-accent",
  };

  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if (href) {
    const content =
      typeof children === "string" ? <span>{children}</span> : <span>{children}</span>;

    return (
      <Link
        href={href as any}
        className={classes}
        onClick={onClick}
        {...anchorProps}
      >
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
