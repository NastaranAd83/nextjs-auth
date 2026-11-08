"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavLink({
  href,
  name,
  matchPattern,
}: {
  href: string;
  name: string;
  matchPattern?: string;
}) {
  const pathname = usePathname();
  const isActive = matchPattern
    ? pathname.includes(matchPattern)
    : pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "rounded-md px-3 py-2 text-sm",
        isActive && "bg-brand-primary text-white"
      )}
    >
      {name}
    </Link>
  );
}
