'use client'

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
    <footer id="contact" className="p-4 dark:bg-black/20 bg-secondary select-none h-screen text-foreground relative border-t-2 border-primary/20">
      <Container className={container({ size: "large" })}>

        <div className="mt-8">
          <h3 className="text-xl font-bold">Let&apos;s Make It Together &nbsp;{"😃"}</h3>
          <div className="flex space-x-2 items-end">
            <EnvelopeIcon className="w-6 aspect-square" />
            <p className="text-xl mt-2 text-muted-foreground select-all">adics631@gmail.com</p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold">Wanna See Me In Other Places ?</h3>
          <div className="flex flex-col">
            <a href="https://www.instagram.com/adi.tsx" className="hover:underline text-xl mt-2 text-muted-foreground hover:text-foreground">/instagram</a>
            <a href="https://www.youtube.com/@adics" className="hover:underline text-xl mt-2 text-muted-foreground hover:text-foreground">/youtube</a>
            <a href="https://github.com/AdiCahyaSaputra" className="hover:underline text-xl mt-2 text-muted-foreground hover:text-foreground">/github</a>
            <a href="https://www.linkedin.com/in/adi-cahya-saputra-746a8423b" className="hover:underline text-xl mt-2 text-muted-foreground hover:text-foreground">/linkedin</a>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold">Something Is Missing ?</h3>
          <p className="text-lg text-muted-foreground mt-2">Maybe I should not be here for now</p>
          <div onClick={clickHandler} className="relative cursor-pointer w-max mt-4 group overflow-hidden">
            <button className="text-lg active:scale-95 font-bold group-hover:text-background transition-all duration-500 w-max py-2 px-4 bg-transparent border-2 border-foreground text-foreground relative z-10">
              Restart From Top
            </button>
            <div className="z-0 absolute left-0 top-0 w-full h-full translate-y-full group-hover:translate-y-0 transition-all duration-500 bg-foreground" />
          </div>
        </div>

        <div className="absolute bottom-0 border-t border-primary/30 text-lg inset-x-0 py-4">
          <Container className={container({ size: "large", className: "items-center justify-between flex" })}>
            <h3>&copy; 2023</h3>
            <p>Adi Cahya Saputra</p>
          </Container>
        </div>

      </Container>
    </footer>
  )
}

export default FooterSection
