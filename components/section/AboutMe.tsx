import Link from "next/link";

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
        <h1 className="text-lg lg:text-2xl font-bold">About Me</h1>
        <p className="text-foreground/60">A brief introduction</p>
      </div>

      <div className="text-foreground/75 mb-4">
        <p>
          I&apos;m from Jakarta, Indonesia. Graduated at 2023 from{" "}
          <b className="text-foreground">Vocational High School</b> majoring in{" "}
          <b className="text-foreground">Software Enginering</b>.
        </p>

        <div className="mt-4 flex items-center gap-1 flex-wrap">
          <p>
            My recent works :{" "}
            {recentWorks.map((work, idx) => (
              <Link
                href={work.link}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-foreground hover:decoration-red-800 mr-1"
              >
                {work.name}
                {idx < recentWorks.length - 1 && (
                  <span className="text-foreground/75">,</span>
                )}
              </Link>
            ))}
            or explore my other{" "}
            <Link
              href="/projects"
              className="underline text-foreground hover:decoration-red-800"
            >
              projects
            </Link>{" "}
            and see my{" "}
            <Link
              href="/experience"
              className="underline text-foreground hover:decoration-red-800"
            >
              experience
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
