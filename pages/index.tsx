// Lib
import { NextPage } from "next"
import Head from "next/head"
import { useState, useEffect } from "react"

// Components
import Navbar from "../components/reusable/global/Navbar"
import BlogSection from "../components/section/BlogSection"
import HeroSection from "../components/section/HeroSection"
import ProjectSection from "../components/section/ProjectSection"
import SkillSection from "../components/section/SkillSection"
import Container, { container } from "../components/reusable/global/Container"

import { EnvelopeIcon, AtSymbolIcon, PlayIcon } from "@heroicons/react/24/outline"

const Home: NextPage = () => {
  const [startAnimate, setStartAnimate] = useState(false)

  useEffect(() => {
    const to = setTimeout(() => {
      setStartAnimate(true)
    }, 300)

    return () => clearTimeout(to)
  }, [])

  return (
    <>

      <Head>
        <title>Adics</title>
      </Head>

      <main>
        <div className="absolute inset-x-0 top-0 h-[65px] bg-black"></div>
        <Navbar startAnimate={startAnimate} />
        <HeroSection startAnimate={startAnimate} />

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000" fillOpacity="1" d="M0,160L1440,224L1440,0L0,0Z"></path></svg>

        <ProjectSection />
        <SkillSection />
        <BlogSection />


      </main>

      <footer id="contact" className="p-4 bg-black select-none h-screen text-white relative">
        <Container className={container({ size: "large" })}>

          <div className="mt-8">
            <h3 className="text-xl font-bold">You Can Contact Me Via Email</h3>
            <div className="flex space-x-2 items-end">
              <EnvelopeIcon className="w-6 aspect-square" />
              <p className="text-xl mt-2 text-white/80 select-all selection:bg-white selection:text-black">adics631@gmail.com</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold">Also Follow My Social Media</h3>
            <div className="flex flex-col">
              <a href="https://www.instagram.com/adi.tsx" className="hover:underline text-xl mt-2 text-white/80">/adi.tsx</a>
              <a href="https://www.youtube.com/@adics" className="hover:underline text-xl mt-2 text-white/80">/@adics</a>
              <a href="https://github.com/AdiCahyaSaputra" className="hover:underline text-xl mt-2 text-white/80">/AdiCahyaSaputra</a>
            </div>
          </div>

          <div className="absolute bottom-0 border-t border-white/30 lg:text-xl text-lg inset-x-0 py-4">
            <Container className={container({ size: "large", className: "items-center justify-between flex" })}>
              <h3>&copy; Copyright 2023 </h3>
              <p>Adi Cahya Saputra</p>
            </Container>
          </div>

        </Container>
      </footer>
    </>
  )
}

export default Home
