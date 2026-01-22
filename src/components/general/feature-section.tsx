import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import {
  ClipboardList,
  Ruler,
  Users,
  Receipt,
  BellRing,
  ShieldCheck,
} from "lucide-react";
import type React from "react";

type FeatureType = {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
};

export function FeatureSection() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-8 mt-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance font-medium text-2xl md:text-4xl lg:text-5xl">
          Built for Tailors. Ready for Business.
        </h2>
        <p className="mt-4 text-balance text-muted-foreground text-sm md:text-base ">
          Keep measurements, orders, customer history, and payments organized — no
          registers, no confusion, just a clean digital system.
        </p>
      </div>

      <div className="overflow-hidden rounded-lg border">
        <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard feature={feature} key={feature.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function FeatureCard({
  feature,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  feature: FeatureType;
}) {
  return (
    <div
      className={cn("relative overflow-hidden bg-background p-6", className)}
      {...props}
    >
      <div className="-mt-2 -ml-20 mask-[radial-gradient(farthest-side_at_top,white,transparent)] pointer-events-none absolute top-0 left-1/2 size-full">
        <GridPattern
          className="absolute inset-0 size-full stroke-foreground/20"
          height={40}
          width={40}
          x={5}
        />
      </div>

      <feature.icon
        aria-hidden
        className="size-6 text-foreground/75"
        strokeWidth={1}
      />

      <h3 className="mt-10 text-sm md:text-base">{feature.title}</h3>

      <p className="relative z-20 mt-2 font-light text-muted-foreground text-xs">
        {feature.description}
      </p>
    </div>
  );
}

const features: FeatureType[] = [
  {
    title: "Digital Order Book",
    icon: ClipboardList,
    description:
      "Save every order with design notes, delivery date, and status — all in one place.",
  },
  {
    title: "Measurements Saved",
    icon: Ruler,
    description:
      "Store customer measurements safely and reuse them anytime — never lose old records again.",
  },
  {
    title: "Customer History",
    icon: Users,
    description:
      "View repeat customer history instantly: past orders, measurements, and preferences.",
  },
  {
    title: "Accounts & Payments",
    icon: Receipt,
    description:
      "Track paid and pending payments with clarity so your daily accounts stay accurate.",
  },
  {
    title: "Delivery Reminders",
    icon: BellRing,
    description:
      "Stay on schedule with order due dates — reduce delays and keep customers happy.",
  },
  {
    title: "Secure & Reliable",
    icon: ShieldCheck,
    description:
      "Your tailoring data stays organized and protected, even when business gets busy.",
  },
];
