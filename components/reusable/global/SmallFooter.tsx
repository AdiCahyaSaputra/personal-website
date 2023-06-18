'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import Container, { container } from './Container'

const SmallFooter: React.FC = () => {
  const router = useRouter()

  return (
    <footer className='p-4 border-t border-white/60 bg-black select-none text-white relative'>
      <Container className={container({ size: "large", className: "items-center justify-between flex" })}>

        <h3>&copy; 2023 </h3>
        <a onClick={() => router.push('/')} className="cursor-pointer hover:underline">Adi Cahya Saputra</a>

      </Container>
    </footer>
  )
}

export default SmallFooter
