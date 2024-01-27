import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Experience",
};

const ExperiencePage = () => {
  return (
    <main className="mt-10 min-h-screen">
      <h1 className="text-lg lg:text-2xl font-bold">Professional Journey</h1>
      <p className="text-foreground/60 mt-2">
        {'"'}Work is the dance of passion and perseverance, choreographed by the
        footsteps of dedication and illuminated by the spotlight of achievement.
        {'"'} - Benjamin Adams
      </p>

      <ul className="mt-4 space-y-2">
        <li className="flex items-start space-x-4 relative">
          <p className="sticky top-20 font-bold text-foreground self-start px-2 py-px border border-border rounded-full">
            2023
          </p>
          <ul className="space-y-2">
            <li>
              <h2 className="font-bold">Graduate</h2>
              <p className="text-sm text-foreground/60">
                From vocational high school
              </p>
            </li>

            <li>
              <h2 className="font-bold">Fulltime IT Support</h2>
              <p className="text-sm text-foreground/60">
                At my vocational high school
              </p>
            </li>

            <li>
              <h2 className="font-bold">Freelance Frontend Developer</h2>
              <p className="text-sm text-foreground/60">At Mitrain id</p>
            </li>
          </ul>
        </li>
      </ul>
    </main>
  );
};

export default ExperiencePage;
