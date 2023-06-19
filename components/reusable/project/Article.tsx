import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

// Interface
import IProjectArticle from '../../../lib/interface/IProjectArticle'

const Article: React.FC<IProjectArticle> = ({ date, title, shortDesc, slug }) => {
  return (
    <article className="p-4">

      <code className='relative rounded dark:bg-red-600/20 bg-blue-600/20 px-2 py-1 font-mono text-sm font-semibold'>{date}</code>

      <div className="mt-2">
        <div className='flex items-center space-x-1'>
          <Link className='select-none cursor-pointer peer hover:underline text-xl font-bold' href={`/projects/${slug}`}>
            {title}
          </Link>
          <ArrowUpRight className='w-6 stroke-muted-foreground peer-hover:translate-x-2 transition-all'/>
        </div>
        <p className="text-lg text-muted-foreground">{shortDesc}</p>
      </div>

    </article>
  )
}

export default Article
