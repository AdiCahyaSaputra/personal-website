import { useRouter } from 'next/router'
import React from 'react'

// Interface
import IProjectArticle from '../../../lib/interface/IProjectArticle'

const Article: React.FC<IProjectArticle> = ({ date, title, shortDesc, slug }) => {
  const router = useRouter()

  return (
    <article className="p-4 selection:text-black selection:bg-white">

      <p className='text-sm'>{date}</p>

      <div className="mt-2">
        <a onClick={() => router.push('/projects/' + slug)} className="select-none cursor-pointer hover:underline text-xl font-bold">{title}</a>
        <p className="text-lg text-white/60">{shortDesc}</p>
      </div>

    </article>
  )
}

export default Article
