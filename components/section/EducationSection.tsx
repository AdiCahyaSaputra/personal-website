'use client'

import Container, { container } from 'components/reusable/global/Container'
import IExperienceEdu from 'lib/interface/IExperienceEdu'
import React from 'react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowRight } from 'lucide-react'

const educations: IExperienceEdu[] = require("../../asset/data/education.json")

const ExperienceSection: React.FC = () => {

  return (
    <section className='pt-10 pb-20 text-foreground'>
      <Container className={container({ size: 'large' })}>

        <Separator className='mb-2 bg-foreground'/>
        <Separator className='mb-10 bg-foreground h-2'/>

        <div className='relative'>

          <div className='absolute overflow-hiden left-[100%] flex items-center space-x-2 top-0 rotate-90 pb-4 bg-background origin-top-left'>
            <p className='text-lg font-bold text-foreground tracking-widest uppercase'>Educations</p>
            <ArrowRight/>
          </div>
          <div>
            {educations.map((education, index) => (
              <Card key={index} className="w-full">
                <CardHeader>
                  <CardTitle className='text-lg'>{education.title}</CardTitle>
                  <CardDescription>{education.year.start} - {education.year.end}</CardDescription>
                </CardHeader>

                <Separator className='mb-4' />

                <CardContent>
                  <h3 className='text-lg text-muted-foreground font-bold'>{education.detail}</h3>
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
