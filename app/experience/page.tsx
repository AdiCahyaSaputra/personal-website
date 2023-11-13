import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Experience",
};

const ExperiencePage = () => {
  return (
    <main className="mt-10 min-h-screen">
      <h1 className="text-lg lg:text-2xl font-bold">Professional Journey</h1>
      <p className="text-foreground/60">In My Life</p>

      <ul className="mt-4 space-y-2">
        <li className="flex items-start space-x-2 relative">
          <p className="sticky top-20 font-bold text-foreground/60 self-start">
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
              <p className="text-sm text-foreground/60">At internet</p>
            </li>
          </ul>
        </li>
      </ul>
    </main>
  );
};

export default ExperiencePage;
