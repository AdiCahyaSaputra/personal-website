import Link from 'next/link'
import React from 'react'

// Interface
import IProjectArticle from '../../../lib/interface/IProjectArticle'

const Article: React.FC<IProjectArticle> = ({ date, title, shortDesc, slug }) => {
  return (
    <article className="p-4 selection:text-black selection:bg-white">

      <p className='tracking-widest text-xs border-b-4 border-l-4 border-t border-r border-red-600 p-2 bg-red-600/20 text-red-600 w-max rounded-md uppercase'>{date}</p>

      <div className="mt-1">
        <Link className='select-none cursor-pointer hover:underline text-xl font-bold' href={`/projects/${slug}`}>
          {title}
        </Link>
        <p className="text-lg text-white/60">{shortDesc}</p>
      </div>

    </article>
  )
}

export default Article
