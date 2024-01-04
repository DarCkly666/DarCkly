import React from 'react'
import Image from 'next/image'

const SectionFooter = () => {
  return (
    <div
      id="footer"
      className="w-full px-10 md:px-20 lg:px-40 py-10 h-52 bg-slate-800 flex items-center justify-between"
    >
      <h2 className="text-2xl font-bold">DarCkly</h2>
      <p>2024</p>
      <div className="flex gap-4">
        <a href="https://github.com/DarCkly666" target="_blank">
          <Image
            src="/icons/GitHub_Logo_White.png"
            alt="Github"
            width={72}
            height={28}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/charly-rodríguez-033728201/"
          target="_blank"
        >
          <Image
            src="/icons/LI-In-Bug.png"
            alt="Linkedin"
            width={28}
            height={28}
          />
        </a>
        <a href="mailto:darckly6@gmail.com" target="_blank">
          <Image src="/icons/mail.png" alt="Mail" width={28} height={28} />
        </a>
      </div>
    </div>
  )
}

export default SectionFooter
