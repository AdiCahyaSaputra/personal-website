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

const recentWorks = [
  {
    name: "Twillink",
    link: "https://twillink.com/",
  },
  {
    name: "Yufo Trade",
    link: "https://yufotrade.com/",
  },
  {
    name: "Workace",
    link: "https://workace.io/",
  },
];

const AboutMe = () => {
  return (
    <section className="mt-10 grid gap-2 grid-cols-1 lg:grid-cols-2">
      <div>
        <h1 className="text-lg lg:text-2xl font-bold">About</h1>
        <p className="text-foreground/60">Get to Know Me {":)"}</p>
      </div>

      <div className="text-foreground/75 mb-4">
        <p>
          I&apos;m {calculateAge()} y.o man from Jakarta, Indonesia. Graduated
          at 2023 from <b className="text-foreground">Vocational High School</b>{" "}
          majoring in <b className="text-foreground">Software Enginering</b>.
          Explore my{" "}
          <Link
            href="/creations"
            className="underline text-foreground hover:decoration-red-800"
          >
            creations
          </Link>{" "}
          and interesting{" "}
          <Link
            href="/journey"
            className="underline text-foreground hover:decoration-red-800"
          >
            journey
          </Link>
          .
        </p>

        <div className="mt-4 flex items-center gap-1 flex-wrap">
          <p className="text-foreground/75">Recent professional works :</p>
          {recentWorks.map((work, idx) => (
            <Link
              href={work.link}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-foreground hover:decoration-red-800"
            >
              {work.name}
              {idx < recentWorks.length - 1 && (
                <span className="text-foreground/75">,</span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
