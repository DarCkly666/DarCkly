import { SectionHome } from '@/components/SectionHome'
import { Navbar } from '@/components/Navbar'
import Image from 'next/image'
import { SectionIntro } from '@/components/SectionIntro'
import { SectionSkills } from '@/components/SectionSkills'
import SectionProjects from '@/components/SectionProjects'
import SectionFooter from '@/components/SectionFooter'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SectionHome />
      <SectionIntro />
      <SectionSkills />
      <SectionProjects />
      <SectionFooter />
    </main>
  )
}
