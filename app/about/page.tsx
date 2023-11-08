import React from "react";
import { Image as ImageIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const About = () => {
  return (
    <main className="mt-10">
      <h1 className="text-lg lg:text-2xl font-bold">Get to Know Me {":)"}</h1>
      <p className="text-foreground/60">Introduction</p>

      <div className="text-foreground/75 mb-4">
        <p className="mt-2">
          I&apos;m 18 y.o man from Jakarta, Indonesia. Graduated from{" "}
          <a
            href="https://sekolahwijayakusuma.sch.id/"
            className="underline text-foreground"
          >
            Wijaya Kusuma
          </a>{" "}
          Vocational High School majoring in Software Enginering.
        </p>
        <p className="mt-2">
          3+ Years experience of learning to code and make something useful. I
          like to spend my day learning something new or digging deeper into
          what I&apos;ve learned before
        </p>
      </div>

      <h1 className="text-lg lg:text-2xl font-bold">But Why Tech?</h1>
      <p className="text-foreground/60">Life Choices</p>

      <div className="text-foreground/75">
        <p className="mt-2">
          Actually, I really like the world of VFX and Photography, but I
          didn&apos;t pass the selection to enter my dream vocational school.
        </p>
        <p className="mt-2">
          So I entered{" "}
          <a
            href="https://sekolahwijayakusuma.sch.id/"
            className="underline text-foreground"
          >
            Wijaya Kusuma
          </a>{" "}
          Vocational School (2020) and studied Web Programming here and from{" "}
          <a
            href="https://www.youtube.com/c/webprogrammingunpas"
            className="underline text-foreground"
          >
            WPU
          </a>{" "}
          (legends lecture haha).
        </p>
        <p className="mt-2">
          In my free time, I occasionally learn about VFX and photography while
          also collecting money to buy a camera
        </p>
      </div>

      <div className="mt-4 grid lg:grid-cols-2 grid-cols-1 gap-2">
        <div className="w-full aspect-video flex items-center justify-center space-x-2 border border-border rounded">
          <ImageIcon />
          <span>Adi Cahya Saputra</span>
        </div>
        <div className="w-full aspect-video flex items-center justify-center space-x-2 border border-border rounded">
          <ImageIcon />
          <span>Adi Cahya Saputra</span>
        </div>
      </div>
    </main>
  );
};

export default About;
