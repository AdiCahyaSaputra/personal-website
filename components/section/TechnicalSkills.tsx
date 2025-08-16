import StackIcon from 'tech-stack-icons';

const skills = [
  "nextjs2",
  "nuxtjs",
  "sveltejs",
  "react",
  "flutter",
  "nestjs",
  "laravel",
  "shadcnui",
  "tailwindcss",
  "bootstrap5",
  "jquery",
  "prisma",
  "tRPC",
  "reactquery",
  "zod",
  "typescript",
  "postgresql",
  "git",
  "docker",
  "linux",
  "framer",
  "figma",
  "canva",
];

const TechnicalSkills = () => {
  return (
    <section className="grid gap-2 grid-cols-1 lg:grid-cols-2">
      <div>
        <h1 className="text-lg lg:text-2xl font-bold">Technical Skill</h1>
        <p className="text-foreground/60">Tools I Use (and I Love it)</p>
      </div>
      <div className="mt-2 grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-1 self-start">
        {skills.map((skill, idx) => (
          <div key={idx} className="p-4 w-full bg-foreground/5 rounded-lg flex items-center justify-center border hover:border-white">
            <StackIcon variant="dark" className="w-full" name={skill} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
