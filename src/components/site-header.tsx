"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AlignRight, Terminal, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import HeaderNav from "@/components/header-nav";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MobileNav from "./mobile-nav";

export default function SiteHeader() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" asChild className="md:hidden">
            <>
              {isMobileOpen ? (
                <X
                  className="size-6 md:hidden"
                  onClick={() => setIsMobileOpen(!isMobileOpen)}
                />
              ) : (
                <AlignRight
                  className="size-6 md:hidden"
                  onClick={() => setIsMobileOpen(!isMobileOpen)}
                />
              )}
              <span className="sr-only">Menu</span>
            </>
          </Button>

          {!isMobileOpen && (
            <Link href="/" className="flex items-center space-x-3 text-primary">
              <Terminal />
              <span className="font-bold">{siteConfig.name}</span>
            </Link>
          )}
        </div>
        <div className="flex items-center space-x-5 md:space-x-6">
          <HeaderNav />
          <Link
            href="/collab"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "text-muted-foreground bg-muted hover:bg-muted/80 hover:text-primary"
            )}
          >
            Collaborate
          </Link>
        </div>
      </div>
      {isMobileOpen && (
        <MobileNav onOpenChange={() => setIsMobileOpen(false)} />
      )}
    </header>
  );
}
