import React from "react";
import Link from "next/link";

const HeadContent = () => {
  return (
    <section>
      <h1 className="text-lg lg:text-2xl font-bold">Adi Cahya Saputra</h1>
      <p className="text-sm lg:text-base text-foreground/60">
        Fullstack Developer
      </p>

      <p className="mt-2 text-foreground/75">
        Self-taught developer, not yet a university graduate (completed vocational high school in 2023) and currently working as a full-stack developer. View my{" "}
        <Link
          href="/creations"
          className="underline text-foreground hover:decoration-red-800"
        >
          creations
        </Link> or my{" "}
        <Link
          href="/journey"
          className="underline text-foreground hover:decoration-red-800"
        >
          journey
        </Link>
      </p>
    </section>
  );
};

export default HeadContent;
