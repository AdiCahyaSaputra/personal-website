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
        Self-taught developer, graduate from vocational high school in 2023 and
        currently working as a full-stack developer and UI/UX Designer.
      </p>
      <p className="mt-2 text-foreground/75">
        View my{" "}
        <Link
          href="/creations"
          className="underline text-foreground hover:decoration-red-800"
        >
          creations
        </Link>{" "}
        or {" "}
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
