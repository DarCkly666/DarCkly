import React from 'react'
import Image from 'next/image'
import { Skill } from '@/types'


export const CardSkill = ({ skill }: { skill: Skill }) => {

  const options = {}
  return (
    <div className='flex w-full md:min-w-72 md:max-w-72 bg-blue-500/30 hover:bg-blue-500/60 relative p-3 rounded'>
      <Image src={`/icons/${skill.icon}.png`} width={50} height={50} alt={skill.name} />
      <div className='flex flex-col'>
        <h3>{skill.name}</h3>
        <div className='flex'>
          {[...Array(skill.level)].map((_, idx) => (<span key={idx}>⭐</span>))}</div>
      </div>
    </div>

  )
}
