import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { LucideDownload, Mail } from 'lucide-react'
import portrait from '../assets/profile.jpg'
import cvFile from '../Data/Yeabsira_Ayele_Resume.pdf'

const Home = () => {
   const handleNavClick = (id) => {
   
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <section className="bg-white dark:bg-black transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: text content */}
          <div className="order-2 md:order-1">
            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight mb-8">
              <span className="text-gray-900 dark:text-white">Building software</span> <br />
              <span className="text-gray-400 dark:text-gray-500">that matters.</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10 max-w-xl">
              I'm Yeabsira, a software developer passionate about turning real-world problems into useful digital products, from web applications to AI-powered systems.
            </p>
            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-14">
              <a href="#projects"  onClick={(e) => { e.preventDefault(); handleNavClick('projects')}}
              className="px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors">
                View my work
              </a>
             
              <a href={cvFile} download className="flex items-center gap-1.5 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-950 transition-colors">
                <LucideDownload className="w-4 h-4" /> Download CV
              </a>
            </div>
          </div>

          {/* Right: portrait image (Always a circle, centers on mobile, right-aligned on desktop) */}
          <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
            <div className="w-60 h-60 sm:w-80 sm:h-80 lg:w-100 lg:h-100 aspect-square rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-900 shadow-xl">
              <img 
                src={portrait} 
                alt="Yeabsira Ayele" 
                className="w-full h-full object-cover grayscale" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Home
