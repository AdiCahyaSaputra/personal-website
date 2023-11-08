import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Coffee,
  Cpu,
  Github,
  Image as ImageIcon,
  Instagram,
  Linkedin,
  SmilePlus,
} from "lucide-react";
import Link from "next/link";

const skills = [
  "NextJS",
  "Laravel",
  "Tailwind",
  "Prisma",
  "tRPC",
  "Livewire",
  "Typescript",
  "PostgreSQL",
  "Git",
  "Linux",
  "Figma",
  "Googling",
];

const Page = () => {
  return (
    <main className="mt-10">
      <h1 className="text-lg lg:text-2xl font-bold">Adi Cahya Saputra</h1>
      <p className="text-sm lg:text-base text-foreground/60">
        IT Support &bull; Frontend Engineer
      </p>

      <p className="mt-2 text-foreground/75">
        Self-Taught Developer, NextJS and Laravel enthusiast. I graduated from a
        vocational school, and currently work as a Full Time IT Support and
        Frontend Engineer Freelancer. View my{" "}
        <Link href="/projects" className="underline text-foreground">
          creations
        </Link>
      </p>

      <Separator className="my-4" />

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div>
          <h2 className="text-lg lg:text-2xl font-bold flex items-center gap-2">
            <Coffee />
            <span>Featured Project</span>
          </h2>
          <div className="mt-2">
            <div className="w-full aspect-video flex items-center justify-center space-x-2 border border-border rounded">
              <ImageIcon />
              <span>ForumGW</span>
            </div>
            <p className="mt-2 text-foreground/75">
              <a
                href="https://forumgw.vercel.app/"
                className="underline text-foreground"
              >
                ForumGW
              </a>{" "}
              is informal community for public and anonymous discussion
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-lg lg:text-2xl font-bold flex items-center gap-2">
            <Cpu />
            <span>Technical Skills</span>
          </h2>
          <div className="mt-2 flex flex-wrap gap-1">
            {skills.map((skill, idx) => (
              <p
                className="px-4 py-2 text-xs lg:text-sm border border-border rounded w-max"
                key={idx}
              >
                {skill}
              </p>
            ))}
          </div>

          <h2 className="text-lg lg:text-2xl font-bold flex items-center gap-2 mt-4">
            <SmilePlus className="w-5 h-5" />
            <span>Find me in another places</span>
          </h2>

          <ul className="mt-2 flex items-center gap-2">
            <li>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded focus-visible:ring-secondary p-2"
              >
                <a href="https://github.com/AdiCahyaSaputra">
                  <Github />
                </a>
              </Button>
            </li>

            <li>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded focus-visible:ring-secondary p-2"
              >
                <a href="https://www.instagram.com/adi.tsx/">
                  <Instagram />
                </a>
              </Button>
            </li>

            <li>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded focus-visible:ring-secondary p-2"
              >
                <a href="https://www.linkedin.com/in/adi-cahya-saputra-746a8423b/">
                  <Linkedin />
                </a>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Page;
