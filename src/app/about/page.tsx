'use client';

import * as React from 'react';
import { TeamCard2, type TeamMember } from '@/components/ui/team-card-2';
import AboutUs1 from '@/components/mvpblocks/about-us-1';

export default function AboutPage() {
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Usman Khan',
      role: 'Founder • Product & Engineering',
      bio: 'Building E-Tailoring to help tailors manage orders, measurements, and accounts digitally.',
      imageUrl: '/dev.jpeg', // ✅ put image in /public/team/sudais.jpg
      socialLinks: [
        { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
        { platform: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
        { platform: 'GitHub', url: 'https://github.com', icon: 'github' },
      ],
    },
    {
      id: '2',
      name: 'Muhammad Wali',
      role: 'Marketing • Content Strategy',
      bio: 'Creates conversion-focused content for flyers, WhatsApp campaigns, and social media ads.',
      imageUrl: '/team/team1.jpeg', // ✅ /public/team/hayee.jpg
      socialLinks: [
        { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
      ],
    },
    {
      id: '3',
      name: 'Sudais Khan',
      role: 'UI/UX • Design',
      bio: 'Designs clean, mobile-first interfaces optimized for fast daily tailoring workflows.',
      imageUrl: '/team/team2.jpg', // ✅ /public/team/ahsan.jpg
      socialLinks: [
        { platform: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
      ],
    },
  ];

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <AboutUs1/>
      <header className="mb-8 text-center">
        <h1
         className="mb-4 text-3xl font-bold leading-tight md:text-4xl">Meet the E-Tailoring Team
          
        </h1>
        <p className="text-muted-foreground mx-auto mt-2 max-w-2xl">
          Meet the team behind <span className="font-semibold">E-Tailoring</span> — we’re building
          tools that modernize tailoring businesses with simple, reliable software.
        </p>
      </header>

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-20">
        {teamMembers.map((member, index) => (
          <TeamCard2 key={member.id} member={member} index={index} />
        ))}
      </section>
    </main>
  );
}
