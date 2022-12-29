import React from 'react'
import Container, { container } from "../reusable/global/Container"

type Props = {
  startAnimate: boolean
}

const HeroSection: React.FC<Props> = ({ startAnimate }) => {
  return (
    <section className="flex bg-black text-white flex-col justify-center h-screen" >
      <Container className={container({ size: "medium" })}>

        <h1 className={`text-3xl font-bold text-white/80 selection:text-black selection:bg-white`}>
          Just A <span className={`transition-all delay-500 ${startAnimate ? 'text-white' : 'text-white/80'}`}>Fullstuck</span> Developer <br />From Indonesia
        </h1>
        <div className="mt-4 text-white/60 select-none">
          <p>{"I'm Vocational High School Student Of Software Engineer"}</p>
          <p>{"Interest In Frontend Development, UI & UX Design, And Problem Solving"}</p>
        </div>
        <a href="#contact" className="py-2 px-4 bg-white w-max text-black mt-6 font-bold
              hover:bg-transparent hover:text-white border-2 border-white select-none inline-block
              active:scale-95">
          Open To Collaborate With You {':)'}
        </a>

      </Container>
    </section >
  )
}

export default HeroSection
