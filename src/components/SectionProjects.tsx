import { Project } from '@/types'
import React from 'react'
import CardProject from './CardProject'

const SectionProjects = () => {
  const projects: Array<Project> = [
    {
      id: '1',
      name: 'ToDo List',
      description:
        'API Rest para el manejo de quehaceres utilizando NodeJS, Express, MySQL, JWT.',
      image: 'pro1.jpg',
      repo: 'https://github.com/DarCkly666/Todo_List',
    },
    {
      id: '2',
      name: 'PokeInfo',
      description:
        'Página web PokéDex usando la api de Pokémon, React JS y TypeScript',
      image: 'pro2.jpg',
      repo: 'https://github.com/DarCkly666/PokeInfo',
      url: 'https://pokeinfo-ts.netlify.app',
    },
    {
      id: '3',
      name: 'GPT-3',
      description: 'Landing page GPT-3',
      image: 'pro3.jpg',
      url: 'https://landing-gpt3.netlify.app',
    },
    {
      id: '4',
      name: 'Tienda Online',
      description: 'Tienda online usando Firebase',
      image: 'pro4.jpg',
      url: 'https://tienda-bolivia.netlify.app',
    },
    {
      id: '5',
      name: 'English Ear',
      description:
        'Aplicación Web para escuchar audiolibros en inglés, usando React JS y Firebase',
      image: 'pro5.jpg',
      url: 'https://english-ear.netlify.app',
    },
  ]
  return (
    <section id="projects" className="w-full">
      <div className="px-10 md:px-20 lg:px-40 py-10 w-full">
        <h3 className="text-2xl font-bold mb-5">Projects</h3>
        <div className="w-full flex flex-wrap justify-between gap-5">
          {projects.map((project) => (
            <CardProject key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionProjects
