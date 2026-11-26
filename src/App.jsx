import { MotionConfig } from 'framer-motion'
import NavBar from './components/NavBar.jsx'
import Banner from './components/Banner.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Certifications from './components/Certifications.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60]
          focus:px-4 focus:py-2 focus:rounded-md focus:bg-accent focus:text-[#0a0a0a] focus:font-bold">
        Skip to content
      </a>
      <NavBar />
      <main id="main">
        <Banner />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
