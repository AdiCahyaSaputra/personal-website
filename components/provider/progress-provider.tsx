'use client'

import React, { PropsWithChildren } from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const ProgressProvider = (props: PropsWithChildren) => {
  return (
    <>
      {props.children}
      <ProgressBar
        height="4px"
        color="#dc2626"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  )
}

export default ProgressProvider
