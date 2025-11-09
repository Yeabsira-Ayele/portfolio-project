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

