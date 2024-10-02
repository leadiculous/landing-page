"use client";

import { Send } from "lucide-react";
import { PropsWithChildren } from "react";

export type DMProps = PropsWithChildren;

export function DM({ children }: DMProps) {
  return (
    <div className="flex flex-col gap-2 bg-[#0d1012] p-4 rounded-lg">
      <strong className="text-sm">AI Generated Message</strong>
      <div className="text-sm">
        {children}
      </div>
      <div className="flex justify-between">
        <button className="hover:underline text-purple-500">Edit</button>
      <button className="bg-purple-500 text-white py-2 px-4 rounded-lg flex items-center w-fit gap-2 text-sm">
        <Send className="size-4" />
        Send
      </button>

      </div>
    </div>
  );
}
