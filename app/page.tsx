import AboutMe from "@/components/section/AboutMe";
import HeadContent from "@/components/section/HeadContent";
import SocialMedia from "@/components/section/SocialMedia";
import TechnicalSkills from "@/components/section/TechnicalSkills";
import { Separator } from "@/components/ui/separator";

const Page = () => {
  return (
    <main className="mt-10">
      <HeadContent />
      <Separator className="my-4" />
      <AboutMe />

      <div>
        <TechnicalSkills />
        <SocialMedia />
      </div>
    </main>
  );
};

export default Page;
