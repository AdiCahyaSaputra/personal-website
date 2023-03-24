import Container, { container } from 'components/reusable/global/Container'
import React from 'react'

const CurrentActivitySection: React.FC = () => {
  return (
    <section className='py-10 relative text-white selection:bg-white selection:text-black'>
      <Container className={container({ size: 'large' })}>

        <div className='flex items-center space-x-4'>

          <h1 className='font-bold uppercase tracking-widest text-lg'>Current&nbsp;Activity</h1>
          <div className='w-full space-y-2'>
            <div className='h-px w-full md:w-1/5 bg-white' />
            <div className='h-px w-full md:w-1/3 bg-white' />
          </div>

        </div>

        <div className='py-4 tracking-wide md:w-2/3 w-full space-y-4'>
          <p>I&apos;m very active in several communities on Discord and github account, so if you want to chat with me you can DM me on Discord or maybe on <a href='https://www.instagram.com/adi.tsx' className='text-sky-500 hover:underline'>Instagram</a></p>
          <p>I spent a lot of time configuring my <a href='https://github.com/AdiCahyaSaputra/my-neovim-setup' className='text-sky-500 hover:underline'>IDE</a> and learning a lot about Linux. Currently I am using WSL 2 Ubuntu</p>
          <p>In my last year of school I was very busy with final exams for the last 3 months but on the sidelines of my busy life, I took the time to create content on <a href='https://www.youtube.com/@adics' className='text-sky-500 hover:underline'>YouTube</a> about programming as well as to train my understanding of English</p>
        </div>

      </Container>
    </section>
  )
}

export default CurrentActivitySection
