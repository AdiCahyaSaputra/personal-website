import React from "react";

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
        <h1 className="text-lg lg:text-2xl font-bold">Get to Know Me {":)"}</h1>
        <p className="text-foreground/60">Introduction</p>
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
          Vocational High School majoring in Software Enginering.
        </p>
        <p className="mt-2">
          {new Date().getFullYear() - 2020} Years experience of learning to code
          and make something useful.
        </p>
        <p className="mt-2">
          I like to spend my day learning something new or digging deeper into
          what I&apos;ve learned before
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
