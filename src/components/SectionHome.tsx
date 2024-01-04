import React from 'react'

export const SectionHome = () => {
  return (
    <section className="min-h-screen w-full bg-[url('/bg.webp')] bg-cover bg-center">
      <div className="bg-gradient-to-b from-[#141414] to-transparent w-full min-h-screen ">
        <div className="flex flex-col items-start justify-center gap-7 h-screen w-full md:w-3/5 text-center md:text-left px-10 md:px-20 lg:px-40">
          <h2 className="text-4xl">Charly Rodríguez Moreno</h2>
          <h3 className="text-4xl md:text-7xl font-bold">
            Create Stunning Websites
          </h3>
          <div className="text-2xl">
            <p>
              Stand out with a developer portfolio that showcases your skills
            </p>
            {/* <p>Boost your online presence.</p> */}
          </div>
          <div className="flex gap-5">
            <a
              className="bg-blue-600 px-6 py-3 rounded shadow-xl hover:bg-blue-800"
              href="#footer"
            >
              Get in touch
            </a>
            <a
              className="bg-transparent border border-white px-6 py-3 rounded shadow-xl hover:bg-blue-600 hover:border-blue-600"
              href="/cv.pdf"
              download="cv"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
