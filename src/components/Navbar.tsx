import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <nav className='w-full md:max-w-5xl md:mx-auto flex py-5 justify-between items-center px-10 md:px-0'>
      <Link href="/">DarCkly</Link>
      <ul className="flex gap-5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
