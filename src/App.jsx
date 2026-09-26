<<<<<<< HEAD
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
=======
import React, { useEffect, useState } from 'react';
import Hero from './hero';
import Aboutme from './aboutme';
import Contact from './contact';
import "./App.css";
import emailjs from '@emailjs/browser';

function App() {
  const [isLoaded, setIsLoaded] = useState(false); 
  useEffect(() => {
    setIsLoaded(true);                              
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);                                           

  return (
    <div>
      <Hero />
      <Aboutme />
      <Contact />
    </div>
  );
}

export default App;

>>>>>>> 961c25dd605c4231363f90f728dd9e961d73b35d
