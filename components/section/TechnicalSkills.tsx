import StackIcon from "tech-stack-icons";

const skills = [
  { icon: "nextjs2", label: "NextJS" },
  { icon: "nuxtjs", label: "NuxtJS" },
  { icon: "sveltejs", label: "Svelte" },
  { icon: "react", label: "ReactJS" },
  { icon: "flutter", label: "Flutter" },
  { icon: "nestjs", label: "NestJS" },
  { icon: "laravel", label: "Laravel" },
  { icon: "shadcnui", label: "Shadcn UI" },
  { icon: "tailwindcss", label: "Tailwind CSS" },
  { icon: "bootstrap5", label: "Bootstrap" },
  { icon: "jquery", label: "jQuery" },
  { icon: "prisma", label: "Prisma" },
  { icon: "tRPC", label: "tRPC" },
  { icon: "reactquery", label: "React Query" },
  { icon: "zod", label: "Zod" },
  { icon: "typescript", label: "TypeScript" },
  { icon: "postgresql", label: "PostgreSQL" },
  { icon: "git", label: "Git" },
  { icon: "docker", label: "Docker" },
  { icon: "linux", label: "Linux" },
  { icon: "framer", label: "Framer" },
  { icon: "figma", label: "Figma" },
  { icon: "canva", label: "Canva" },
];

const TechnicalSkills = () => {
  return (
    <section className="grid gap-2 grid-cols-1 lg:grid-cols-2">
      <div>
        <h1 className="text-lg lg:text-2xl font-bold">Technical Skill</h1>
        <p className="text-foreground/60">Tools I Use (and I Love it)</p>
      </div>
      <div className="mt-2 grid grid-cols-1 lg:grid-cols-3 gap-1 self-start">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="py-2 px-4 w-full bg-foreground/5 rounded-full flex gap-2 items-center justify-start border hover:border-white"
          >
            <StackIcon variant="dark" className="w-5" name={skill.icon} />
            <p>{skill.label}</p>
          </div>
        ))}
        <div
          className="py-2 px-4 w-full bg-foreground/5 rounded-full flex gap-2 items-center justify-start border hover:border-white"
        >
          <p className="text-foreground/60">Can learn more...</p>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
