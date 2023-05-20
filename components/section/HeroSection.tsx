import React from 'react'
import Container, { container } from "../reusable/global/Container"

const HeroSection: React.FC = () => {

  const clickHandler = () => {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight)
    }, 500);
  }

  return (
    <section
      className="flex bg-black text-white flex-col justify-center h-screen" >
      <Container className={container({ size: "large" })}>

        <div className={`overflow-hidden text-3xl transition-all font-bold text-white selection:text-black selection:bg-white w-max leading-[40px]`}>
          <h1>
            Fullstuck Person Who Will <br />
            Help You <span className='underline decoration-wavy decoration-red-600 underline-offset-[5px] decoration-from-font'>Realize</span> Your Idea
          </h1>
        </div>

        <div className="mt-4 text-lg text-white/60 select-none overflow-hidden">
          <p>
            Passionate in the field of Software Engineering
          </p>
          <p>
            Interest in Frontend Development, UI/UX Design, and You
          </p>
        </div>

        <div className='overflow-hidden'>
          <div className="transition-all duration-500 relative mt-6 w-max group overflow-hidden">

            <button onClick={clickHandler} className="py-2 px-4 bg-transparent w-max text-white font-bold
            border-2 border-white select-none group-hover:text-black cursor-pointer
            active:scale-95 relative z-10 transition-all duration-500">
              Open to collaborate with you {':)'}
            </button>
            <div className="z-0 absolute py-2 px-4 left-0 top-0 w-full h-full bg-white -translate-x-full group-hover:translate-x-0 transition-all duration-500" />

          </div>
        </div>

      </Container>
    </section>
  )
}

export default HeroSection
