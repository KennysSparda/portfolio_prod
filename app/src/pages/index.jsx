import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Home from '../components/home/Home'
import Projects from '../components/projects/Projects'
import About from '../components/about/About'

export default function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Footer />
    </div>
  )
}
