import Container, { container } from "./Container"
import { cva } from 'class-variance-authority'
import { Bars3CenterLeftIcon } from '@heroicons/react/24/outline'
import { useState } from "react"

const navLink = cva("font-medium cursor-pointer", {
  variants: {
    intent: {
      deactive: "text-white/40 hover:text-white",
      active: "text-white py-2 px-4 rounded bg-white/20"
    }
  },
  defaultVariants: {
    intent: "deactive"
  }
})

type Props = {
  startAnimate: boolean
}

const Navbar: React.FC<Props> = ({ startAnimate }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <nav className={`select-none ${isActive ? 'bg-black' : 'bg-black/40'} backdrop-blur-md z-50 text-white border-b sticky inset-x-0 top-0 border-white/20`}>
      <Container className={container({ size: "large" })}>

        <div className="flex items-center py-4 justify-between">

          <h1 className="text-xl font-bold cursor-pointer">
            <span className={`border-b-2 ${startAnimate ? 'border-white' : 'border-white/40'} transition-all`}>Adi</span>cs.
          </h1>

          <ul className={`transition-all md:flex md:items-center md:space-x-4 md:static fixed md:translate-y-0 ${isActive ? 'top-0 translate-y-[65px]' : 'bottom-0 -translate-y-[65px]'} inset-x-0 p-8 md:p-0 md:bg-transparent bg-black md:border-none border-b border-white/20 space-y-4 md:space-y-0`}>
            <li><a className={navLink({ intent: "active" })}>Me</a></li>
            <li><a className={navLink()}>Projects</a></li>
            <li><a className={navLink()}>Blog</a></li>
          </ul>

          <button onClick={() => setIsActive(!isActive)} className="md:hidden cursor-pointer">
            <Bars3CenterLeftIcon className="w-8 aspect-square rotate-180" />
          </button>

        </div>

      </Container>
    </nav>
  )
}

export default Navbar
