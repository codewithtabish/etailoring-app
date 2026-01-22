"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

export function Highlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-blue-500/10 p-1 py-0.5 font-bold text-blue-500",
        className,
      )}
    >
      {children}
    </span>
  );
}

export interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export function TestimonialCard({
  description,
  name,
  img,
  role,
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
        "border-border bg-card/50 border shadow-sm",
        "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
        className,
      )}
      {...props}
    >
      <div className="text-muted-foreground text-sm font-normal select-none">
        {description}
        <div className="flex flex-row py-1">
          <Star className="size-4 fill-blue-500 text-blue-500" />
          <Star className="size-4 fill-blue-500 text-blue-500" />
          <Star className="size-4 fill-blue-500 text-blue-500" />
          <Star className="size-4 fill-blue-500 text-blue-500" />
          <Star className="size-4 fill-blue-500 text-blue-500" />
        </div>
      </div>

      <div className="flex w-full items-center justify-start gap-5 select-none">
        <img
          width={40}
          height={40}
          src={img || "https://i.pravatar.cc/80?img=12"}
          alt={name}
          className="size-10 rounded-full object-cover ring-1 ring-blue-500/20 ring-offset-2"
          loading="lazy"
        />

        <div>
          <p className="text-foreground font-medium">{name}</p>
          <p className="text-muted-foreground text-xs font-normal">{role}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * ✅ Testimonials for YOUR app (E-Tailoring)
 * If you don’t have real user photos yet, these placeholder avatars are fine.
 */
const testimonials: TestimonialCardProps[] = [
  {
    name: "Haji Salman",
    role: "Tailor Shop Owner • Peshawar",
    img: "https://i.pravatar.cc/80?img=12",
    description: (
      <p>
        Before this, my customers’ old measurements used to get lost in the
        register.
        <Highlight> Now everything is saved properly in one place.</Highlight>{" "}
        Repeat orders have become much easier.
      </p>
    ),
  },
  {
    name: "Umar Khan",
    role: "Master Tailor • Lahore",
    img: "https://i.pravatar.cc/80?img=32",
    description: (
      <p>
        The digital order book is a lifesaver.
        <Highlight> I can store design notes, delivery dates, and status</Highlight>{" "}
        without confusion — no more wrong stitching instructions.
      </p>
    ),
  },
  {
    name: "Rizwan Ahmed",
    role: "Tailor & Manager • Karachi",
    img: "https://i.pravatar.cc/80?img=45",
    description: (
      <p>
        Payments and pending amounts are clear now.
        <Highlight> I don’t have to guess who paid and who didn’t.</Highlight>{" "}
        My daily accounts are finally organized.
      </p>
    ),
  },
  {
    name: "Shoaib",
    role: "Boutique Tailor • Islamabad",
    img: "https://i.pravatar.cc/80?img=18",
    description: (
      <p>
        Customers come after months and ask “meri purani naap tol?” —
        <Highlight> I pull it up instantly from the app.</Highlight> It saves time
        and looks professional.
      </p>
    ),
  },
  {
    name: "Ahsan",
    role: "Men’s Wear Tailor • Rawalpindi",
    img: "https://i.pravatar.cc/80?img=56",
    description: (
      <p>
        My shop handles many orders daily.
        <Highlight> This app reduced mistakes and improved delivery timing.</Highlight>{" "}
        Everything stays sorted by customer and due date.
      </p>
    ),
  },
  {
    name: "Faizan",
    role: "Tailoring Business Owner • Multan",
    img: "https://i.pravatar.cc/80?img=64",
    description: (
      <p>
        I used to rely on memory for customer history.
        <Highlight> Now I can see past orders and preferences anytime.</Highlight>{" "}
        Customers notice the difference.
      </p>
    ),
  },
  {
    name: "Arham",
    role: "Tailor • Faisalabad",
    img: "https://i.pravatar.cc/80?img=78",
    description: (
      <p>
        I love how simple it is.
        <Highlight> Add customer, save measurements, create order — done.</Highlight>{" "}
        No extra complicated steps.
      </p>
    ),
  },
  {
    name: "Bilal",
    role: "Tailor Shop Supervisor • Quetta",
    img: "https://i.pravatar.cc/80?img=22",
    description: (
      <p>
        We used to waste time finding records in registers.
        <Highlight> Now search is fast and everything is clean.</Highlight>{" "}
        It feels like a modern system.
      </p>
    ),
  },
  {
    name: "Naveed",
    role: "Tailor • Sialkot",
    img: "https://i.pravatar.cc/80?img=90",
    description: (
      <p>
        The best part is order tracking.
        <Highlight> I always know what’s pending, what’s ready, and what’s due.</Highlight>{" "}
        It keeps the shop disciplined.
      </p>
    ),
  },
  {
    name: "Adnan",
    role: "Traditional Tailor • Mardan",
    img: "https://i.pravatar.cc/80?img=41",
    description: (
      <p>
        I’m not very “tech” but this is easy.
        <Highlight> It replaced my register without any headache.</Highlight>{" "}
        Customers are happier because I’m more organized.
      </p>
    ),
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative container py-10">
      {/* Decorative elements */}
      <div className="absolute top-20 -left-20 z-10 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute -right-20 bottom-20 z-10 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-foreground mb-4 text-center text-4xl leading-[1.2] font-bold tracking-tighter md:text-5xl">
          Tailors Love E-Tailoring
        </h2>

        <h3 className="text-muted-foreground mx-auto mb-8 max-w-2xl text-center text-lg font-medium tracking-tight text-balance">
          Don&apos;t just take our word for it. Here&apos;s what{" "}
          <span className="bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent">
            real tailor shop owners
          </span>{" "}
          are saying about{" "}
          <span className="font-semibold text-blue-500">E-Tailoring</span>.
        </h3>
      </motion.div>

      <div className="relative mt-6 max-h-screen overflow-hidden">
        <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
          {Array(Math.ceil(testimonials.length / 3))
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  "[--duration:60s]": i === 1,
                  "[--duration:30s]": i === 2,
                  "[--duration:70s]": i === 3,
                })}
              >
                {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                  <motion.div
                    key={`${card.name}-${idx}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: Math.random() * 0.6,
                      duration: 1.0,
                    }}
                  >
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
              </Marquee>
            ))}
        </div>

        <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-20%" />
        <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-20%" />
      </div>
    </section>
  );
}
