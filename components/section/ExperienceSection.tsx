'use client'

import { cva } from 'class-variance-authority'
import InfoCard from 'components/reusable/experience/InfoCard'
import Container, { container } from 'components/reusable/global/Container'
import IExperienceEdu from 'lib/interface/IExperienceEdu'
import React, { useState } from 'react'

const EMenu = cva("uppercase cursor-pointer sm:hover:undeline", {
  variants: {
    intent: {
      active: "text-white",
      deactive: "text-white/40 hover:text-white/70 transition-all"
    }
  },
  defaultVariants: {
    intent: "active"
  }
})

type EActiveMenu = "xp" | "du"

const experiences: IExperienceEdu[] = require("../../asset/data/experience.json")
const educations: IExperienceEdu[] = require("../../asset/data/education.json")

const ExperienceSection: React.FC = () => {
  const [EActiveMenu, setEActiveMenu] = useState<EActiveMenu>("xp")

  return (
    <section className='py-10 text-white selection:bg-white selection:text-black'>
      <Container className={container({ size: 'large', className: 'flex lg:flex-nowrap flex-wrap items-start gap-4' })}>

        <div className='flex items-end gap-1 lg:w-3/12 w-full'>

          <h1 className='text-6xl'>E</h1>
          <div className='font-bold'>
            <h1 onClick={() => setEActiveMenu('xp')} className={EMenu({ intent: EActiveMenu === 'xp' ? 'active' : 'deactive' })}>xperience</h1>
            <h1 onClick={() => setEActiveMenu('du')} className={EMenu({ intent: EActiveMenu === 'du' ? 'active' : 'deactive' })}>ducation</h1>
          </div>

        </div>

        <div className='lg:w-9/12 grid lg:grid-cols-2 grid-cols-1 gap-2 w-full grow-0'>

          {EActiveMenu === 'xp' && experiences.map((experience, index) => (
            <InfoCard {...experience} key={index} delay={(index + 1) /10} />
          ))}

          {EActiveMenu === 'du' && educations.map((education, index) => (
            <InfoCard {...education} key={index} delay={(index + 1) /10}/>
          ))}

        </div>

      </Container>
    </section>
  )
}

export default ExperienceSection
