import { Skill } from '@/types'
import React from 'react'
import { CardSkill } from './CardSkill'

export const SectionSkills = () => {
  const skills: Array<Skill> = [
    {
      name: 'HTML',
      level: 8,
      icon: 'html',
    },
    {
      name: 'CSS',
      level: 7,
      icon: 'css',
    },
    {
      name: 'JavaScript',
      level: 7,
      icon: 'js',
    },
    {
      name: 'TypeScript',
      level: 4,
      icon: 'typescript',
    },
    {
      name: 'React',
      level: 6,
      icon: 'react',
    },
    {
      name: 'Node.js',
      level: 6,
      icon: 'node',
    },
    {
      name: 'MySQL',
      level: 6,
      icon: 'mysql',
    },
    {
      name: 'Firebase',
      level: 5,
      icon: 'firebase',
    },
  ]
  return (
    <section id="skills" className="w-full">
      <div className="px-10 md:px-20 lg:px-40 py-10 w-full">
        <h3 className="text-2xl font-bold mb-5">Skills</h3>
        <div className="flex flex-wrap justify-between gap-5 w-full">
          {skills.map((skill) => (
            <CardSkill key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
