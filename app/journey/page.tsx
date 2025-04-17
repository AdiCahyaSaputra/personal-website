import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Journey",
};

type TExperience = {
  experience: string;
  year: number;
  at: string;
};

const experiencesData = [
  {
    experience: "Graduate",
    year: 2023,
    at: "From Vocational High School",
  },
  {
    experience: "Fulltime IT Support",
    year: 2023,
    at: "at Vocational High School",
  },
  {
    experience: "Fullstack Web Developer",
    year: 2023,
    at: "at Mitrain ID",
  },
  {
    experience: "Junior Software Engineer",
    year: 2024,
    at: "at PT Pertamina Bina Medika IHC",
  },
  {
    experience: "Fullstack Developer",
    year: 2024,
    at: "at PT Enakans Media Teknologi",
  },
];

const experiences: { [key: string]: TExperience[] } = {};

for (const experience of experiencesData) {
  const year = experience.year;

  if (!Object.hasOwn(experiences, year)) {
    experiences[year] = [];
  }

  experiences[year].push(experience);
}

const Journey = () => {
  return (
    <main className="mt-10 min-h-screen">
      <h1 className="text-lg lg:text-2xl font-bold">Professional Journey</h1>
      <p className="text-foreground/60 mt-2">
        Nothing is fun on the first try. <br />
        It&apos;s all seems like Impossible until it&apos;s done (Nelson
        Mandela).
      </p>

      <p className="text-foreground/60 mt-4">
        Btw check my{" "}
        <a
          href="https://www.linkedin.com/in/adi-cs/"
          className="underline text-foreground"
        >
          Linkedin
        </a>{" "}
        for more detail
      </p>

      <ul className="mt-8 space-y-4">
        {[...Object.keys(experiences)].reverse().map((year, yearIdx) => (
          <li key={yearIdx} className="flex items-start space-x-4 relative">
            <p className="sticky top-20 font-bold text-foreground self-start px-2 py-px border border-border rounded-full">
              {year}
            </p>
            <ul className="space-y-2">
              {[...experiences[year]].reverse().map((experience, expIdx) => (
                <li key={expIdx}>
                  {expIdx === 0 && yearIdx === 0 && (<Badge className="mb-2">Present</Badge>)}
                  <h2 className="font-bold">{experience.experience}</h2>
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

export default Journey;
