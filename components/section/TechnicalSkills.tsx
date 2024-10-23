import React from "react";

const skills = [
  "NextJS",
  "NuxtJS",
  "React Native",
  "Laravel",
  "Tailwind",
  "Prisma",
  "tRPC",
  "Livewire",
  "Typescript",
  "PostgreSQL",
  "Supabase",
  "Git",
  "Docker",
  "Linux",
  "Nginx",
  "Figma",
  "ChatGPT",
];

const TechnicalSkills = () => {
  return (
    <section className="grid gap-2 grid-cols-1 lg:grid-cols-2">
      <div>
        <h1 className="text-lg lg:text-2xl font-bold">Technical Skill</h1>
        <p className="text-foreground/60">Tools I Use (and I Love it)</p>
      </div>
      <div className="mt-2 flex flex-wrap gap-1 self-start">
        {skills.map((skill, idx) => (
          <p
            className="px-4 py-2 text-xs lg:text-sm border border-border rounded w-max"
            key={idx}
          >
            {skill}
          </p>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
