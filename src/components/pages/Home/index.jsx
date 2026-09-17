import React from 'react'
import Header from '../../header'
import Hero from './Hero'
import About from './About'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import CaseStudies from './CaseStudies'
import Contributions from './Contributions'
import Education from './Education'
import Contact from './Contact'
import Footer from '../../footer'

export default function Home() {
  return (
    <div className="bg-[#0A0A0A] text-white">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <CaseStudies />
      <Contributions />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}
