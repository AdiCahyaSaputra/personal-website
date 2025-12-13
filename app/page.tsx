import AboutMe from "@/components/section/AboutMe";
import HeadContent from "@/components/section/HeadContent";
import SocialMedia from "@/components/section/SocialMedia";
import TechnicalSkills from "@/components/section/TechnicalSkills";

const Page = () => {
  return (
    <main className="mt-10">
      <HeadContent />
      <div className="py-4 border-b" />
      <AboutMe />
      <TechnicalSkills />
      <div className="pt-10 pb-4 border-b" />
      <SocialMedia />
    </main>
  );
};

export default Page;
