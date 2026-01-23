"use client";

import { ModeToggle } from "../general/toggle-button";

export default function FooterGlow() {
  return (
    <footer className="relative z-10 mt-8 w-full overflow-hidden pt-16 pb-8">
      <style jsx global>{`
        .glass {
          backdrop-filter: blur(3px) saturate(180%);
          background: radial-gradient(
            circle,
            #fff9 0%,
            #ffdce64d 60%,
            #f9f2f4 100%
          );
          border: 1px solid #ff96b41a;
          justify-content: center;
          align-items: center;
          transition: all 0.3s;
          display: flex;
        }
        .glass:where(.dark, .dark *) {
          display: flex;
          backdrop-filter: blur(2px) !important;
          background: radial-gradient(
            circle,
            #ffffff1a 0%,
            #1e00001a 60%,
            #2a0e0e 100%
          ) !important;
          border: 1px solid #ffffff0d !important;
          border-radius: 16px !important;
          justify-content: center !important;
          align-items: center !important;
        }
      `}</style>

      {/* glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-full w-full -translate-x-1/2 select-none">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-rose-600/20 blur-3xl" />
        <div className="absolute right-1/4 -bottom-24 h-80 w-80 rounded-full bg-rose-600/20 blur-3xl" />
      </div>

      <div className="glass relative mx-auto flex max-w-6xl flex-col items-center gap-8 rounded-2xl px-6 py-10 md:flex-row md:items-start md:justify-between md:gap-12">
        {/* left */}
        <div className="flex flex-col items-center md:items-start">
          <a href="#hero" className="mb-4 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-rose-700 text-2xl font-extrabold text-white shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </span>

            <span className="bg-gradient-to-br from-rose-200 to-rose-500 bg-clip-text text-xl font-semibold tracking-tight text-transparent">
              E-Tailoring
            </span>
          </a>

          <p className="text-foreground mb-6 max-w-xs text-center text-sm md:text-left">
            A complete digital system for tailors — save measurements, manage
            orders, and track payments with ease.
          </p>

          {/* simple contact row (no socials needed) */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-foreground/70 md:justify-start">
            <a href="mailto:hello@etailoring.app" className="hover:text-foreground transition">
              hello@etailoring.app
            </a>
            <span className="hidden md:inline text-foreground/40">•</span>
            <a href="#" className="hover:text-foreground transition">
              WhatsApp Demo
            </a>
          </div>
        </div>

        {/* right nav (minimal + professional) */}
        <nav className="flex w-full flex-col gap-9 text-center md:w-auto md:flex-row md:justify-end md:text-left">
          <div>
            <div className="mb-3 text-xs font-semibold tracking-widest text-rose-400 uppercase">
              App
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-foreground/70 hover:text-foreground transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-foreground/70 hover:text-foreground transition">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="text-foreground/70 hover:text-foreground transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-3 text-xs font-semibold tracking-widest text-rose-400 uppercase">
              Legal
            </div>
            <ul className="space-y-2">
              <li>
                <a href="/terms" className="text-foreground/70 hover:text-foreground transition">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="/privacy_policy" className="text-foreground/70 hover:text-foreground transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-3 text-xs font-semibold tracking-widest text-rose-400 uppercase">
              Support
            </div>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@etailoring.app" className="text-foreground/70 hover:text-foreground transition">
                  Contact Support
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition">
                  Request a Demo
                </a>


              </li>
                                                      <ModeToggle/>
            </ul>
          </div>
        </nav>
      </div>

      <div className="text-foreground relative z-10 mt-10 text-center text-xs">
        <span>&copy; {new Date().getFullYear()} E-Tailoring. All rights reserved.</span>
      </div>
      
    </footer>
  );
}
