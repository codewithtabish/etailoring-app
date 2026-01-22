"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  UserPlus,
  Ruler,
  ClipboardList,
  BellRing,
  Receipt,
  CheckCircle2,
} from "lucide-react";

type Step = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  bullets: string[];
};

const steps: Step[] = [
  {
    title: "Add Customer",
    description:
      "Create a customer profile in seconds and keep everything organized from day one.",
    icon: UserPlus,
    bullets: ["Name & phone", "Optional notes", "Instant search later"],
  },
  {
    title: "Save Measurements & Create Order",
    description:
      "Store measurements safely and create an order with design notes and delivery date.",
    icon: Ruler,
    bullets: ["Full measurements", "Design / stitching notes", "Delivery date"],
  },
  {
    title: "Track Delivery & Payments",
    description:
      "Stay on schedule with due dates and keep accounts clear with paid/pending tracking.",
    icon: Receipt,
    bullets: ["Order status", "Due date reminders", "Paid vs pending"],
  },
];

export default function HowItWorksSection({
  className,
  images,
}: {
  className?: string;
  images?: {
    step1?: string; // customer screen
    step2?: string; // measurements/order screen
    step3?: string; // payments screen
  };
}) {
  return (
    <section
      id="how-it-works"
      className={cn("relative w-full overflow-hidden py-16 md:py-24", className)}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/70" />
        <GridPattern
          className="absolute inset-0 size-full stroke-foreground/10"
          width={48}
          height={48}
          x={6}
        />
        <div className="absolute -top-32 left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="container">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-4">
            How it works
          </Badge>

          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            From customer to delivery — in 3 simple steps
          </h2>

          <p className="mt-4 text-balance text-muted-foreground md:text-lg">
            E-Tailoring helps you store measurements, manage orders, and track
            payments with a smooth workflow that any tailor can use.
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 grid items-start gap-6 lg:grid-cols-12">
          {/* Left: Steps */}
          <div className="lg:col-span-6">
            <div className="grid gap-4">
              {steps.map((step, idx) => (
                <Card
                  key={step.title}
                  className={cn(
                    "relative overflow-hidden p-5 md:p-6",
                    "border bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/40",
                  )}
                >
                  {/* subtle top glow */}
                  <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-2xl" />

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border bg-background">
                      <step.icon
                        className="h-5 w-5 text-foreground/80"
                        strokeWidth={1.6}
                        aria-hidden
                      />
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-semibold tracking-widest text-blue-500">
                          STEP {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-foreground/20" />
                        <h3 className="text-base font-semibold md:text-lg">
                          {step.title}
                        </h3>
                      </div>

                      <p className="mt-2 text-sm text-muted-foreground md:text-base">
                        {step.description}
                      </p>

                      <ul className="mt-4 grid gap-2 text-sm text-foreground/80">
                        {step.bullets.map((b) => (
                          <li key={b} className="flex items-center gap-2">
                            <CheckCircle2
                              className="h-4 w-4 text-blue-500"
                              aria-hidden
                            />
                            <span className="truncate">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Micro CTA */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-center text-sm text-muted-foreground sm:justify-start">
              <div className="inline-flex items-center gap-2">
                <ClipboardList className="h-4 w-4 text-blue-500" aria-hidden />
                <span>Less mistakes in orders</span>
              </div>
              <span className="hidden sm:inline text-foreground/20">•</span>
              <div className="inline-flex items-center gap-2">
                <BellRing className="h-4 w-4 text-blue-500" aria-hidden />
                <span>Better delivery timing</span>
              </div>
              <span className="hidden sm:inline text-foreground/20">•</span>
              <div className="inline-flex items-center gap-2">
                <Receipt className="h-4 w-4 text-blue-500" aria-hidden />
                <span>Clear payments</span>
              </div>
            </div>
          </div>

          {/* Right: Preview / Images */}
          <div className="lg:col-span-6">
            <Card className="relative overflow-hidden border bg-card/60 p-4 backdrop-blur supports-[backdrop-filter]:bg-card/40 md:p-6">
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">Inside the app</p>
                  <p className="text-xs text-muted-foreground">
                    Quick look at key screens
                  </p>
                </div>
                <Badge variant="outline" className="text-xs">
                  E-Tailoring
                </Badge>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <PreviewCard
                  title="Customer"
                  subtitle="Profile & History"
                  img={images?.step1}
                />
                <PreviewCard
                  title="Measurements"
                  subtitle="Saved sizes"
                  img={images?.step2}
                />
                <PreviewCard
                  title="Payments"
                  subtitle="Paid / Pending"
                  img={images?.step3}
                />
              </div>

              <p className="mt-5 text-xs text-muted-foreground">
                Tip: Replace the placeholders with your real screenshots when
                ready.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function PreviewCard({
  title,
  subtitle,
  img,
}: {
  title: string;
  subtitle: string;
  img?: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl border bg-background">
      <div className="flex items-center justify-between border-b px-3 py-2">
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold">{title}</p>
          <p className="truncate text-[11px] text-muted-foreground">{subtitle}</p>
        </div>
        <div className="h-2 w-2 rounded-full bg-blue-500/50" />
      </div>

      <div className="relative aspect-[9/16] w-full overflow-hidden">
        {img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={img}
            alt={`${title} screen`}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted/30">
            <div className="px-4 text-center">
              <p className="text-xs font-medium text-foreground/80">
                Screenshot placeholder
              </p>
              <p className="mt-1 text-[11px] text-muted-foreground">
                Pass <span className="font-mono">images.step*</span> props
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
