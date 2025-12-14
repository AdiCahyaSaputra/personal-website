import { Metadata } from "next";
import experiencesData from "@/asset/data/experience.json";

export const metadata: Metadata = {
  title: "Experience",
};

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
    <main className="mt-10 min-h-screen">
      <h1 className="text-lg lg:text-2xl font-bold">Professional Experience</h1>
      <p className="text-foreground/60 mt-2">
        List of my work experiences and career growth along
        the way.
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

      <ul className="mt-8 space-y-4">
        {[...Object.keys(experiences)].reverse().map((year, yearIdx) => (
          <li key={yearIdx} className="flex items-start space-x-4 relative">
            <p className="sticky top-24 bg-foreground/5 font-bold text-foreground self-start px-2 py-px border border-border rounded-full">
              {year}
            </p>
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
                  <p className="text-sm text-foreground/60">{experience.at}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Experience;
