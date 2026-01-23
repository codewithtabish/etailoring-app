'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Twitter, type LucideIcon } from 'lucide-react';

export interface SocialLink {
  platform: string;
  url: string;
  icon: 'github' | 'linkedin' | 'twitter';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks: SocialLink[];
}

interface TeamMemberCardProps {
  member: TeamMember;
  index?: number;
}

const socialIcons: Record<SocialLink['icon'], LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export function TeamCard2({ member, index = 0 }: TeamMemberCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className={[
        'group relative overflow-hidden rounded-2xl',
        'bg-card shadow-sm ring-1 ring-border/60',
        'transition-shadow hover:shadow-lg',
        'dark:hover:shadow-white/10',
      ].join(' ')}
    >
      {/* Image */}
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={member.imageUrl}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 320px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          priority={index < 2}
        />
      </div>

      {/* Overlay */}
      <div
        className={[
          'pointer-events-none absolute inset-0',
          'bg-gradient-to-t from-black/85 via-black/30 to-transparent',
          'opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100',
        ].join(' ')}
      />

      {/* Content */}
      <div
        className={[
          'absolute inset-0 flex flex-col justify-end p-5 sm:p-6',
          'translate-y-2 opacity-0 transition-all duration-300 ease-out',
          'group-hover:translate-y-0 group-hover:opacity-100',
        ].join(' ')}
      >
        <h3 className="text-lg font-semibold text-white sm:text-xl">
          {member.name}
        </h3>
        <p className="mt-0.5 text-sm text-white/80">{member.role}</p>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/75">
          {member.bio}
        </p>

        {/* Social Links */}
        <div className="pointer-events-auto mt-4 flex items-center gap-2">
          {member.socialLinks?.map((link) => {
            const Icon = socialIcons[link.icon];

            return (
              <Link
                key={`${member.id}-${link.platform}-${link.icon}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on ${link.platform}`}
                className={[
                  'inline-flex h-9 w-9 items-center justify-center rounded-full',
                  'bg-white/10 text-white',
                  'ring-1 ring-white/15',
                  'transition hover:bg-white/20 hover:ring-white/25',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40',
                ].join(' ')}
              >
                <Icon className="h-4 w-4" />
              </Link>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}
