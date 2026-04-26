import Header from './components/Header'
import Hero from './components/Hero'
import Fears from './components/Fears'
import UniqueMethod from './components/UniqueMethod'
import OpenLesson from './components/OpenLesson'
import Teacher from './components/Teacher'
import Results from './components/Results'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <Fears />
        <UniqueMethod />
        <OpenLesson />
        <Teacher />
        <Results />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
