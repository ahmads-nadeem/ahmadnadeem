import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppSVG from './components/WhatsAppSVG'
export default function App() {
  return (
    <div className="min-h-screen bg-dark-900 relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <WhatsAppSVG />
    </div>
  )
}
