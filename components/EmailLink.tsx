"use client";

import { useState } from "react";
import { EMAIL } from "@/lib/constants";

interface Props {
  className?: string;
  /** Text to display. Defaults to the email address. */
  children?: React.ReactNode;
}

/**
 * Renders a mailto link that also copies the address to clipboard on click.
 * This ensures it works even when no default email client is configured.
 */
export default function EmailLink({ className, children }: Props) {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    try {
      navigator.clipboard.writeText(EMAIL).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    } catch {
      // clipboard unavailable — mailto href still fires normally
    }
  };

  return (
    <a href={`mailto:${EMAIL}`} onClick={handleClick} className={className}>
      {copied ? "Copied!" : (children ?? EMAIL)}
    </a>
  );
}
