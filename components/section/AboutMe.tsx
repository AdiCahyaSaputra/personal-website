import recentWorks from "@/asset/data/recent-works.json";
import CardProject from "../reusable/projects/CardProject";

const AboutMe = () => {
  return (
    <section className="mt-10 grid gap-4 grid-cols-1 lg:grid-cols-2">
      <div>
        <h1 className="text-lg lg:text-2xl font-bold">About Me</h1>
        <p className="text-foreground/60">A brief introduction</p>
      </div>

      <div className="text-foreground/75 mb-6">
        <p>
          I&apos;m from Jakarta, Indonesia. Graduated at 2023 from{" "}
          <b className="text-foreground">Vocational High School</b> majoring in{" "}
          <b className="text-foreground">Software Enginering</b>.
        </p>

        <div className="mt-4">
          <p>My recent works : </p>

          <ul className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {[...recentWorks].reverse().map((work, idx) => (
              <li
                key={idx}
                className={`h-full ${
                  idx === recentWorks.length - 1 && recentWorks.length % 2 !== 0
                    ? "lg:col-span-2"
                    : ""
                }`}
              >
                <CardProject {...work} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
