import React from 'react'

export const SectionHome = () => {
  return (
    <section className="min-h-screen w-full bg-[url('/bg.webp')] bg-cover">
      <div className='bg-gradient-to-b from-[#141414] to-transparent w-full min-h-screen '>
        <div className='flex flex-col items-start justify-center gap-7 h-screen w-full md:w-3/5 text-center md:text-left px-10 md:px-20 lg:px-40'>
          <h2 className='text-4xl'>DarCkly</h2>
          <h3 className='text-4xl md:text-7xl font-bold'>Create Stunning Websites</h3>
          <div className='text-2xl'>
            <p>Stand out with a developer portfolio that showcases your skills</p>
            <p>Boost your online presence.</p>
          </div>
          <a className='bg-blue-600 px-6 py-3 rounded shadow-xl hover:bg-blue-800' href="#contact">Get in touch</a>
        </div>
      </div>
    </section>
  )
}
