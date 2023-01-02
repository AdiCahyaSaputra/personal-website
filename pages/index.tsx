// Lib
import { NextPage } from "next"
import Head from "next/head"

// Components
import Navbar from "../components/reusable/global/Navbar"
import BlogSection from "../components/section/BlogSection"
import HeroSection from "../components/section/HeroSection"
import ProjectSection from "../components/section/ProjectSection"
import SkillSection from "../components/section/SkillSection"
import FooterSection from "../components/section/FooterSection"

const Home: NextPage = () => {
  return (
    <>

      <Head>
        <title>Adics</title>
      </Head>

      <main>
        <Navbar />
        <HeroSection />
        <ProjectSection />
        <SkillSection />
        <BlogSection />


      </main>

      <FooterSection />
    </>
  )
}

export default Home
