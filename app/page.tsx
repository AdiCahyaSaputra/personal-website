import { NextPage } from "next"

import Navbar from "components/reusable/global/Navbar"
import HeroSection from "components/section/HeroSection"
import AboutSection from "components/section/AboutSection"
import SkillSection from "components/section/SkillSection"
import ExperienceSection from "components/section/ExperienceSection"
import FooterSection from "components/section/FooterSection"

const Page: NextPage = () => {
  return (
    <>
      <main className="bg-white dark:bg-background w-full">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ExperienceSection />
      </main>

      <FooterSection />
    </>
  )
}

export default Page
