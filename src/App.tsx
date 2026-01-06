import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CV from './components/CV'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Background from './components/Background'

function App() {
  return (
    <div className="bg-background min-h-screen text-white">
      <Background />
      <Navbar />
      <Hero />
      <main>
        <CV />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
