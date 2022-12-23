// Lib
import { NextPage } from "next"
import Head from "next/head"
import Image from 'next/image'
import { useState, useEffect } from "react"
import FeaturedIMG from '../public/img/featured.jpg'

// Components
import Navbar from "../components/reusable/global/Navbar"
import Container, { container } from "../components/reusable/global/Container"

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
        <section className="flex bg-black text-white flex-col justify-center h-screen">
          <Container className={container({ size: "medium" })}>

            <h1 className={`text-3xl font-bold text-white/80 selection:text-black selection:bg-black`}>
              Just A <span className={`transition-all delay-500 ${startAnimate ? 'text-white' : 'text-white/40'}`}>Fullstuck</span> Developer <br />From Indonesia
            </h1>
            <div className="mt-4 text-white/60 select-none">
              <p>{"I'm Vocational School Student Of Software Engineer"}</p>
              <p>{"Interest In Frontend Development, UI & UX Design, And Problem Solving"}</p>
            </div>
            <button className="py-2 px-4 bg-white w-max text-black mt-6 font-bold
              hover:bg-transparent hover:text-white border-2 border-white select-none
              active:scale-95">
              Open To Collaborate With You {':)'}
            </button>

          </Container>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000" fillOpacity="1" d="M0,160L1440,224L1440,0L0,0Z"></path></svg>
        <section className="bg-white min-h-screen pb-10">

          <Container className={container({ size: "medium", className: "h-full" })}>
            <div>
              <h1 className="text-3xl font-bold">What Have I Done</h1>
              <p className="text-lg">
                While Working On Programming Hell
              </p>
            </div>
            <figure className="mt-4">
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
            <a className="cursor-pointer lg:w-max w-full text-center text-white hover:text-black border-2 border-black hover:bg-transparent py-2 px-4 active:scale-95 mt-6 inline-block text-lg font-medium bg-black">See More Project</a>
          </Container>

        </section>
      </main>
    </>
  )
}

export default Home
