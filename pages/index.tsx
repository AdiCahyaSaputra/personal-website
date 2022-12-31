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

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000" fillOpacity="1" d="M0,160L1440,224L1440,0L0,0Z"></path></svg>

        <ProjectSection />
        <SkillSection />
        <BlogSection />


      </main>

      <FooterSection />
    </>
  )
}

export default Home
