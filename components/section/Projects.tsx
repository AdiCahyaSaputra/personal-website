import projects from "@/asset/data/projects.json";
import recentWorks from "@/asset/data/recent-works.json";
import CardProject from "../reusable/projects/CardProject";

const Projects = () => {
  return (
    <section
      id="projects"
      className="mb-14 scroll-mt-26"
    >
      <div className="mb-6">
        <h1 className="text-lg font-bold lg:text-2xl">Selected Projects</h1>
        <p className="max-w-2xl text-foreground/60">
          Production work and earlier builds that show how I approach different
          product problems.
        </p>
      </div>

      <div>
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-foreground/50">
          Recent work
        </p>
        <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {recentWorks.map((project) => (
            <li key={project.slug} className="h-full">
              <CardProject {...project} />
            </li>
          ))}
        </ul>

        <p className="mb-3 mt-8 text-xs font-medium uppercase tracking-widest text-foreground/50">
          Passion Projects
        </p>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[...projects].reverse().map((project) => (
            <li key={project.slug} className="h-full">
              <CardProject {...project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
