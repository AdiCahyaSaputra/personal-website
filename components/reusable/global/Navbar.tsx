import Container, { container } from "./Container"
import { cva } from 'class-variance-authority'
import { Bars3CenterLeftIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

const navLink = cva("cursor-pointer", {
  variants: {
    intent: {
      deactive: "text-white/40 hover:text-white",
      active: "font-bold text-white py-2 px-4 rounded bg-white/20"
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

  useEffect(() => {
    const to = setTimeout(() => {
      setStartAnimate(true)
    }, 300)

    return () => clearTimeout(to)
  }, [])

  const navItems = [
    {
      className: navLink({ intent: router.asPath === "/" ? 'active' : 'deactive' }),
      link: '/',
      name: 'Me'
    },
    {
      className: navLink({ intent: router.asPath.includes("/projects") ? 'active' : 'deactive' }),
      link: '/projects',
      name: 'Projects'
    },
    {
      className: navLink({ intent: router.asPath.includes("/blog") ? 'active' : 'deactive' }),
      link: '/blog',
      name: 'Blog'
    },
  ]

  return (
    <>
      <div className="absolute inset-x-0 top-0 h-[65px] bg-black"></div>
      <nav className={`select-none ${isActive ? 'bg-black' : 'bg-black/40'} backdrop-blur-md z-50 text-white border-b sticky inset-x-0 top-0 border-white/20`}>
        <Container className={container({ size: "large" })}>

          <div className="flex items-center py-4 justify-between">

            <h1 onClick={() => router.push('/')} className="text-xl font-bold cursor-pointer">
              <span className={`border-b-2 ${startAnimate ? 'border-white' : 'border-white/40'} transition-all`}>Adi</span>cs.
            </h1>

            <ul className={`transition-all md:flex md:items-center md:space-x-4 md:static fixed md:translate-y-0 ${isActive ? 'top-0 translate-y-[65px]' : 'bottom-0 -translate-y-[65px]'} inset-x-0 p-8 md:p-0 md:bg-transparent bg-black md:border-none border-b border-white/20 space-y-4 md:space-y-0`}>
              {navItems.map((nav, index) => (
                <li key={index}>
                  <a
                    onClick={() => router.push(nav.link)}
                    className={nav.className}>
                    {nav.name}
                  </a>
                </li>
              ))}
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
