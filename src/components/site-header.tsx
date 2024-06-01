"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AlignLeft, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import HeaderNav from "@/components/header-nav";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/mobile-nav";
import { Icons } from "./icons";

export default function SiteHeader() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background px-2">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-3 text-primary">
            <Icons.logo className="size-12" />
            <span className="font-bold">{siteConfig.name}</span>
          </Link>
        </div>
        <div className="flex items-center space-x-5 md:space-x-6">
          <HeaderNav />
          <Button
            variant="ghost"
            className="p-0 text-primary hover:bg-transparent hover:text-primary md:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <>
              {isMobileOpen ? (
                <X className="size-6" />
              ) : (
                <AlignLeft className="size-6" />
              )}
              <span className="sr-only">Menu</span>
            </>
          </Button>
        </div>
      </div>
      {isMobileOpen && (
        <MobileNav onOpenChange={() => setIsMobileOpen(false)} />
      )}
    </header>
  );
}
