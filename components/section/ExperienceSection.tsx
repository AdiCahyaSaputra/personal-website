'use client'

import Container, { container } from 'components/reusable/global/Container'
import IExperienceEdu from 'lib/interface/IExperienceEdu'
import React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const experiences: IExperienceEdu[] = require("../../asset/data/experience.json")
const educations: IExperienceEdu[] = require("../../asset/data/education.json")

const ExperienceSection: React.FC = () => {

  return (
    <section className='pt-10 pb-20 text-foreground'>
      <Container className={container({ size: 'large', className: 'flex lg:flex-nowrap flex-wrap items-start gap-4' })}>

        <Tabs defaultValue="experience" className='w-full'>
          <TabsList className='h-max'>
            <TabsTrigger value="experience" className='text-lg'>Experience</TabsTrigger>
            <TabsTrigger value="education" className='text-lg'>Education</TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className='w-full grid grid-cols-12 gap-4'>

            {experiences.map((experience, index) => (
              <Card key={index} className="w-full md:col-span-3 col-span-12 items-start">
                <CardHeader>
                  <CardTitle className='text-lg'>{experience.title}</CardTitle>
                  <CardDescription>{experience.year.start} - {experience.year.end}</CardDescription>
                </CardHeader>

                <Separator className='mb-4' />

                <CardContent>
                  <h3 className='text-lg'>Detail</h3>
                </CardContent>
              </Card>
            ))}

          </TabsContent>

          <TabsContent value="education" className='w-full grid grid-cols-12 gap-4 mt-0'>

            {educations.map((education, index) => (
              <Card key={index} className="w-full md:col-span-3 col-span-12 items-start">
                <CardHeader>
                  <CardTitle className='text-lg'>{education.title}</CardTitle>
                  <CardDescription>{education.year.start} - {education.year.end}</CardDescription>
                </CardHeader>

                <Separator className='mb-4' />

                <CardContent>
                  <h3 className='text-lg'>Detail</h3>
                </CardContent>
              </Card>
            ))}

          </TabsContent>

        </Tabs>

      </Container>
    </section>
  )
}

export default ExperienceSection
