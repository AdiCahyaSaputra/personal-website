import Container, { container } from 'components/reusable/global/Container'
import React from 'react'
import data from 'asset/data/projects.json'

import Article from 'components/reusable/project/Article'

const years: number[] = Array.from(new Set(data.map(article => article.year))).sort().reverse()

const Projects = () => {
  return (
    <section className="bg-black text-white min-h-screen pb-10">

      <Container className={container({ size: "medium" })}>

        <div className="py-6 selection:text-black selection:bg-white">
          <h1 className="text-2xl font-bold">Here, The All Project</h1>
          <p className="text-lg text-white/60">That I have done before</p>
        </div>

        {years.map((year, index) => (
          <div key={index} className='group'>

            <h3 className="text-xl text-white/60 group-hover:text-white font-bold selection:text-black selection:bg-white">{year}</h3>
            <div className="py-4 px-8 border-l ml-4 border-red-600 my-4">
              {data.filter(article => article.year === year).map((article, index) => (
                <Article {...article} key={index} />
              ))}
            </div>

          </div>
        ))}

      </Container>

    </section>
  )
}

export default Projects
