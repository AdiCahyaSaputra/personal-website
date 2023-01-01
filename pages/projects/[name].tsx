import React from 'react'
import Head from 'next/head'
import { cva } from 'class-variance-authority'
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'

// Components
import Navbar from 'components/reusable/global/Navbar'
import BackButton from 'components/reusable/global/BackButton'
import Container, { container } from 'components/reusable/global/Container'

// Interface
import IProjectArticle from 'lib/interface/IProjectArticle'

const status = cva("font-bold", {
  variants: {
    intent: {
      onProgress: "text-yellow-600",
      done: "text-green-600",
    }
  },
  defaultVariants: {
    intent: "done"
  }
})

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const data: IProjectArticle[] = require('asset/data/projects.json')

  const currentArticle = data.find(article => article.slug === ctx.query.name)

  return {
    props: {
      currentArticle
    }
  }
}

type Props = {
  currentArticle: IProjectArticle
}

const ProjectDetail: NextPage<Props> = ({ currentArticle }) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Adics</title>
      </Head>

      <main className='bg-black text-white'>

        <Navbar />

        <section className='bg-black min-h-screen pb-10'>
          <Container className={container({ size: "medium", className: "selection:text-black selection:bg-white" })}>

            <BackButton link='/projects' />

            <div className="py-6 selection:text-black selection:bg-white border-b-2 border-white border-dashed">
              <h1 className="text-2xl font-bold">Detail Of : {currentArticle.title} (Project)</h1>
              <p className="text-lg mt-1">
                Status - <span className={status({ intent: currentArticle.status === "Done" ? "done" : "onProgress" })}>{currentArticle.status}</span>
              </p>
            </div>

            <div className='mt-4'>
              <h2 className='text-xl font-bold'>People Behind This Project</h2>
              <ul className='mt-2'>
                {currentArticle.peoples?.map((people, index) => (
                  <li key={index}><a href={people.link} className='hover:underline text-sky-500'>{people.username}</a> {people.note}</li>
                ))}
              </ul>
            </div>

            <div className='mt-4'>
              <h2 className='text-xl font-bold'>Links</h2>
              <ul className='mt-2'>
                {currentArticle.links?.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className='hover:underline text-sky-500'>{link.label}</a> {link.note}
                  </li>
                ))}
              </ul>
            </div>

            <div className='mt-4'>
              <h2 className='text-xl font-bold'>Tech Stack</h2>
              <ul className='mt-2'>
                {currentArticle.techStack?.map((tech, index) => (
                  <li key={index}><a href={tech.link} className='hover:underline text-sky-500'>{tech.name}</a> {tech.note}</li>
                ))}
              </ul>
            </div>

            <div className='mt-4 border-2 border-yellow-600 p-4 lg:w-max'>
              <h2 className='text-xl font-bold'>Readme Please</h2>
              <p className='text-white/60 md:text-md text-sm mt-1'>{currentArticle.readme}</p>
            </div>

          </Container>
        </section>

      </main>

      <footer className="p-4 border-t border-white/60 bg-black select-none text-white relative">
        <Container className={container({ size: "large", className: "items-center justify-between flex" })}>

          <h3>&copy; 2023 </h3>
          <a onClick={() => router.push('/')} className="cursor-pointer hover:underline">Adi Cahya Saputra</a>

        </Container>
      </footer>
    </>
  )
}

export default ProjectDetail
