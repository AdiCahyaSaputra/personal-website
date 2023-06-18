'use client'

import React from 'react'

import IProjectArticle from 'lib/interface/IProjectArticle'
import Container, { container } from 'components/reusable/global/Container'
import BackButton from 'components/reusable/global/BackButton'

import { cva } from 'class-variance-authority'

const status = cva("font-bold px-4 border-l-4", {
  variants: {
    intent: {
      onProgress: "text-yellow-600 border-yellow-600",
      done: "text-green-600 border-green-600",
    }
  },
  defaultVariants: {
    intent: "done"
  }
})

type TProps = {
  params: {
    name: string
  }
}

const data: IProjectArticle[] = require('asset/data/projects.json')

const ProjectDetail = ({ params }: TProps) => {
  const currentProject = data.find(project => project.slug === params.name)

  return (
    <section className='bg-black min-h-screen pb-10 text-white'>
      <Container className={container({ size: "medium", className: "selection:text-black selection:bg-white" })}>

        <BackButton link='/projects' />

        <div className="py-6 selection:text-black selection:bg-white border-b-2 border-red-600 border-dashed">
          <h1 className="text-2xl uppercase tracking-wide font-bold">{currentProject?.title}</h1>
          <p className={status({ intent: currentProject?.status === "Done" ? "done" : "onProgress", className: 'text-sm mt-2 uppercase tracking-widest' })}>{currentProject?.status}</p>
        </div>

        <div className='mt-4'>
          <h2 className='text-xl font-bold'>People Behind This Project</h2>
          <ul className='mt-2'>
            {currentProject?.peoples?.map((people, index) => (
              <li key={index}><a href={people.link} className='hover:underline text-sky-500'>{people.username}</a> {people.note}</li>
            ))}
          </ul>
        </div>

        <div className='mt-4'>
          <h2 className='text-xl font-bold'>Links</h2>
          <ul className='mt-2'>
            {currentProject?.links?.map((link, index) => (
              <li key={index}>
                <a href={link.url} className='hover:underline text-sky-500'>{link.label}</a> {link.note}
              </li>
            ))}
          </ul>
        </div>

        <div className='mt-4'>
          <h2 className='text-xl font-bold'>Tech Stack</h2>
          <ul className='mt-2'>
            {currentProject?.techStack?.map((tech, index) => (
              <li key={index}><a href={tech.link} className='hover:underline text-sky-500'>{tech.name}</a> {tech.note}</li>
            ))}
          </ul>
        </div>

        <div className='mt-4 border-2 border-yellow-600 p-4 lg:w-max'>
          <h2 className='text-xl font-bold'>Readme Please</h2>
          <p className='text-white/60 md:text-base text-sm mt-1'>{currentProject?.readme}</p>
        </div>

      </Container>
    </section>
  )
}

export default ProjectDetail

