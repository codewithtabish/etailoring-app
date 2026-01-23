'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { PlusIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion';

const items = [
  {
    id: '1',
    title: 'What is E-Tailoring and who is it for?',
    content:
      'E-Tailoring is a complete digital management system designed specifically for tailors and tailoring shop owners. It helps you manage customer records, measurements, orders, delivery dates, and accounts — all from one simple app.',
  },
  {
    id: '2',
    title: 'How does E-Tailoring replace manual registers?',
    content:
      'E-Tailoring completely eliminates paper registers. Customer measurements, order details, designs, and history are stored securely and can be accessed instantly anytime, reducing errors and saving valuable time.',
  },
  {
    id: '3',
    title: 'What key problems does this app solve for tailors?',
    content:
      'The app solves common tailoring problems such as lost measurements, incorrect order entries, missed delivery dates, and difficulty managing multiple customers. Everything stays organized and easy to track.',
  },
  {
    id: '4',
    title: 'What features are included in the E-Tailoring system?',
    content:
      'Core features include a Digital Order Book, Customer Measurement Profiles, Order Status & Delivery Tracking, and Accounts & Payment Management — all designed to simplify your daily business operations.',
  },
  {
    id: '5',
    title: 'Is customer data safe and secure?',
    content:
      'Yes. Customer data is securely stored with proper data protection measures. Your business records remain private, safe, and accessible only to you, ensuring peace of mind and reliability.',
  },
  {
    id: '6',
    title: 'Is the app easy to use for non-technical users?',
    content:
      'Absolutely. E-Tailoring is built with a tailor-friendly interface, large buttons, and simple navigation. Even users with little or no technical experience can use it comfortably.',
  },
  {
    id: '7',
    title: 'Can I track order status and delivery dates?',
    content:
      'Yes. You can mark orders as Pending, Ready, or Delivered and set delivery dates. This helps you avoid delays, reduce customer complaints, and manage workload efficiently.',
  },
  {
    id: '8',
    title: 'How does E-Tailoring help grow my tailoring business?',
    content:
      'By reducing mistakes, saving time, and improving customer service, E-Tailoring allows you to handle more customers professionally — leading to better reputation, repeat clients, and higher profits.',
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.4,
    },
  }),
};

export default function FaqETailoring() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 text-center">
          <motion.h2
            className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked{' '}
            <span className="from-primary bg-gradient-to-r to-rose-400 bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground mx-auto max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Everything you need to know about E-Tailoring and how it helps modern
            tailors manage their business digitally.
          </motion.p>
        </div>

        <motion.div
          className="relative mx-auto max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-primary/10 absolute -top-4 -left-4 -z-10 h-72 w-72 rounded-full blur-3xl" />
          <div className="bg-primary/10 absolute -right-4 -bottom-4 -z-10 h-72 w-72 rounded-full blur-3xl" />

          <Accordion
            type="single"
            collapsible
            className="border-border/40 bg-card/30 w-full rounded-xl border p-2 backdrop-blur-sm"
            defaultValue="1"
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={item.id}
                  className={cn(
                    'bg-card/50 my-1 overflow-hidden rounded-lg border-none px-2 shadow-sm transition-all',
                    'data-[state=open]:bg-card/80 data-[state=open]:shadow-md',
                  )}
                >
                  <AccordionPrimitive.Header className="flex">
                    <AccordionPrimitive.Trigger
                      className={cn(
                        'group flex flex-1 items-center justify-between gap-4 py-4 text-left text-base font-medium',
                        'hover:text-primary transition-all duration-300 outline-none',
                        'focus-visible:ring-primary/50 focus-visible:ring-2',
                        'data-[state=open]:text-primary',
                      )}
                    >
                      {item.title}
                      <PlusIcon
                        size={18}
                        className={cn(
                          'text-primary/70 shrink-0 transition-transform duration-300 ease-out',
                          'group-data-[state=open]:rotate-45',
                        )}
                        aria-hidden="true"
                      />
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>

                  <AccordionContent
                    className={cn(
                      'text-muted-foreground overflow-hidden pt-0 pb-4',
                      'data-[state=open]:animate-accordion-down',
                      'data-[state=closed]:animate-accordion-up',
                    )}
                  >
                    <div className="border-border/30 border-t pt-3">
                      {item.content}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
