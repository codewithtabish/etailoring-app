'use client';

import * as React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Spotlight } from '@/components/ui/spotlight';
import { BorderBeam } from '@/components/ui/border-beam';
import { CardHoverEffect } from '@/components/ui/pulse-card';
import {
  Globe,
  Users,
  Heart,
  Lightbulb,
  Sparkles,
  Rocket,
  Target,
  Ruler,
  ClipboardList,
  Calculator,
  Clock,
  ShieldCheck,
} from 'lucide-react';

interface AboutUsProps {
  title?: string;
  subtitle?: string;
  mission?: string;
  vision?: string;
  values?: Array<{
    title: string;
    description: string;
    icon: keyof typeof iconComponents;
  }>;
  className?: string;
}

const iconComponents = {
  Users,
  Heart,
  Lightbulb,
  Globe,
  Sparkles,
  Rocket,
  Target,
  Ruler,
  ClipboardList,
  Calculator,
  Clock,
  ShieldCheck,
};

const defaultValues: AboutUsProps['values'] = [
  {
    title: 'Tailor-First Simplicity',
    description:
      'Built for real tailoring workflows — simple screens, fewer taps, and faster daily order handling.',
    icon: 'Users',
  },
  {
    title: 'Accuracy & Record Safety',
    description:
      'Measurements, designs, and order history stay organized and accessible — no lost registers, no confusion.',
    icon: 'ShieldCheck',
  },
  {
    title: 'On-Time Delivery',
    description:
      'Track statuses and due dates clearly so you reduce delays, manage workload, and keep customers happy.',
    icon: 'Clock',
  },
  {
    title: 'Business Growth',
    description:
      'Serve more customers professionally with cleaner operations, better follow-ups, and improved trust.',
    icon: 'Rocket',
  },
];

export default function AboutUs1() {
  const aboutData: Required<Pick<
    AboutUsProps,
    'title' | 'subtitle' | 'mission' | 'vision' | 'values'
  >> & { className: string } = {
    title: 'About E-Tailoring',
    subtitle:
      'A modern digital system for tailors to manage measurements, orders, delivery tracking, and accounts — all in one app.',
    mission:
      'Our mission is to make tailoring businesses faster, more organized, and more profitable by replacing paper registers with a reliable, tailor-friendly digital workflow.',
    vision:
      'We envision every tailor running a professional, digital shop — where customer records are never lost, delivery is always on time, and business growth becomes effortless.',
    values: defaultValues ?? [],
    className: 'relative overflow-hidden py-20',
  };

  const missionRef = useRef<HTMLDivElement | null>(null);
  const valuesRef = useRef<HTMLDivElement | null>(null);

  const missionInView = useInView(missionRef, { once: true, amount: 0.25 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.25 });

  return (
    <section className={['relative w-full overflow-hidden pt-20', aboutData.className].join(' ')}>
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(336, 100%, 50%, 0.08) 0, hsla(341, 100%, 55%, 0.04) 50%, hsla(336, 100%, 45%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(333, 100%, 85%, 0.08) 0, hsla(335, 100%, 55%, 0.04) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(332, 100%, 85%, 0.06) 0, hsla(327, 100%, 85%, 0.06) 80%, transparent 100%)"
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h1 className="from-foreground/80 via-foreground to-foreground/80 bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            {aboutData.title}
          </h1>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed sm:text-xl">
            {aboutData.subtitle}
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div ref={missionRef} className="relative mx-auto mb-24 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
            transition={{ duration: 0.75, delay: 0.15, ease: 'easeOut' }}
            className="relative z-10 grid gap-10 md:grid-cols-2"
          >
            {/* Mission */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group border-border/40 relative overflow-hidden rounded-2xl border bg-gradient-to-br p-10 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={8}
                size={320}
                className="via-primary/40 from-transparent to-transparent"
              />

              <div className="from-primary/20 to-primary/5 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br backdrop-blur-sm">
                <ClipboardList className="text-primary h-8 w-8" />
              </div>

              <div className="space-y-4">
                <h2 className="from-primary/90 to-primary/70 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent">
                  Our Mission
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {aboutData.mission}
                </p>

                <ul className="text-muted-foreground mt-6 grid gap-2 text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <Ruler className="mt-0.5 h-4 w-4 text-primary/80" />
                    Store customer measurements safely and find them instantly.
                  </li>
                  <li className="flex items-start gap-2">
                    <ClipboardList className="mt-0.5 h-4 w-4 text-primary/80" />
                    Manage orders clearly with designs, notes, and stitching details.
                  </li>
                  <li className="flex items-start gap-2">
                    <Calculator className="mt-0.5 h-4 w-4 text-primary/80" />
                    Track payments and balances without manual calculations.
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group border-border/40 relative overflow-hidden rounded-2xl border bg-gradient-to-br p-10 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={8}
                size={320}
                className="from-transparent via-blue-500/40 to-transparent"
                reverse
              />

              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 backdrop-blur-sm">
                <Target className="h-8 w-8 text-blue-500" />
              </div>

              <h2 className="mb-4 bg-gradient-to-r from-blue-500/90 to-blue-500/70 bg-clip-text text-3xl font-bold text-transparent">
                Our Vision
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {aboutData.vision}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="border-border/40 rounded-xl border bg-background/40 p-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <p className="text-sm font-semibold">Delivery Tracking</p>
                  </div>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Reduce delays with clear statuses and due dates.
                  </p>
                </div>
                <div className="border-border/40 rounded-xl border bg-background/40 p-4">
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-blue-500" />
                    <p className="text-sm font-semibold">Customer Trust</p>
                  </div>
                  <p className="text-muted-foreground mt-1 text-sm">
                    A professional system builds repeat customers.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values */}
        <div ref={valuesRef} className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-12 text-center"
          >
            <h2 className="from-foreground/80 via-foreground to-foreground/80 bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              Our Core Values
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base sm:text-lg">
              The principles that guide how we build E-Tailoring — focused on real
              shops, real customers, and real results.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {aboutData.values.map((value, index) => {
              const IconComponent = iconComponents[value.icon];

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 28 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08 + 0.15,
                    ease: 'easeOut',
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <CardHoverEffect
                    icon={<IconComponent className="h-6 w-6" />}
                    title={value.title}
                    description={value.description}
                    variant={index === 0 ? 'purple' : index === 1 ? 'blue' : index === 2 ? 'amber' : 'rose'}
                    glowEffect={true}
                    size="lg"
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
            className="mx-auto mt-14 max-w-3xl rounded-2xl border border-border/40 bg-background/40 p-8 text-center backdrop-blur"
          >
            <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold sm:text-2xl">
              Digital tailoring starts here.
            </h3>
            <p className="text-muted-foreground mx-auto mt-2 max-w-2xl">
              Replace registers with a smart workflow — store measurements, manage
              orders, track delivery, and handle accounts with confidence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
