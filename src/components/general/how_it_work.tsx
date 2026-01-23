"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  UserPlus,
  Ruler,
  ClipboardList,
  Receipt,
  BellRing,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

type Step = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  bullets: string[];
  previewLabel: string;
};

const steps: Step[] = [
  {
    title: "Create Customer",
    description:
      "Add a customer in seconds and keep their details ready for every future order.",
    icon: UserPlus,
    bullets: ["Name & phone", "Optional notes", "Instant search anytime"],
    previewLabel: "Customer Profile",
  },
  {
    title: "Save Measurements & Order",
    description:
      "Store measurements safely and create orders with design notes and due dates — no more paper registers.",
    icon: Ruler,
    bullets: ["Full measurements", "Design & stitching notes", "Delivery date"],
    previewLabel: "Measurements + Order",
  },
  {
    title: "Track Delivery & Payments",
    description:
      "Stay on schedule and keep accounts clear with paid/pending tracking and order status.",
    icon: Receipt,
    bullets: ["Order status", "Due-date reminders", "Paid vs pending"],
    previewLabel: "Payments & Status",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, delay: 0.08 * i, ease: "easeOut" },
  }),
};

const floatIn = {
  hidden: { opacity: 0, y: 14, scale: 0.98, filter: "blur(8px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.75, delay: 0.1 * i, ease: "easeOut" },
  }),
};

export default function HowItWorksPro({
  className,
  images,
}: {
  className?: string;
  images?: {
    step1?: string;
    step2?: string;
    step3?: string;
  };
}) {
  const previews = [images?.step1, images?.step2, images?.step3];

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
        <div className="absolute -top-40 left-1/4 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-48 right-1/4 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="container">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div custom={0}
          // @ts-expect-error
           variants={fadeUp}>
            <Badge variant="secondary" className="mb-4">
              How it works
            </Badge>
          </motion.div>

          <motion.h2
            custom={1}
                      // @ts-expect-error

            variants={fadeUp}
            className="text-balance text-3xl font-semibold tracking-tight md:text-5xl"
          >
            Run your tailoring shop in a clean 3-step flow
          </motion.h2>

          <motion.p
            custom={2}
                      // @ts-expect-error

            variants={fadeUp}
            className="mt-4 text-balance text-muted-foreground md:text-lg"
          >
            E-Tailoring keeps measurements, orders, and payments organized — so
            you work faster, make fewer mistakes, and deliver on time.
          </motion.p>
        </motion.div>

        {/* Body */}
        <div className="mt-12 grid items-start gap-6 lg:grid-cols-12">
          {/* Left: Steps */}
          <div className="lg:col-span-7">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="grid gap-4"
            >
              {steps.map((s, i) => (
                <motion.div key={s.title} custom={i} 
                          // @ts-expect-error

                variants={floatIn}>
                  <StepCard step={s} index={i} />
                </motion.div>
              ))}
            </motion.div>

            {/* Benefits row */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground sm:justify-start"
            >
              <motion.div custom={0}
                        // @ts-expect-error

               variants={fadeUp} className="inline-flex items-center gap-2">
                <ClipboardList className="h-4 w-4 text-blue-500" aria-hidden />
                <span>Fewer order mistakes</span>
              </motion.div>
              <motion.div custom={1}
                        // @ts-expect-error

               variants={fadeUp} className="inline-flex items-center gap-2">
                <BellRing className="h-4 w-4 text-blue-500" aria-hidden />
                <span>Better delivery timing</span>
              </motion.div>
              <motion.div custom={2}
                        // @ts-expect-error

               variants={fadeUp} className="inline-flex items-center gap-2">
                <Receipt className="h-4 w-4 text-blue-500" aria-hidden />
                <span>Clear accounts</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Preview panel */}
          <div className="lg:col-span-5">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
                        // @ts-expect-error

              variants={floatIn}
              custom={0}
            >
              <PreviewPanel previews={previews} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: Step; index: number }) {
  return (
    <Card className="group relative overflow-hidden border bg-card/60 p-5 backdrop-blur supports-[backdrop-filter]:bg-card/40 md:p-6">
      {/* subtle gradient shine */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -top-24 left-1/3 h-64 w-64 rounded-full bg-blue-500/10 blur-2xl" />
        <div className="absolute -bottom-32 right-1/3 h-72 w-72 rounded-full bg-sky-500/10 blur-2xl" />
      </div>

      <div className="relative flex items-start gap-4">
        {/* icon */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border bg-background shadow-sm">
          <step.icon className="h-5 w-5 text-foreground/80" strokeWidth={1.6} aria-hidden />
        </div>

        {/* content */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold tracking-widest text-blue-500">
              STEP {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-1 w-1 rounded-full bg-foreground/20" />
            <h3 className="text-base font-semibold md:text-lg">{step.title}</h3>
          </div>

          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            {step.description}
          </p>

          <ul className="mt-4 grid gap-2 text-sm text-foreground/80">
            {step.bullets.map((b) => (
              <li key={b} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-500" aria-hidden />
                <span className="truncate">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 inline-flex items-center gap-2 text-xs text-foreground/70">
            <span className="rounded-full border bg-background px-2 py-1">
              {step.previewLabel}
            </span>
            <ArrowRight className="h-3.5 w-3.5 text-foreground/50" aria-hidden />
            <span className="text-muted-foreground">Ready in seconds</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

function PreviewPanel({ previews }: { previews: (string | undefined)[] }) {
  return (
    <Card className="relative overflow-hidden border bg-card/60 p-4 backdrop-blur supports-[backdrop-filter]:bg-card/40 md:p-6">
      <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-28 -bottom-28 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">Inside the app</p>
          <p className="truncate text-xs text-muted-foreground">
            A quick look at the screens tailors use daily
          </p>
        </div>
        <Badge variant="outline" className="text-xs">
          E-Tailoring
        </Badge>
      </div>

      <div className="relative mt-5 grid gap-4 sm:grid-cols-3">
        <MotionPreviewCard
          i={0}
          title="Customer"
          subtitle="Profile & History"
          img={previews[0]}
        />
        <MotionPreviewCard
          i={1}
          title="Measurements"
          subtitle="Saved sizes"
          img={previews[1]}
        />
        <MotionPreviewCard
          i={2}
          title="Payments"
          subtitle="Paid / Pending"
          img={previews[2]}
        />
      </div>

      <p className="relative mt-5 text-xs text-muted-foreground">
        Replace placeholders with your real screenshots when ready.
      </p>
    </Card>
  );
}

function MotionPreviewCard({
  i,
  title,
  subtitle,
  img,
}: {
  i: number;
  title: string;
  subtitle: string;
  img?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: 0.08 * i, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl border bg-background shadow-sm"
    >
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
                Pass <span className="font-mono">images.step{i + 1}</span>
              </p>
            </div>
          </div>
        )}

        {/* hover shine */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute -top-16 left-1/2 h-40 w-56 -translate-x-1/2 rounded-full bg-blue-500/10 blur-2xl" />
        </div>
      </div>
    </motion.div>
  );
}
