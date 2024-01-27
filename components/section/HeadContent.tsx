import React from "react";
import Link from "next/link";

const HeadContent = () => {
  return (
    <section>
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
    </section>
  );
};

export default HeadContent;
