import IExperienceEdu from 'lib/interface/IExperienceEdu'
import React from 'react'
import { motion } from 'framer-motion'

type Props = IExperienceEdu & {
  delay: number
}

const InfoCard: React.FC<Props> = ({ title, year, delay }) => {
  return (
    <motion.div
      initial={{ y: '200%' }}
      animate={{
        y: 0,
        transition: {
          ease: 'easeOut',
          duration: .3,
          delay
        }
      }}
    >
      <div className='bg-red-600/20 p-4 border-2 border-transparent hover:border-red-600 transition-all duration-300'>
        <h2 className='text-xl line-clamp-1 font-bold uppercase'>{title}</h2>
        <p className='font-light mt-1'>{year.start} - {year.end}</p>
      </div>
    </motion.div>
  )
}

export default InfoCard
