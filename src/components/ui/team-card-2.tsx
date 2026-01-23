"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Twitter,
  DivideIcon as LucideIcon,
} from "lucide-react";
import Link from "next/link";

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
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
  index: number;
}

const socialIcons: Record<string, typeof LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export function TeamCard2({ member, index }: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg bg-card shadow-lg dark:shadow-white/20"
      whileHover={{ y: -5 }}
    >
      <div className="aspect-square overflow-hidden">
        <Image
          src={member.imageUrl}
          alt={member.name}
          width={400}
          height={400}
          className="w-full h-[25rem] object-cover transition-transform duration-300 group-hover:scale-110" // or h-full for consistency
          loading="lazy"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-6 text-white opacity-0 transition-opacity group-hover:opacity-100"
      >
        <h3 className="text-xl font-semibold">{member.name}</h3>
        <span className="text-sm text-gray-300">{member.role}</span>
        <span className="mt-2 text-sm line-clamp-2">{member.bio}</span>
        <div className="mt-4 flex gap-3">
          {member.socialLinks.map((link) => {
            const Icon = socialIcons[link.icon];
            return (
              <Link
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
              >
                <Icon className="h-4 w-4" />
              </Link>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
