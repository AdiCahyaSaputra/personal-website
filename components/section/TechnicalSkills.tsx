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
  { icon: "reactquery", label: "Tanstack" },
  { icon: "zod", label: "Zod" },
  { icon: "typescript", label: "TypeScript" },
  { icon: "postgresql", label: "PostgreSQL" },
  { icon: "git", label: "Git" },
  { icon: "docker", label: "Docker" },
  { icon: "linux", label: "Linux" },
  { icon: "framer", label: "Framer" },
  { icon: "figma", label: "Figma" },
  { icon: "canva", label: "Canva" },
  { icon: "cursor", label: "Cursor IDE" },
];

const TechnicalSkills = () => {
  return (
    <section id="tech-skills" className="mb-14 scroll-mt-26">
      <div className="relative isolate min-h-[34rem] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 px-4 py-10 text-white shadow-2xl sm:px-8 lg:flex lg:items-center">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/skill/ascii-bg.gif'), url('/skill/ascii-bg-fallback.jpg')",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-red-900/10"
        />

        <div className="relative z-10 mx-auto w-full max-w-4xl p-4 sm:p-6">
          <div className="mb-6">
            <h1 className="text-xl font-bold sm:text-2xl">Technical Skills</h1>
            <p className="mt-1 text-sm text-zinc-400">
              Technologies I use to build production-ready apps.
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill) => (
              <li
                key={skill.label}
                className="flex min-w-0 items-center gap-2 rounded-full border border-white/20 px-3 py-2.5 transition-colors bg-black/5 backdrop-blur-xs hover:border-red-400/40 hover:bg-red-500/10"
              >
                <StackIcon
                  variant="dark"
                  className="h-5 w-5 shrink-0"
                  name={skill.icon}
                />
                <span className="truncate text-sm text-zinc-200">
                  {skill.label}
                </span>
              </li>
            ))}
            <li className="col-span-2 flex items-center rounded-full border border-dashed border-white/15 bg-black/20 px-3 py-2.5 text-sm text-zinc-500 sm:col-span-1">
              Always learning more...
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
