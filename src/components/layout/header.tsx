"use client";

import { UserButton } from "@clerk/nextjs";
import { LinkIcon } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white border-b z-50">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LinkIcon className="h-6 w-6" />
          <span className="font-semibold">LINE Event</span>
        </div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
}