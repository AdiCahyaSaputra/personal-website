'use client'

import Container, { container } from 'components/reusable/global/Container'
import IExperienceEdu from 'lib/interface/IExperienceEdu'
import React from 'react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowRight } from 'lucide-react'

const experiences: IExperienceEdu[] = require("../../asset/data/experience.json")

const ExperienceSection: React.FC = () => {

  return (
    <section className='pt-10 text-foreground'>
      <Container className={container({ size: 'large' })}>

        <div className='relative'>

          <div className='absolute overflow-hiden left-[100%] flex items-center space-x-2 top-0 rotate-90 pb-4 bg-background origin-top-left'>
            <p className='text-lg font-bold text-foreground tracking-widest uppercase'>Experiences</p>
            <ArrowRight/>
          </div>
          <div>
            {experiences.map((experience, index) => (
              <Card key={index} className="w-full">
                <CardHeader>
                  <CardTitle className='text-lg'>{experience.title}</CardTitle>
                  <CardDescription>{experience.year.start} - {experience.year.end}</CardDescription>
                </CardHeader>

                <Separator className='mb-4' />

                <CardContent>
                  <h3 className='text-lg text-muted-foreground font-bold pr-6'>{experience.detail}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>

      </Container>
    </section>
  )
}

export default ExperienceSection
