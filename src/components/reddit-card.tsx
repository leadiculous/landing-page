"use client";

import Image from "next/image";
import { PropsWithChildren } from "react";

export type RedditCardProps = PropsWithChildren<{
  username: string;
  subreddit: string;
}>;

export function RedditCard({ username, subreddit, children }: RedditCardProps) {
  return (
    <div className="flex flex-col gap-2 bg-[#0d1012] p-4 rounded-lg">
      <div className="flex gap-4">
        <Image
          src="/reddit-avatar.png"
          alt="reddit avatar"
          width={24}
          height={24}
        />
        <div className="flex flex-col flex-1">
          <strong className="text-sm font-bold">{username}</strong>
          <p className="text-xs">{subreddit}</p>
        </div>
        <Image
          src="/reddit-logo.svg"
          alt="reddit logo"
          width={24}
          height={24}
        />
      </div>
      <div className="text-sm">{children}</div>
    </div>
  );
}
