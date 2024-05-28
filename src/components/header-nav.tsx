"use client";
import React from "react";
import { NAV_LIST } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderNav() {
  const pathname = usePathname();
  return (
    <nav className="hidden items-center gap-6 md:flex">
      {NAV_LIST.map((item) => (
        <Link
          key={item.label + item.path}
          href={item.path}
          className={cn(
            " font-normal hover:text-primary transition-colors flex items-center",
            pathname === item.path ? "text-primary" : "text-muted-foreground",
          )}
        >
          <item.icon className="mr-2 size-4" />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
