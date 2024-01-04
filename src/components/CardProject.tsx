'use client'

import React from 'react'
import Tilt from 'react-parallax-tilt'
import { Project } from '@/types'

const CardProject = ({ project }: { project: Project }) => {
  const { image } = project
  return (
    <div className="rounded shadow shadow-white/10 grow w-full md:max-w-96 h-96">
      <Tilt>
        <div className="w-full h-56 bg-red-100">
          <div
            className={`bg-[url('/images/${image}')] w-full h-full bg-cover bg-center`}
          />
        </div>
      </Tilt>
      <div className="flex flex-col p-3 h-40">
        <h2 className="text-xl font-bold flex-none">{project.name}</h2>
        <p className="grow">{project.description}</p>
        <div className="flex-none flex gap-4">
          {project.url && (
            <a
              className="px-4 py-2 bg-purple-500 rounded hover:bg-purple-800"
              href={project.url}
            >
              Demo
            </a>
          )}
          {project.repo && (
            <a
              className="px-4 py-2 bg-purple-500 rounded hover:bg-purple-800"
              href={project.repo}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default CardProject
