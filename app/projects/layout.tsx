import React from 'react'

import Navbar from 'components/reusable/global/Navbar'
import SmallFooter from 'components/reusable/global/SmallFooter'

type TProps = {
  children: React.ReactNode
}

const Layout = ({ children }: TProps) => {
  return (
    <>
      <main className='bg-black'>
        <Navbar />
        {children}
      </main>
      <SmallFooter />
    </>
  )
}

export default Layout
