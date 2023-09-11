import { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <main className="mt-10">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        <span className="pb-2 border-b-2 border-primary">Adi</span>{" "}
        <span className="pb-2 border-b-2 border-secondary">Cahya Saputra</span>{" "}
      </h1>
      <p className="text-foreground mt-4 leading-7">
        Frontend Web Dev /{" "}
        <span className="line-through text-primary">Introvert</span> Nolep
      </p>

      <p className="text-foreground/60 mt-4 leading-7">
        self-taught developer,{" "}
        <span className="py-1 px-2 bg-secondary select-none text-sm">
          NextJS
        </span>{" "}
        and{" "}
        <span className="py-1 px-2 bg-secondary select-none text-sm">
          Laravel
        </span>{" "}
        enthusiast, passionate about making something useful using my magic
        finger
      </p>
      <p className="text-foreground/60 mt-4 leading-7">
        like other self-taught developers, I also master several technologies
      </p>

      <ul className="list-disc pl-4 mt-2">
        <li>NextJS</li>
        <li>Tailwind</li>
        <li>Laravel</li>
        <li>Livewire</li>
        <li>tRPC</li>
        <li>Postgresql</li>
        <li>Git</li>
        <li>Linux</li>
        <li className="text-foreground/30">Still learning more...</li>
      </ul>

      <p className="text-foreground/60 mt-4 leading-7">
        i graduated in 2023 from a vocational high school majoring in software
        engineering and got my first job as IT support in 2023 until now
      </p>

      <p className="text-foreground/60 mt-4 leading-7">
        recently I have completed a project called{" "}
        <a
          href="https://forumgw.vercel.app"
          className="text-sky-500 hover:underline underline-offset-4 transition-all cursor-pointer"
        >
          forumgw
        </a>
        , an informal community for public or even anonymous discussions
      </p>

      <p className="text-foreground/60 mt-4 leading-7">
        let&apos;s collaborate with me, find me in another places
      </p>

      <ul className="mt-2 flex items-center gap-x-6 gap-y-2 list-disc pl-4 flex-wrap">
        <li>
          <a
            className="text-sky-500 hover:underline underline-offset-4 transition-all cursor-pointer"
            href="https://github.com/AdiCahyaSaputra"
          >
            github
          </a>
        </li>
        <li>
          <a
            className="text-sky-500 hover:underline underline-offset-4 transition-all cursor-pointer"
            href="https://www.linkedin.com/in/adi-cahya-saputra-746a8423b"
          >
            linkedin
          </a>
        </li>
        <li>
          <a
            className="text-sky-500 hover:underline underline-offset-4 transition-all cursor-pointer"
            href="https://www.youtube.com/@adics"
          >
            youtube
          </a>
        </li>
        <li>
          <a
            className="text-sky-500 hover:underline underline-offset-4 transition-all cursor-pointer"
            href="https://www.instagram.com/adi.tsx"
          >
            instagram
          </a>
        </li>
      </ul>
    </main>
  );
};

export default Page;
