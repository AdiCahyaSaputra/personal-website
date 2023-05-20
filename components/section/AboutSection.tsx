import Container, { container } from 'components/reusable/global/Container'
import React from 'react'

const AboutSection: React.FC = () => {
  return (
    <section className='pb-20 text-white selection:bg-white selection:text-black'>
      <Container className={container({ size: "large" })}>

        <div className='border-t-2 space-x-4 font-semibold py-2 flex justify-between items-center uppercase tracking-widest border-white'>
          <p className='text-xl'>Personal</p>

          <div className='w-full space-y-2'>
            <div className='w-full bg-white h-px' />
            <div className='w-full bg-white h-px' />
          </div>

          <p className='text-xl'>Info</p>
        </div>

        <div className='grid grid-cols-12 text-white font-light text-lg gap-x-6 mt-4 gap-y-4'>

          <div className='lg:col-span-4 col-span-12 tracking-wide'>
            <p>
              Hello, My name&apos;s <span className='font-normal'>Adi Cahya Saputra</span>. Currently I live in <span className='font-normal'>Jakarta</span>, Indonesia as a Student majoring in <span className='font-normal'>Informatics Engineering</span>
            </p>
          </div>
          <div className='lg:col-span-4 col-span-12 tracking-wide'>
            <p>
              I like to spend my day honing my Frontend Development skills to create <span className='font-normal'>beautifully designed</span> and <span className='font-normal'>high performing</span> website that captivate audiences and drive results.
            </p>
          </div>
          <div className='lg:col-span-4 col-span-12 tracking-wide'>
            <p>
              I can transform your <span className='font-normal'>ideas</span> into a seamless digital reality, delivering <br/><span className='font-normal'>pixel-perfect</span> designs and flawless user interfaces for your website.
            </p>
          </div>

        </div>

      </Container>
    </section>
  )
}

export default AboutSection
