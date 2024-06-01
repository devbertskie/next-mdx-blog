"use client";
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { NAV_LIST } from "@/constants";

interface MobileNavProps {
  onOpenChange: () => void;
}

export default function MobileNav({ onOpenChange }: MobileNavProps) {
  return (
    <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto py-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden">
      <div className="relative z-20  grid gap-6 rounded-md border border-secondary/80 bg-secondary p-4 text-popover-foreground shadow-md">
        {NAV_LIST.map((item) => (
          <MobileLink
            key={item.label + item.path}
            href={item.path}
            className="flex items-center"
            onOpenChange={onOpenChange}
          >
            <item.icon className="mr-2 size-4" />
            <span>{item.label}</span>
          </MobileLink>
        ))}
      </div>
    </div>
  );
}

interface MobileLinkProps extends LinkProps {
  children: ReactNode;
  onOpenChange?: () => void;
  className?: string;
}

const MobileLink = ({
  children,
  onOpenChange,
  className,
  href,
  ...props
}: MobileLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.();
      }}
      className={cn(
        "transition-colors hover:text-primary",
        pathname === href.toString() ? "text-primary" : "text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
