import React from 'react'

// Components
import Container, { container } from "../reusable/global/Container"

// Icons
import { EnvelopeIcon } from "@heroicons/react/24/outline"

const FooterSection: React.FC = () => {

  const clickHandler = () => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 500);
  }

  return (
    <footer id="contact" className="p-4 border-t border-white/60 bg-black select-none h-screen text-white relative">
      <Container className={container({ size: "large" })}>

        <div className="mt-8">
          <h3 className="text-xl font-bold">You Can Contact Me Via Email</h3>
          <div className="flex space-x-2 items-end">
            <EnvelopeIcon className="w-6 aspect-square" />
            <p className="text-xl mt-2 text-white/80 select-all selection:bg-white selection:text-black">adics631@gmail.com</p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold">Or From The Other Links ?</h3>
          <div className="flex flex-col">
            <a href="https://www.instagram.com/adi.tsx" className="hover:underline text-xl mt-2 text-white/80">/adi.tsx</a>
            <a href="https://www.youtube.com/@adics" className="hover:underline text-xl mt-2 text-white/80">/@adics</a>
            <a href="https://github.com/AdiCahyaSaputra" className="hover:underline text-xl mt-2 text-white/80">/AdiCahyaSaputra</a>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold">Something Is Missing ?</h3>
          <p className="text-lg text-white/80 mt-2">Maybe I should not be here for now</p>
          <div onClick={clickHandler} className="relative cursor-pointer w-max mt-4 group overflow-hidden">
            <button className="text-lg active:scale-95 font-bold group-hover:text-black transition-all duration-500 w-max py-2 px-4 bg-transparent border-2 border-white text-white relative z-10">
              Restart From Top
            </button>
            <div className="z-0 absolute left-0 top-0 w-full h-full translate-y-full group-hover:translate-y-0 transition-all duration-500 bg-white" />
          </div>
        </div>

        <div className="absolute bottom-0 border-t border-white/30 lg:text-xl text-lg inset-x-0 py-4">
          <Container className={container({ size: "large", className: "items-center justify-between flex" })}>
            <h3>&copy; 2023 </h3>
            <p>Adi Cahya Saputra</p>
          </Container>
        </div>

      </Container>
    </footer>
  )
}

export default FooterSection
