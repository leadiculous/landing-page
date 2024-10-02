"use client";

import { ChevronRight } from "lucide-react";

export function Banner() {
  return (
    <div className="relative top-0 bg-black py-3 text-white md:py-0 border-b border-white/20">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
        <a
          href="#get-early-access"
          className="group inline-flex items-center justify-center text-center text-sm leading-loose"
        >
          <span>🎉</span>
          <span className="font-bold ml-1">Get Early Access</span>{" "}
          <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}
