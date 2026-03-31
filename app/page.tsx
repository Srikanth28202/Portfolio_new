'use client'

import { CustomCursor } from '@/components/CustomCursor'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Internship } from '@/components/sections/Internship'
import { Education } from '@/components/sections/Education'
import { Certificates } from '@/components/sections/Certificates'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      {/* Custom cursor - hidden on mobile */}
      <CustomCursor />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Sections */}
      <Hero />
      <About />
      <Internship />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
