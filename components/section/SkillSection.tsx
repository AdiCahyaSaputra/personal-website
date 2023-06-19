import Container, { container } from 'components/reusable/global/Container'
import React from 'react'

const SkillSection: React.FC = () => {
  return (
    <section className='py-10 text-foreground'>
      <Container className={container({ size: "large" })}>

        <div className='w-full flex gap-4 items-center flex-wrap'>

          <div className='w-full order-1'>
            <h1 className='text-2xl font-bold tracking-widest uppercase'>Tech Stack</h1>
            <h1 className='text-2xl font-bold tracking-widest uppercase'><span className='dark:text-red-700 text-blue-700'>Or</span> Tools</h1>
          </div>

          <div className='order-2 cursor-default w-full space-y-4'>

            <div>
              <h1 className='font-bold text-xl pb-2 border-b-2 border-foreground'>Frontend</h1>
              <ul className='text-lg text-foreground/80 flex items-center space-x-2 mt-2'>
                <li className='hover:text-sky-500'>React&nbsp;JS</li>
                <li className='hover:text-black dark:hover:text-white'>Next&nbsp;JS</li>
                <li className='hover:text-cyan-500'>Tailwind&nbsp;CSS</li>
              </ul>
            </div>

            <div>
              <h1 className='font-bold text-xl pb-2 border-b-2 border-foreground'>Backend</h1>
              <ul className='text-lg text-foreground/80 flex items-center space-x-2 mt-2'>
                <li className='hover:text-red-600'>Laravel</li>
                <li className='hover:text-black dark:hover:text-white'>Next&nbsp;JS</li>
              </ul>
            </div>

          </div>

          <div className='order-3 cursor-default w-full space-y-4'>

            <div>
              <h1 className='font-bold text-xl pb-2 border-b-2 border-foreground'>Database</h1>
              <ul className='flex text-foreground/80 text-lg items-center space-x-2 mt-2'>
                <li className='hover:text-blue-600'>MySQL</li>
                <li className='hover:text-purple-500'>MariaDB</li>
              </ul>
            </div>

            <div className='pr-4'>
              <h1 className='font-bold text-xl pb-2 border-b-2 border-foreground'>Others</h1>
              <ul className='flex text-foreground/80 text-lg items-center space-x-2 mt-2'>
                <li className='hover:text-green-600'>Neovim&nbsp;(IDE)</li>
                <li className='hover:text-orange-600'>Git</li>
                <li className='hover:text-blue-800'>Linux</li>
              </ul>
            </div>

          </div>

        </div>

        <ul className='flex cursor-default space-x-3 text-lg items-center mt-10'>
          <li className='hover:text-blue-500'>Typescript</li>
          <li className='hover:text-yellow-500'>Javascript</li>
          <li className='hover:text-green-700'>Node&nbsp;JS</li>
          <li className='hover:text-purple-700'>PHP</li>
        </ul>

      </Container>
    </section>
  )
}

export default SkillSection
