import projects from "@/asset/data/projects.json";
import CardProject from "@/components/reusable/projects/CardProject";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creations",
};

const Creations = () => {
  return (
    <main className="mt-10">
      <h1 className="text-lg lg:text-2xl font-bold">Some Creations</h1>
      <p className="text-foreground/75">
        that I&apos;m truly proud to showcase.
      </p>

      <ul className="mt-10 space-y-4">
        {[...projects].reverse().map((project, idx) => (
          <li key={idx}>
            <CardProject {...project} key={idx} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Creations;