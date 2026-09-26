import './index.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Skills from './pages/Skills.jsx'
import Experience from './pages/Experience.jsx'
import Contact from './pages/contact.jsx'
import Footer from './components/Footer.jsx'
import Projects from './pages/Projects.jsx'
export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects/>
      <Experience/>
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}