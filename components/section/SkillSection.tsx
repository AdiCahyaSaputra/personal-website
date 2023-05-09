import Container, { container } from 'components/reusable/global/Container'
import React from 'react'

const SkillSection: React.FC = () => {
  return (
    <section className='py-10 text-white selection:bg-white selection:text-black'>
      <Container className={container({ size: "large" })}>

        <div className='w-full flex gap-4 items-center flex-wrap lg:flex-nowrap'>

          <div className='lg:w-6/12 w-full order-1 lg:order-2 lg:text-center'>
            <h1 className='text-2xl lg:pr-10 font-bold tracking-widest uppercase'>Tech Stack</h1>
            <h1 className='text-2xl lg:pl-10 font-bold tracking-widest uppercase'><span className='text-red-700'>Or</span> Tools</h1>
          </div>

          <div className='lg:order-1 order-2 lg:w-3/12 w-full lg:p-4 space-y-4'>

            <div>
              <h1 className='font-bold text-xl pb-2 border-b-2 border-white lg:w-max'>Frontend</h1>
              <ul className='text-lg flex items-center space-x-2 mt-2'>
                <li className='hover:text-sky-500'>React&nbsp;JS</li>
                <li>Next&nbsp;JS</li>
                <li className='hover:text-cyan-500'>Tailwind&nbsp;CSS</li>
              </ul>
            </div>

            <div className='lg:pl-4'>
              <h1 className='font-bold text-xl pb-2 border-b-2 border-white lg:w-max'>Backend</h1>
              <ul className='text-lg flex items-center space-x-2 mt-2'>
                <li className='hover:text-red-600'>Laravel</li>
                <li>Next&nbsp;JS</li>
              </ul>
            </div>

          </div>

          <div className='order-3 lg:w-3/12 w-full lg:flex flex-col items-end items-start lg:p-4 space-y-4'>

            <div>
              <h1 className='font-bold text-xl pb-2 border-b-2 border-white lg:w-max'>Database</h1>
              <ul className='flex text-lg items-center space-x-2 mt-2'>
                <li className='hover:text-blue-600'>MySQL</li>
                <li className='hover:text-purple-500'>MariaDB</li>
              </ul>
            </div>

            <div className='pr-4'>
              <h1 className='font-bold text-xl pb-2 border-b-2 border-white lg:w-max'>Others</h1>
              <ul className='flex text-lg items-center space-x-2 mt-2'>
                <li className='hover:text-green-600'>Neovim&nbsp;(IDE)</li>
                <li className='hover:text-orange-600'>Git</li>
              </ul>
            </div>

          </div>

        </div>

        <ul className='flex space-x-3 text-lg lg:justify-center items-center lg:py-4 mt-10'>
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
