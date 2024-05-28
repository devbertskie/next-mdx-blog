import React from "react";
import Link from "next/link";
import { Terminal } from "lucide-react";
import { siteConfig } from "@/config/site";
import HeaderNav from "@/components/header-nav";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 text-primary">
          <Terminal />
          <span className="hidden font-bold sm:inline-block ">
            {siteConfig.name}
          </span>
        </Link>
        <div className="flex items-center space-x-6">
          <HeaderNav />
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "text-muted-foreground bg-muted hover:bg-muted/80 hover:text-primary"
            )}
          >
            Collaborate
          </Link>
        </div>
      </div>
    </header>
  );
}
