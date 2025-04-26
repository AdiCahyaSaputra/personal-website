import Link from "next/link";

const calculateAge = () => {
  const birth = new Date("2005-04-18");
  const current = new Date();

  const age = current.getFullYear() - birth.getFullYear();

  if (
    current.getMonth() < birth.getMonth() ||
    (current.getMonth() === birth.getMonth() &&
      current.getDate() < birth.getDate())
  ) {
    return age - 1;
  }

  return age;
};

const AboutMe = () => {
  return (
    <section className="mt-10 grid gap-2 grid-cols-1 lg:grid-cols-2">
      <div>
        <h1 className="text-lg lg:text-2xl font-bold">Details</h1>
        <p className="text-foreground/60">Get to Know Me {":)"}</p>
      </div>

      <div className="text-foreground/75 mb-4">
        <p>
          I&apos;m {calculateAge()} y.o man from Jakarta, Indonesia. Graduated
          from{" "}
          <a
            href="https://sekolahwijayakusuma.sch.id/"
            className="underline text-foreground"
          >
            Wijaya Kusuma
          </a>{" "}
          Vocational High School majoring in Software Enginering (2023).
        </p>
        <p className="mt-2 text-foreground/75">
          I like to share{" "}
          <Link
            href="/ui"
            className="underline text-foreground hover:decoration-red-800"
          >
            UI Kits
          </Link>{" "}
          that play nicely with popular frontend frameworks like shadcn-ui,
          Tailwind CSS, Bootstrap, and more. No need to sweat over customizing
          the frontend
        </p>
        <p className="mt-2 text-foreground/75">
          To explore my past projects, check out my{" "}
          <Link
            href="/creations"
            className="underline text-foreground hover:decoration-red-800"
          >
            creations
          </Link>{" "}
          or let me tell you about my interesting {" "}
          <Link
            href="/journey"
            className="underline text-foreground hover:decoration-red-800"
          >
            journey
          </Link>
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
