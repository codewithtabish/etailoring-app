'use client';

import * as React from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { MenuIcon, XIcon } from 'lucide-react';

import { Button, buttonVariants } from '@/components/ui/button';
import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';

import { navLinks } from './navbar';
import { ModeToggle } from '../toggle-button';

type NavLink = {
  label: string;
  href: string;
};

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const { isMobile } = useMediaQuery();
  const [mounted, setMounted] = React.useState(false);

  // Prevent SSR/portal mismatch
  React.useEffect(() => setMounted(true), []);

  // Close menu when switching out of mobile breakpoint
  React.useEffect(() => {
    if (!isMobile) setOpen(false);
  }, [isMobile]);

  // Disable body scroll when open (mobile only)
  React.useEffect(() => {
    if (!mounted) return;

    const prevOverflow = document.body.style.overflow;
    if (open && isMobile) document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open, isMobile, mounted]);

  // ESC to close
  React.useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const links = (navLinks as NavLink[]) ?? [];

  return (
    <>
      <Button
        aria-controls="mobile-menu"
        aria-expanded={open}
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="md:hidden"
        onClick={() => setOpen((v) => !v)}
        size="icon"
        variant="outline"
      >
        {open ? <XIcon className="size-4.5" /> : <MenuIcon className="size-4.5" />}
      </Button>

      {mounted &&
        open &&
        createPortal(
          <div
            className={cn(
              // Backdrop + layout
              'fixed inset-0 z-50 md:hidden',
              'bg-background/80 backdrop-blur-sm supports-[backdrop-filter]:bg-background/50',
            )}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Click outside to close */}
            <button
              type="button"
              className="absolute inset-0 cursor-default"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <div
              id="mobile-menu"
              className={cn(
                'absolute right-0 top-0 h-dvh w-full',
                'border-l border-border/40 bg-background shadow-xl',
                'flex flex-col',
                'animate-in slide-in-from-right duration-200',
              )}
            >
              {/* Top bar (keeps header feel) */}
              <div className="flex items-center justify-between border-b border-border/40 px-4 py-3">
                <span className="text-sm font-medium">Menu</span>
                <Button
                  aria-label="Close menu"
                  size="icon"
                  variant="ghost"
                  onClick={() => setOpen(false)}
                >
                  <XIcon className="size-5" />
                </Button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto px-4 py-4">
                <nav className="grid gap-1">
                  {links.map((link) => (
                    <Link
                      key={link.href ?? link.label}
                      href={link.href}
                      className={buttonVariants({
                        variant: 'ghost',
                        className: cn(
                          'w-full justify-start text-base',
                          'px-3 py-6',
                        ),
                      })}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-8 grid gap-2">
                  <Button className="w-full" variant="outline" onClick={() => setOpen(false)}>
                    Sign In
                  </Button>
                  <Button className="w-full" onClick={() => setOpen(false)}>
                    Get Started
                  </Button>

                  <div className="pt-2">
                    {/* <ModeToggle /> */}
                  </div>
                </div>
              </div>

              {/* Safe-area bottom padding */}
              <div className="h-[max(16px,env(safe-area-inset-bottom))]" />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
