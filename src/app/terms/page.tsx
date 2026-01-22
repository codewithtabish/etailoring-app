// app/terms/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | E-Tailoring",
  description: "Terms & Conditions for the E-Tailoring application.",
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 scroll-mt-24 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 leading-relaxed text-slate-700 dark:text-slate-300">
      {children}
    </p>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
      {items.map((t) => (
        <li key={t} className="leading-relaxed">
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <header className="space-y-3">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Legal • E-Tailoring
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            Terms &amp; Conditions
          </h1>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Last updated: January 2026
          </p>

          <P>
            By downloading, installing, accessing, or using{" "}
            <span className="font-semibold text-slate-900 dark:text-slate-100">
              E-Tailoring
            </span>{" "}
            (the &quot;Service&quot;), you agree to be bound by these Terms &amp;
            Conditions (&quot;Terms&quot;). If you do not agree, do not use the
            Service.
          </P>

          <div className="pt-2">
            <Link
              href="/privacy_policy"
              className="text-sm font-medium text-slate-800 hover:underline dark:text-slate-200"
            >
              View Privacy Policy →
            </Link>
          </div>
        </header>

        <H2>1. About the Service</H2>
        <P>
          E-Tailoring is a digital tailoring management system that helps shop
          owners and tailors manage customer records, measurements, orders, and
          business operations.
        </P>

        <H2>2. Eligibility &amp; Accounts</H2>
        <List
          items={[
            "You must provide accurate information when creating an account.",
            "You are responsible for safeguarding your login credentials.",
            "You are responsible for all activities under your account.",
            "You must immediately notify us if you suspect unauthorized access.",
          ]}
        />

        <H2>3. Acceptable Use</H2>
        <P>You agree not to:</P>
        <List
          items={[
            "Use the Service for illegal, harmful, or fraudulent activities",
            "Access or attempt to access data of other shops without permission",
            "Upload malicious code, or attempt to disrupt the Service",
            "Reverse engineer, modify, or tamper with the application",
            "Misuse customer or measurement data or violate privacy laws",
          ]}
        />

        <H2>4. Customer Data &amp; Accuracy</H2>
        <P>
          You are responsible for the accuracy of data you enter (including
          measurements, order details, delivery dates, and customer contact
          information). The Service is provided as a management tool; we are not
          responsible for losses resulting from incorrect input or operational
          decisions.
        </P>

        <H2>5. Subscription, Fees &amp; Changes</H2>
        <P>
          Some features may require a paid subscription. Prices, plans, and
          features may change over time. We may modify, suspend, or discontinue
          any part of the Service with or without notice where permitted by law.
        </P>

        <H2>6. Service Availability</H2>
        <P>
          We aim to keep the Service available, but we do not guarantee
          uninterrupted or error-free operation. Maintenance, upgrades, or
          technical issues may cause temporary downtime.
        </P>

        <H2>7. Intellectual Property</H2>
        <P>
          The Service, including its design, code, logos, and content, is owned
          by E-Tailoring or its licensors and is protected by applicable laws.
          You may not copy, reproduce, or distribute any part without written
          permission.
        </P>

        <H2>8. Termination</H2>
        <P>
          We may suspend or terminate access if you violate these Terms, misuse
          the Service, or create risk for other users or the platform. You may
          stop using the Service at any time.
        </P>

        <H2>9. Disclaimer</H2>
        <P>
          The Service is provided on an “as is” and “as available” basis, without
          warranties of any kind, express or implied, to the maximum extent
          permitted by law.
        </P>

        <H2>10. Limitation of Liability</H2>
        <P>
          To the maximum extent permitted by law, E-Tailoring will not be liable
          for indirect, incidental, special, consequential, or punitive damages,
          or any loss of profits or revenues, arising from your use of or
          inability to use the Service.
        </P>

        <H2>11. Governing Law</H2>
        <P>
          These Terms are governed by applicable laws of your operating
          jurisdiction, unless otherwise required by law.
        </P>

        <H2>12. Changes to These Terms</H2>
        <P>
          We may update these Terms from time to time. Continued use of the
          Service after changes become effective means you accept the updated
          Terms.
        </P>

        <H2>13. Contact</H2>
        <P>If you have questions about these Terms, contact:</P>

        <div className="mt-4 space-y-1 text-sm text-slate-700 dark:text-slate-300">
          <p>
            <span className="font-semibold text-slate-900 dark:text-slate-100">
              Email:
            </span>{" "}
            usmanuot123@gmail.com
          </p>
          <p>
            <span className="font-semibold text-slate-900 dark:text-slate-100">
              App Name:
            </span>{" "}
            E-Tailoring
          </p>
        </div>

        <footer className="mt-12 pt-6 text-sm text-slate-500 dark:text-slate-400">
          © 2026 E-Tailoring. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
