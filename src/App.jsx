import TopBar from './components/TopBar.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import TrustBar from './components/TrustBar.jsx'
import About from './components/About.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Solutions from './components/Solutions.jsx'
import Stats from './components/Stats.jsx'
import WhyUs from './components/WhyUs.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import CTA from './components/CTA.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <HowItWorks />
        <Solutions />
        <Stats />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App