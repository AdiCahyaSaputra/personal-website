import React from 'react'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'

type Props = {
  link: string
}

const BackButton: React.FC<Props> = ({ link }) => {
  const router = useRouter()

  const clickHandler = () => {
    setTimeout(() => {
      router.push(link)
    }, 500);
  }

  return (
    <div className='py-4 select-none'>
      <div className='relative overflow-hidden w-max group'>

        <button onClick={clickHandler} className='flex py-2 active:scale-95 px-4 border-2 border-white w-max items-center space-x-4 group relative z-10'>
          <ArrowLeftIcon className='w-4 aspect-square group-hover:stroke-black stroke-white transition-all duration-500' />
          <p className='text-sm font-bold group-hover:text-black transition-all duration-500'>Get Back</p>
        </button>

        <div className='absolute left-0 top-0 w-full h-full bg-white translate-x-full group-hover:translate-x-0 z-0 transition-all duration-500' />

      </div>
    </div>
  )
}

export default BackButton
