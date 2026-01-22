"use client";

import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { useScroll } from "@/hooks/use-scrool";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "../toggle-button";

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export function Header() {
  const scrolled = useScroll(10);

  return (
    <header
      className={cn("sticky top-0 z-50 w-full border-b border-transparent", {
        "border-border bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/50":
          scrolled,
      })}
    >
      <nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-accent"
          aria-label="Go to home"
        >
          <Image
            src="/logo.svg"
            alt="E-Tailoring Logo"
            width={120}
            height={32}
            priority
            className="h-8 w-auto"
          />
          {/* Optional: keep this if you want text next to logo */}
          <span className="hidden text-sm font-semibold tracking-tight text-foreground sm:inline">
            E-Tailoring
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              className={buttonVariants({ variant: "ghost" })}
              href={link.href}
              key={link.label}
            >
              {link.label}
            </Link>
          ))}

          <ModeToggle/>
          <Button variant="outline" asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>

          <Button asChild>
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <MobileNav />
      </nav>
    </header>
  );
}
