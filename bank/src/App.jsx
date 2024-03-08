import Benefits from "./Pages/Benefits"
import Companies from "./components/Companies"
import Download from "./Pages/Download"
import Hero from "./Pages/Hero"
import Navbar from "./components/Navbar"
import About from "./Pages/About"

const App = () => {
  return (
    <div className="landing">
      <section className="landing__hero">
      <Navbar />
      <Hero />
      <Companies />
      <Benefits />
      <Download />
      <About />
      </section>
    </div>
  )
}

export default App