import React from 'react'
import { motion } from 'framer-motion'
import { wordAnmate } from 'lib/motion/variants'

type Props = {
  text: string
}

const WordAnimate: React.FC<Props> = ({ text }) => {
  const words = text.split(' ')

  return (
    <p className='overflow-hidden'>
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordAnmate}
          className='inline-block mr-1'
        >
          {word}
        </motion.span>
      ))}
    </p>
  )
}

export default WordAnimate
