"use client";

import { motion } from "motion/react";
import {
  TeamCard2,
  TeamMember,
} from "@/components/ui/team-card-2";

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "James",
    role: "CEO & Founder",
    bio: "Passionate about creating innovative solutions and leading teams to success.",
    imageUrl:
      "https://res.cloudinary.com/harshitproject/image/upload/v1746774430/member-four.png",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com", icon: "linkedin" },
      { platform: "twitter", url: "https://twitter.com", icon: "twitter" },
    ],
  },
  {
    id: "2",
    name: "Charlotte",
    role: "CTO",
    bio: "Tech enthusiast with over 15 years of experience in software architecture.",
    imageUrl:
      "https://res.cloudinary.com/harshitproject/image/upload/v1746774430/member-five.png",
    socialLinks: [
      { platform: "github", url: "https://github.com", icon: "github" },
      { platform: "linkedin", url: "https://linkedin.com", icon: "linkedin" },
    ],
  },
  {
    id: "3",
    name: "Alexander",
    role: "Lead Designer",
    bio: "Creating beautiful and intuitive user experiences through thoughtful design.",
    imageUrl:
      "https://res.cloudinary.com/harshitproject/image/upload/v1746774430/member-one.png",
    socialLinks: [
      { platform: "twitter", url: "https://twitter.com", icon: "twitter" },
      { platform: "linkedin", url: "https://linkedin.com", icon: "linkedin" },
    ],
  },
  {
    id: "4",
    name: "Olivia",
    role: "CEO & Founder",
    bio: "Passionate about creating innovative solutions and leading teams to success.",
    imageUrl:
      "https://res.cloudinary.com/harshitproject/image/upload/v1746774430/member-three.png",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com", icon: "linkedin" },
      { platform: "twitter", url: "https://twitter.com", icon: "twitter" },
    ],
  },
];

export function Team2() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-10">
      <div className="absolute inset-0 -z-10" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl dark:text-white text-black">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            We&apos;re a dynamic group of individuals who are passionate about
            what we do and dedicated to delivering the best results for our
            clients.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2"
        >
          {teamMembers.map((member, index) => (
            <TeamCard2 key={member.id} member={member} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
