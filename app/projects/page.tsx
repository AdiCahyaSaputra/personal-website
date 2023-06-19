import Container, { container } from 'components/reusable/global/Container'
import React from 'react'

import Article from 'components/reusable/project/Article'
import IProjectArticle from '@/lib/interface/IProjectArticle'

const data: IProjectArticle[] = require('../../asset/data/projects.json')
const years: number[] = Array.from(new Set(data.map(article => article.year))).sort().reverse()

const Projects = () => {
  return (
    <section className="bg-background text-foreground min-h-screen pb-10">

      <Container className={container({ size: "medium" })}>

        <div className="py-6">
          <h1 className="text-2xl font-bold text-foreground">Here, The All Project</h1>
          <p className="text-lg text-muted-foreground">That I have done before</p>
        </div>

        {years.map((year, index) => (
          <div key={index} className='group'>

            <h3 className="text-xl text-muted-foreground group-hover:text-foreground font-bold">{year}</h3>
            <div className="divide-y-2 divide-y-foreground py-4 px-8 border-l ml-4 dark:border-red-600 border-blue-600 my-4">
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
