// Lib
import { NextPage } from "next"
import Head from "next/head"
import Image from 'next/image'
import { useState, useEffect } from "react"
import FeaturedIMG from '../public/img/featured.jpg'

// Components
import Navbar from "../components/reusable/global/Navbar"
import Container, { container } from "../components/reusable/global/Container"
import HeroSection from "../components/section/HeroSection"

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
      <Navbar startAnimate={startAnimate} />
      <main>
        <HeroSection startAnimate={startAnimate} />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000" fillOpacity="1" d="M0,160L1440,224L1440,0L0,0Z"></path></svg>
        <section className="bg-white pb-10">

          <Container className={container({ size: "medium", className: "h-full" })}>
            <div>
              <h1 className="text-3xl font-bold selection:text-white selection:bg-black">What Have I Done</h1>
              <p className="text-lg selection:text-white selection:bg-black">
                While Working On Programming Hell
              </p>
            </div>
            <figure className="mt-4 select-none">
              <div className="lg:w-8/12 overflow-hidden group cursor-pointer bg-black aspect-video relative">
                <Image
                  src={FeaturedIMG}
                  alt="Featured IMG"
                  className="absolute inset-0 group-hover:scale-95 transition-all"
                />
              </div>
              <figcaption className="cursor-pointer mt-4 group">
                <a className="text-2xl group-hover:underline font-bold">Rental Mobil</a>
                <p className="text-lg">The Place To Rent Your Car If You Need Emergency Money</p>
              </figcaption>
            </figure>
            <a className="select-none cursor-pointer lg:w-max w-full text-center text-white hover:text-black border-2 border-black hover:bg-transparent py-2 px-4 active:scale-95 mt-6 inline-block text-lg font-medium bg-black">See More Project</a>
          </Container>

        </section>

        <section className="mt-6 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#000" fillOpacity="1" d="M0,192L1440,160L1440,320L0,320Z"></path>
          </svg>
          <div className="bg-black border-2 border-black py-4">
            <Container className={container({ size: "medium" })}>
              <div>
                <h1 className="text-2xl font-bold">Tech Stack Or Tools</h1>
                <p className="text-lg text-white/80">{"I've Currently Used"}</p>
              </div>
              <ul className="grid grid-cols-12 gap-4 mt-4">
                <li className="font-medium col-span-6 md:col-span-4 lg:col-span-3 py-2 px-4 bg-black border-2 border-white text-white">
                  Next JS
                </li>
                <li className="font-medium col-span-6 md:col-span-4 lg:col-span-3 py-2 px-4 bg-red-600 border-2 border-white text-white">
                  Laravel
                </li>
                <li className="font-medium col-span-6 md:col-span-4 lg:col-span-3 py-2 px-4 bg-sky-600 border-2 border-white text-white">
                  Tailwind CSS
                </li>
                <li className="font-medium col-span-6 md:col-span-4 lg:col-span-3 py-2 px-4 bg-blue-600 border-2 border-white text-white">
                  Typescript
                </li>
                <li className="font-medium col-span-6 md:col-span-4 lg:col-span-3 py-2 px-4 bg-blue-800 border-2 border-white text-white">
                  My SQL
                </li>
                <li className="font-medium col-span-6 md:col-span-4 lg:col-span-3 py-2 px-4 bg-orange-600 border-2 border-white text-white">
                  Git
                </li>
              </ul>
            </Container>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="rotate-180">
            <path fill="#000" fillOpacity="1" d="M0,192L1440,160L1440,320L0,320Z"></path>
          </svg>
        </section>
      </main>
    </>
  )
}

export default Home
