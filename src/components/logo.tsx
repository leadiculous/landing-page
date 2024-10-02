"use client";

import { cn } from "./lib/utils";

export type LogoProps = {
  as: "h1" | "h2" | "p";
};

export function Logo({ as, className }: LogoProps & { className?: string }) {
  const Component = as;

  return (
    <Component
      className={cn(
        "bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text font-bold text-transparent",
        className
      )}
    >
      Leadiculous
    </Component>
  );
}
