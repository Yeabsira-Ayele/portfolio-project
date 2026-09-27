import './index.css'
import Navbar from './components/navbar.jsx'
import Home from './pages/Home.jsx'
import Skills from './pages/Skills.jsx'
import Experience from './pages/Experience.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './components/Footer.jsx'
import Projects from './pages/Projects.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="projects"><Projects /></section>
      <section id="experience"><Experience /></section>
      <section id="skills"><Skills /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </>
  )
}