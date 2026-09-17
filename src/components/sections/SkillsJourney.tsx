"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { category: "Frameworks & Libraries", items: ["Next.js", "React", "Tailwind CSS", "Framer Motion"] },
  { category: "Languages", items: ["TypeScript", "JavaScript", "HTML", "CSS"] },
  { category: "Backend & Database", items: ["Node.js", "PostgreSQL", "PHP"] },
  { category: "Currently Learning", items: ["Full-stack Development", "Advanced TypeScript"] }
];

const journey = [
  { year: "2024", title: "The Beginning", description: "Started learning programming fundamentals, hardware, and native programming." },
  { year: "2025", title: "Exploring Frameworks", description: "Started exploring modern frameworks and learning how web applications are built." },
  { year: "2026", title: "Real-World Experience", description: "Applying knowledge through PKL, team projects, frontend development, and system integration." },
  { year: "NOW", title: "Going Deeper", description: "Focusing on Next.js, React, TypeScript, PostgreSQL, Node.js, and full-stack development." },
];

export function SkillsJourney() {
  return (
    <Section id="journey" className="bg-[var(--color-primary)] border-y-[4px] border-[var(--color-obsidian)]">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16"
      >
        {/* Skills */}
        <div className="flex flex-col gap-8">
          <motion.div variants={fadeUp}>
            <Badge variant="default" className="mb-4">03 // SKILLS</Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-[var(--color-obsidian)] drop-shadow-[2px_2px_0px_var(--color-on-surface)]">
              What I Work With
            </h2>
          </motion.div>
          
          <div className="grid gap-6">
            {skills.map((skillGroup, idx) => (
              <motion.div key={idx} variants={fadeUp}>
                <Card className="bg-[var(--color-white)]">
                  <div className="p-4 border-b-[3px] border-[var(--color-obsidian)] bg-[var(--color-tertiary)]">
                    <h3 className="font-mono font-bold uppercase tracking-wider">{skillGroup.category}</h3>
                  </div>
                  <CardContent className="p-4 pt-4 flex flex-wrap gap-2">
                    {skillGroup.items.map((item, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center border-[2px] border-[var(--color-obsidian)] bg-[var(--color-canvas)] px-3 py-1 text-sm font-bold shadow-[2px_2px_0px_0px_var(--color-on-surface)]"
                      >
                        {item}
                      </span>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="flex flex-col gap-8">
          <motion.div variants={fadeUp}>
            <Badge variant="default" className="mb-4">04 // JOURNEY</Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-[var(--color-obsidian)] drop-shadow-[2px_2px_0px_var(--color-on-surface)]">
              Learning Timeline
            </h2>
          </motion.div>
          
          <div className="relative border-l-[4px] border-[var(--color-obsidian)] pl-8 ml-4 space-y-10">
            {journey.map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="relative">
                <div className="absolute -left-[42px] top-0 w-6 h-6 bg-[var(--color-secondary)] border-[3px] border-[var(--color-obsidian)] rounded-full"></div>
                <div className="bg-[var(--color-white)] p-6 border-[3px] border-[var(--color-obsidian)] shadow-[var(--shadow-neo-sm)]">
                  <Badge variant="accent-violet" className="mb-2">{item.year}</Badge>
                  <h3 className="font-display text-xl font-bold mb-2 uppercase tracking-tight">{item.title}</h3>
                  <p className="font-body text-[var(--color-obsidian)] font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
