"use client";

import { type PropsWithChildren } from "react";
import { cn } from "./lib/utils";

export type LogoProps = PropsWithChildren<{
  as: "h1" | "h2";
}>;

export function Logo({
  as,
  children,
  className,
}: LogoProps & { className?: string }) {
  const Component = as;

  return (
    <Component
      className={cn(
        "bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text font-bold text-transparent",
        className
      )}
    >
      {children}
    </Component>
  );
}
