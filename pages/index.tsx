// Lib
import { NextPage } from "next"
import Head from "next/head"

// Components
import Navbar from "../components/reusable/global/Navbar"
import HeroSection from "../components/section/HeroSection"
import FooterSection from "../components/section/FooterSection"
import AboutSection from "components/section/AboutSection"
import SkillSection from "components/section/SkillSection"

const Home: NextPage = () => {
  return (
    <>

      <Head>
        <title>Adics</title>
      </Head>

      <main className="bg-black">
        <Navbar />
        <HeroSection />
        <AboutSection/>
        <SkillSection/>
      </main>

      <FooterSection />
    </>
  )
}

export default Home
