'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  TrendingUp,
  Gem,
  Trophy,
  Check,
  ArrowRight,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type Plan = {
  id: string;
  title: string;
  icon: React.ElementType;
  price: string;
  customers: string;
  support: string;
  renewal: string;
  note: string;
  cta: string;
  href?: string;
  popular?: boolean;
};

const plans: Plan[] = [
  {
    id: 'starter',
    title: 'Starter Plan',
    icon: Users,
    customers: 'Up to 1500 Customers',
    price: 'Rs. 15,000',
    support: '1-Year Free Support • Rs. 1,000/year',
    renewal: 'Renewal (Optional) • Rs. 1,000/year',
    note: 'Includes 2 feature updates per year and small fixes.',
    cta: 'Get Started',
    href: '#get-started',
  },
  {
    id: 'growth',
    title: 'Growth Plan',
    icon: TrendingUp,
    customers: 'One-Time 3000',
    price: 'Rs. 25,000',
    support: '1-Year Free Support • Rs. 1,000/year',
    renewal: 'Renewal (Optional) • Rs. 1,000/year',
    note: 'For growing tailor shops needing occasional updates.',
    cta: 'Choose Plan',
    href: '#choose-growth',
  },
  {
    id: 'premium',
    title: 'Premium Plan',
    icon: Gem,
    customers: 'Up to 4000',
    price: 'Rs. 30,000',
    support: '1-Year Free Support • Rs. 1,500/year',
    renewal: 'Renewal (Optional) • Rs. 2,000/year',
    note: 'Great for large tailoring businesses.',
    cta: 'Select Plan',
    href: '#select-premium',
    popular: true,
  },
  {
    id: 'enterprise',
    title: 'Enterprise Plan',
    icon: Trophy,
    customers: '4000+ Customers',
    price: 'Rs. 40,000',
    support: '1-Year Free Support • Rs. 2,000/year',
    renewal: 'Renewal (Optional) • Rs. 3,000/year',
    note: 'Includes priority support and new modules.',
    cta: 'Contact Sales',
    href: '#contact-sales',
  },
];

function FeatureRow({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-sm">
      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
        <Check className="h-3.5 w-3.5" />
      </span>
      <span className="text-muted-foreground leading-relaxed">{text}</span>
    </div>
  );
}

export default function TailorPricing() {
  return (
    <section
      id="pricing"
      className="relative w-full overflow-hidden px-4 py-20 sm:px-6"
    >
      {/* soft background like the screenshot */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-120px] h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute bottom-[-140px] left-[-120px] h-[360px] w-[360px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-[-160px] right-[-140px] h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-5 flex justify-center">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-emerald-600 text-white shadow-sm">
              <span className="text-sm font-semibold">E</span>
            </div>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Choose the Right Plan for Your Tailor Shop
          </h2>

          <p className="text-muted-foreground mt-3 text-sm sm:text-base">
            Lifetime access. Free first-year support. Optional updates every year.
          </p>

          <div className="mx-auto mt-4 h-1 w-44 rounded-full bg-emerald-600/60" />
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, i) => {
            const Icon = plan.icon;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                className="h-full"
              >
                <Card
                  className={cn(
                    'relative h-full overflow-hidden rounded-2xl border bg-background/70 shadow-sm backdrop-blur',
                    'transition-shadow hover:shadow-lg',
                    plan.popular
                      ? 'border-emerald-600/40 ring-2 ring-emerald-600/30'
                      : 'border-border/70',
                  )}
                >
                  {plan.popular && (
                    <div className="absolute right-4 top-4">
                      <Badge className="rounded-full bg-emerald-600 px-3 py-1 text-white shadow-sm">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className={cn('pb-4', plan.popular && 'pt-10')}>
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          'flex h-11 w-11 items-center justify-center rounded-xl',
                          plan.popular
                            ? 'bg-emerald-600/10 text-emerald-700 dark:text-emerald-300'
                            : 'bg-muted text-foreground',
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <CardTitle className="text-lg font-semibold">
                          {plan.title}
                        </CardTitle>
                        <p className="text-muted-foreground mt-1 text-sm">
                          {plan.customers}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="text-3xl font-extrabold tracking-tight">
                        {plan.price}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="grid gap-3 pb-6">
                    <FeatureRow text={plan.support} />
                    <FeatureRow text={plan.renewal} />
                    <div className="mt-1 border-t pt-4">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {plan.note}
                      </p>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-0">
                    <Button
                      className={cn(
                        'w-full rounded-full font-medium',
                        plan.popular
                          ? 'bg-emerald-600 text-white hover:bg-emerald-600/90'
                          : 'bg-emerald-600/10 text-emerald-700 hover:bg-emerald-600/15 dark:text-emerald-300',
                      )}
                      asChild
                    >
                      <a href={plan.href ?? '#'}>
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>

                  {/* subtle bottom glow */}
                  <div
                    className={cn(
                      'pointer-events-none absolute inset-x-0 bottom-0 h-24',
                      plan.popular
                        ? 'bg-gradient-to-t from-emerald-600/10 to-transparent'
                        : 'bg-gradient-to-t from-emerald-600/5 to-transparent',
                    )}
                  />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
