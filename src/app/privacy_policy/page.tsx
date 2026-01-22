// app/privacy-policy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | E-Tailoring",
  description: "Privacy Policy for the E-Tailoring application.",
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 scroll-mt-24 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-6 text-base font-semibold tracking-tight text-slate-900 dark:text-slate-100">
      {children}
    </h3>
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

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <header className="space-y-3">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Legal • E-Tailoring
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            Privacy Policy
          </h1>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Last updated: January 2026
          </p>

          <P>
            This Privacy Policy explains how{" "}
            <span className="font-semibold text-slate-900 dark:text-slate-100">
              E-Tailoring
            </span>{" "}
            (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses,
            stores, and protects information when you use our mobile and web
            application (the &quot;Service&quot;).
          </P>

          <div className="pt-2">
            <Link
              href="/terms"
              className="text-sm font-medium text-slate-800 hover:underline dark:text-slate-200"
            >
              View Terms &amp; Conditions →
            </Link>
          </div>
        </header>

        <H2>1. Scope</H2>
        <P>
          This policy applies to all users of the Service, including Super Admin,
          Admin, Tailor, and any authorized staff who manage customers, orders,
          and measurements.
        </P>

        <H2>2. Information We Collect</H2>

        <H3>2.1 Account &amp; Profile Information</H3>
        <List
          items={[
            "Name",
            "Phone number",
            "Email address",
            "Shop/business details (for Admin accounts)",
            "User role (Super Admin, Admin, Tailor)",
          ]}
        />

        <H3>2.2 Customer, Measurement &amp; Order Data</H3>
        <List
          items={[
            "Customer names and contact details (entered by your shop/team)",
            "Clothing measurements (e.g., shirt, pant, suit, shalwar kameez)",
            "Order history, delivery status, and notes",
            "Payment records, due amounts, and invoices (if used in your workflow)",
          ]}
        />

        <H3>2.3 Automatically Collected Data</H3>
        <List
          items={[
            "Device information (model, OS version)",
            "Log data (app events, errors, crash reports)",
            "Usage data for performance, diagnostics, and feature improvement",
          ]}
        />

        <H2>3. How We Use Information</H2>
        <List
          items={[
            "To provide, operate, and maintain the Service",
            "To manage shops, customers, measurements, and orders",
            "To authenticate users and enforce role-based access",
            "To improve performance, reliability, and user experience",
            "To prevent fraud, abuse, and unauthorized access",
            "To communicate important service updates (when necessary)",
          ]}
        />

        <H2>4. Legal Bases (Where Applicable)</H2>
        <P>
          Depending on your location, we process information based on: (a)
          performance of a contract (providing the Service), (b) legitimate
          interests (security and improvement), (c) compliance with legal
          obligations, and/or (d) your consent where required.
        </P>

        <H2>5. Data Storage, Hosting &amp; Security</H2>
        <P>
          We use secure cloud services (such as Supabase) to store and manage
          data. We apply reasonable administrative, technical, and
          organizational measures to protect information from unauthorized
          access, alteration, loss, or misuse.
        </P>
        <P>
          <span className="font-semibold text-slate-900 dark:text-slate-100">
            No method of transmission or storage is 100% secure.
          </span>{" "}
          While we strive to protect your data, we cannot guarantee absolute
          security.
        </P>

        <H2>6. Data Sharing</H2>
        <P>We do not sell or rent your personal information. We may share data only:</P>
        <List
          items={[
            "With authorized users in your shop/team according to assigned roles",
            "With service providers (hosting/analytics) strictly to operate the Service",
            "If required by law, legal process, or lawful government request",
            "To protect rights, safety, and security of users and the Service",
          ]}
        />

        <H2>7. Cookies &amp; Analytics</H2>
        <P>
          If you use the web version, we may use cookies or similar technologies
          for session management and improving performance. We may also use
          analytics tools to understand how the Service is used and to improve
          functionality. Where required, we will request consent.
        </P>

        <H2>8. Data Retention</H2>
        <P>
          We retain information as long as needed to provide the Service, comply
          with legal obligations, resolve disputes, and enforce agreements. You
          may request deletion subject to legal and operational requirements.
        </P>

        <H2>9. Your Rights</H2>
        <P>You may have the right to:</P>
        <List
          items={[
            "Access your information",
            "Correct inaccurate or incomplete data",
            "Request deletion of your account and associated data",
            "Withdraw consent where processing is based on consent",
          ]}
        />

        <H2>10. Children’s Privacy</H2>
        <P>
          The Service is not intended for children under 13. We do not knowingly
          collect personal information from children.
        </P>

        <H2>11. International Transfers</H2>
        <P>
          Your information may be processed in countries other than your own,
          depending on hosting providers. We take steps to ensure appropriate
          safeguards are in place where required by law.
        </P>

        <H2>12. Updates to This Policy</H2>
        <P>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated “Last updated” date.
        </P>

        <H2>13. Contact Us</H2>
        <P>If you have questions or concerns about this Privacy Policy, contact:</P>

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
