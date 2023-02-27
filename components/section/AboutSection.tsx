import Container, { container } from 'components/reusable/global/Container'
import React from 'react'

const AboutSection: React.FC = () => {
  return (
    <section className='py-10 text-white selection:bg-white selection:text-black'>
      <Container className={container({ size: "large" })}>

        <div className='border-t-2 space-x-4 font-semibold py-2 flex justify-between items-center uppercase tracking-widest border-white'>
          <p>About</p>

          <div className='w-full space-y-2'>
            <div className='w-full bg-white h-px' />
            <div className='w-full bg-white h-px' />
          </div>

          <p>Personal</p>
        </div>

        <div className='grid grid-cols-12 gap-x-6 mt-4 gap-y-4'>

          <div className='md:col-span-4 col-span-12 tracking-wide'>
            <p>
              Hello, My name&apos;s Adi Cahya Saputra. Currently I live in Jakarta, Indonesia as a Vocational High School student and will graduate this year
            </p>
          </div>
          <div className='md:col-span-4 col-span-12 tracking-wide'>
            <p>
              After graduating, I want to continue studying in college and looking for as many relationship as possible while also trying many new thing such as freelancing or contributing to open source projects
            </p>
          </div>
          <div className='md:col-span-4 col-span-12 tracking-wide'>
            <p>
              I like to spend my day to learn something new or digging deeper about the topics that I have learned before.
            </p>
          </div>

        </div>

      </Container>
    </section>
  )
}

export default AboutSection
