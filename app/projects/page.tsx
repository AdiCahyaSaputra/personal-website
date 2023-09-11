import projects from "@/asset/data/projects.json";
import CardProject from "@/components/reusable/projects/CardProject";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

const Projects = () => {
  return (
    <main className="mt-10">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        A web app <span className="text-primary">creation</span> that I&apos;m
        truly proud to showcase.
      </h1>

      <ul className="mt-10 space-y-4">
        {projects.map((project, idx) => (
          <li key={idx}>
            <CardProject {...project} key={idx} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Projects;
