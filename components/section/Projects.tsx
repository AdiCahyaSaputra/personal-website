import projects from "@/asset/data/projects.json";
import CardProject from "../reusable/projects/CardProject";

const Projects = () => {
  return (
    <section id="projects" className="grid gap-4 grid-cols-1 lg:grid-cols-2 scroll-mt-26">
      <div>
        <h1 className="text-lg lg:text-2xl font-bold">Other Projects</h1>
        <p className="text-foreground/60">That I'm truly proud to showcase.</p>
      </div>

      <div className="text-foreground/75 mb-6">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {[...projects].reverse().map((project, idx) => (
            <li
              key={idx}
              className={`h-full ${
                idx === projects.length - 1 && projects.length % 2 !== 0
                  ? "lg:col-span-2"
                  : ""
              }`}
            >
              <CardProject {...project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
