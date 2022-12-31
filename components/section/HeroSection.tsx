import React from 'react'
import Container, { container } from "../reusable/global/Container"

const HeroSection: React.FC = () => {

  const clickHandler = () => {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight)
    }, 500);
  }

  return (
    <section className="flex bg-black text-white flex-col justify-center h-screen" >
      <Container className={container({ size: "medium" })}>

        <h1 className={`text-3xl transition-all font-bold text-white hover:text-white/60 group selection:text-black selection:bg-white w-max`}>
          Just A <span className={`group-hover:text-white`}>Fullstuck</span> Developer <br />From Indonesia
        </h1>
        <div className="mt-4 text-white/60 select-none">
          <p>{"I'm Vocational High School Student Of Software Engineer"}</p>
          <p>{"Interest In Frontend Development, UI & UX Design, And Problem Solving"}</p>
        </div>
        <div className="relative mt-6 w-max group overflow-hidden">
          <a onClick={clickHandler} className="py-2 px-4 bg-transparent w-max text-white font-bold
            border-2 border-white select-none inline-block group-hover:text-black cursor-pointer
            active:scale-95 relative z-10 transition-all duration-500">
            Open To Collaborate With You {':)'}
          </a>
          <div className="z-0 absolute py-2 px-4 left-0 top-0 w-full h-full bg-white -translate-x-full group-hover:translate-x-0 transition-all duration-500" />
        </div>

      </Container>
    </section >
  )
}

export default HeroSection
