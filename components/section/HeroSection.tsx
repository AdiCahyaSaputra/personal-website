import React from 'react'
import Container, { container } from "../reusable/global/Container"
import { motion } from 'framer-motion'
import { stagger, headlineAnimate } from 'lib/motion/variants'
import WordAnimate from 'components/reusable/text/WordAnimate'

const headlineText = [
  "Just A Fullstuck Developer",
  "From Indonesia"
]

const HeroSection: React.FC = () => {

  const clickHandler = () => {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight)
    }, 500);
  }

  return (
    <motion.section
      initial='hidden'
      animate='show'
      className="flex bg-black text-white flex-col justify-center h-screen" >
      <Container className={container({ size: "medium" })}>

        <motion.div
          variants={stagger}
        >
          <div className={`overflow-hidden text-3xl transition-all font-bold text-white selection:text-black selection:bg-white w-max`}>
            {headlineText.map((text, index) => (
              <WordAnimate text={text} key={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-4 text-white/60 select-none overflow-hidden"
          variants={stagger}
        >
          <motion.p
            variants={{
              hidden: {
                opacity: .2
              },
              show: {
                opacity: 1,
                transition: {
                  ease: 'easeIn',
                  duration: '.8'
                }
              }
            }}
          >
            {"I'm vocational high school student of Software Engineer"}
          </motion.p>
          <motion.p
            variants={{
              hidden: {
                opacity: .2
              },
              show: {
                opacity: 1,
                transition: {
                  ease: 'easeIn',
                  duration: '.8'
                }
              }
            }}
          >
            Interest in Frontend Development, UI & UX Design, And problem solving
          </motion.p>
        </motion.div>

        <div className='overflow-hidden'>
          <motion.div
            initial={{
              y: '200%',
            }}
            animate={{
              y: 0
            }}
            className="transition-all duration-500 relative mt-6 w-max group overflow-hidden">
            <button onClick={clickHandler} className="py-2 px-4 bg-transparent w-max text-white font-bold
            border-2 border-white select-none group-hover:text-black cursor-pointer
            active:scale-95 relative z-10 transition-all duration-500">
              Open to collaborate with you {':)'}
            </button>
            <div className="z-0 absolute py-2 px-4 left-0 top-0 w-full h-full bg-white -translate-x-full group-hover:translate-x-0 transition-all duration-500" />
          </motion.div>
        </div>

      </Container>
    </motion.section>
  )
}

export default HeroSection
