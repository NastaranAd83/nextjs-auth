"use client";

import { usePathname } from "next/navigation";
import type { Session } from "next-auth";

export default function AuthPanel({ session }: { session: Session | null }) {
  const pathname = usePathname();

  return (
    <div className="rounded-md border-t border-gray-200 bg-white p-4 text-sm shadow-sm">
      <p>Current path: {pathname}</p>
      <p>Auth status: {session ? "Logged in" : "Logged out"}</p>
    </div>
  );
}
