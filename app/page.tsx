import SkillsSection from "@/components/section/SkillsSection";
import SocialMediaSection from "@/components/section/SocialMediaSection";

const Page = () => {
  return (
    <main className="mt-10">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        <span className="pb-1 border-b-4 border-primary">Adi</span>{" "}
        <span className="pb-1 border-b-4 border-secondary">Cahya Saputra</span>{" "}
      </h1>

      <p className="text-foreground/60 mt-8 leading-7">
        self-taught developer,{" "}
        <span className="py-1 px-2 bg-secondary text-white select-none text-sm">
          NextJS
        </span>{" "}
        and{" "}
        <span className="py-1 px-2 bg-secondary text-white select-none text-sm">
          Laravel
        </span>{" "}
        enthusiast, passionate about making something useful using my magic
        finger
      </p>
      <p className="text-foreground/60 mt-4 leading-7">
        like other self-taught developers, I also master several technologies
      </p>

      <SkillsSection />

      <p className="text-foreground/60 mt-4 leading-7">
        I was born in Jakarta in 2005, graduated in 2023 from a vocational high
        school majoring in software engineering and got my first job as IT
        support in 2023 until now
      </p>

      <p className="text-foreground/60 mt-4 leading-7">
        recently I have completed a project called{" "}
        <a
          href="https://forumgw.vercel.app"
          className="text-sky-500 hover:underline underline-offset-4 transition-all cursor-pointer"
        >
          ForumGW
        </a>
        , an informal community for public or even anonymous discussions
      </p>

      <p className="text-foreground/60 mt-4 leading-7">
        let&apos;s collaborate with me, find me in another places
      </p>

      <SocialMediaSection />
    </main>
  );
};

export default Page;
