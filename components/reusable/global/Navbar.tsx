'use client'

import Container, { container } from "./Container"
import { cva } from 'class-variance-authority'
import { Bars3CenterLeftIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { ThemeToggle } from "./ThemeToggle"

const navLink = cva("cursor-pointer text-sm uppercase tracking-widest md:w-max w-full inline-block", {
  variants: {
    intent: {
      deactive: "text-foreground/40 hover:text-foreground",
      active: "font-bold dark:text-red-600 text-blue-600 py-2 px-4 rounded dark:bg-red-600/20 bg-blue-600/20"
    }
  },
  defaultVariants: {
    intent: "deactive"
  }
})

const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useState(false)
  const [startAnimate, setStartAnimate] = useState(false)

  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const to = setTimeout(() => {
      setStartAnimate(true)
    }, 300)

    return () => clearTimeout(to)
  }, [])

  const navItems = [
    {
      className: navLink({ intent: pathname === "/" ? 'active' : 'deactive' }),
      link: '/',
      name: 'Me'
    },
    {
      className: navLink({ intent: pathname?.includes("/projects") ? 'active' : 'deactive' }),
      link: '/projects',
      name: 'Projects'
    },
  ]

  return (
    <>
      <nav className={`select-none ${isActive ? 'dark:bg-black bg-secondary' : 'dark:bg-black/20 bg-secondary/40'} backdrop-blur-md z-50 border-b sticky inset-x-0 top-0 border-primary/20`}>
        <Container className={container({ size: "large" })}>

          <div className="flex items-center py-4 justify-between">

            <h1 onClick={() => router.push('/')} className="text-xl font-bold cursor-pointer">
              <span className={`border-b-2 ${startAnimate ? 'dark:border-red-600 border-blue-600' : 'dark:border-red-600/40 border-blue-600'} transition-all`}>Adi</span>cs.
            </h1>

            <ul className={`transition-all md:flex md:items-center md:space-x-4 md:static fixed md:translate-y-0 ${isActive ? 'top-0 translate-y-[65px]' : '-top-full -translate-y-full'} inset-x-0 p-8 md:p-0 md:bg-transparent md:dark:bg-transparent dark:bg-black bg-secondary md:border-none border-b border-primary/20 space-y-4 md:space-y-0`}>
              {navItems.map((nav, index) => (
                <li key={index}>
                  <a
                    onClick={() => router.push(nav.link)}
                    className={nav.className}>
                    {nav.name}
                  </a>
                </li>
              ))}
              <ThemeToggle />
            </ul>

            <button onClick={() => setIsActive(!isActive)} className="md:hidden cursor-pointer">
              <Bars3CenterLeftIcon className="w-8 aspect-square rotate-180" />
            </button>

          </div>

        </Container>
      </nav>
    </>
  )
}

export default Navbar
