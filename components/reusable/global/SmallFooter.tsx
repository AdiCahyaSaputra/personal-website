'use client'

import React from 'react'

import Container, { container } from './Container'

const SmallFooter: React.FC = () => {

  return (
    <footer className='border-t border-primary/30 dark:bg-black/20 bg-secondary text-lg inset-x-0 py-4'>
      <Container className={container({ size: "large" })}>
        <h3>&copy; 2023 built with <a href='https://ui.shadcn.com/' className='pb-1 border-b border-primary font-bold'>shadcn/ui</a></h3>
      </Container>
    </footer>
  )
}

export default SmallFooter
