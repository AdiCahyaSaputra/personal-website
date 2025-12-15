import experiencesData from "@/asset/data/experience.json";

type TExperience = {
  experience: string;
  year: number;
  at: string;
};
const experiences: { [key: string]: TExperience[] } = {};

for (const experience of experiencesData) {
  const year = experience.year;

  if (!Object.hasOwn(experiences, year)) {
    experiences[year] = [];
  }

  experiences[year].push(experience);
}

const Experience = () => {
  return (
    <section id="experience" className="grid gap-4 grid-cols-1 lg:grid-cols-2 scroll-mt-26">
      <div>
        <h1 className="text-lg lg:text-2xl font-bold">
          Professional Experience
        </h1>
        <p className="text-foreground/60">
          List of my work experiences and career growth along the way.
          <br /> Check my{" "}
          <a
            href="https://www.linkedin.com/in/adi-cs/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-foreground hover:decoration-red-800"
          >
            Linkedin
          </a>{" "}
          for more detail
        </p>
      </div>

      <div className="text-foreground/75 mb-6">
        <ul className="space-y-6">
          {[...Object.keys(experiences)].reverse().map((year, yearIdx) => (
            <li
              key={yearIdx}
              className="flex items-start justify-between space-x-4 relative pb-4 border-b border-border"
            >
              <ul className="space-y-2">
                {[...experiences[year]].reverse().map((experience, expIdx) => (
                  <li key={expIdx}>
                    <div className="flex items-center gap-2">
                      <h2 className="font-bold">{experience.experience}</h2>
                      {expIdx === 0 && yearIdx === 0 && (
                        <p className="text-xs font-bold bg-linear-to-r from-emerald-400 via-teal-400 to-cyan-400 text-transparent bg-clip-text">
                          PRESENT
                        </p>
                      )}
                    </div>
                    <p className="text-sm text-foreground/60">
                      {experience.at}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="sticky top-24 bg-foreground/5 font-bold text-foreground self-start px-2 py-px border border-foreground rounded-full">
                {year}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
