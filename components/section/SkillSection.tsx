import Container, { container } from 'components/reusable/global/Container'
import React from 'react'

const SkillSection: React.FC = () => {
  return (
    <section className='py-10 text-white selection:bg-white selection:text-black'>
      <Container className={container({ size: "large" })}>

        <div className='w-full flex gap-4 items-center flex-wrap md:flex-nowrap'>

          <div className='md:w-6/12 w-full order-1 md:order-2 md:text-center'>
            <h1 className='text-2xl md:pr-10 font-bold tracking-widest uppercase'>Tech Stack</h1>
            <h1 className='text-2xl md:pl-10 font-bold tracking-widest uppercase'><span className='text-red-700'>Or</span> Tools</h1>
          </div>

          <div className='md:order-1 order-2 md:w-3/12 w-full md:p-4 space-y-4'>

            <div>
              <h1 className='font-bold text-xl pb-2 border-b-2 border-white md:w-max'>Frontend</h1>
              <ul className='text-lg flex items-center space-x-2 mt-2'>
                <li className='hover:text-sky-500'>React&nbsp;JS</li>
                <li>Next&nbsp;JS</li>
                <li className='hover:text-cyan-500'>Tailwind&nbsp;CSS</li>
              </ul>
            </div>

            <div className='md:pl-4'>
              <h1 className='font-bold text-xl pb-2 border-b-2 border-white md:w-max'>Backend</h1>
              <ul className='text-lg flex items-center space-x-2 mt-2'>
                <li className='hover:text-red-600'>Laravel</li>
                <li>Next&nbsp;JS</li>
              </ul>
            </div>

          </div>

          <div className='order-3 md:w-3/12 w-full md:flex flex-col items-end items-start md:p-4 space-y-4'>

            <div>
              <h1 className='font-bold text-xl pb-2 border-b-2 border-white md:w-max'>Database</h1>
              <ul className='flex text-lg items-center space-x-2 mt-2'>
                <li className='hover:text-blue-600'>MySQL</li>
                <li className='hover:text-purple-500'>MariaDB</li>
              </ul>
            </div>

            <div className='pr-4'>
              <h1 className='font-bold text-xl pb-2 border-b-2 border-white md:w-max'>Others</h1>
              <ul className='flex text-lg items-center space-x-2 mt-2'>
                <li className='hover:text-green-600'>Neovim&nbsp;(IDE)</li>
                <li className='hover:text-orange-600'>Git</li>
              </ul>
            </div>

          </div>

        </div>

        <ul className='flex space-x-3 text-lg md:justify-center items-center md:py-4 mt-10'>
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
