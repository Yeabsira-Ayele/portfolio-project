import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { ArrowRight, Mail } from 'lucide-react'
import portrait from '../assets/p.png'
const Home = () => {
  return (
    <section className="bg-white dark:bg-black transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left: text content */}
          <div>
            
            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight mb-8">
              <span className="text-gray-900 dark:text-white">Building software</span>
              <br />
              <span className="text-gray-400 dark:text-gray-500">that matters.</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10 max-w-xl">
              I'm Yeabsira — a 3rd-year Software Engineering student at Addis Ababa
              University. I build full-stack applications, AI-powered systems, and
              digital tools for real-world impact.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-14">
              <NavLink
                to="/projects"
                className="px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                View my work
              </NavLink>
              <NavLink
                to="/contact"
                className="flex items-center gap-1.5 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-950 transition-colors"
              >
                Get in touch <ArrowRight className="w-4 h-4" />
              </NavLink>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 dark:border-gray-900 mb-8" />

            {/* Social links */}
            <div className="flex flex-wrap items-center gap-6 font-mono text-sm text-gray-500 dark:text-gray-400">
              <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-white transition-colors">
                <FaGithub className="w-4 h-4" /> GitHub
              </a>
              <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-white transition-colors">
               <FaLinkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href="https://x.com/your-username" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-white transition-colors">
                <FaXTwitter className="w-4 h-4" /> X/Twitter
              </a>
              <a href="mailto:you@example.com" className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </div>

          {/* Right: portrait image */}
          <div className="relative  ">
            
              <img
                src={portrait}
                alt="Yeabsira Ayele"
                className="w-full h-full object-cover grayscale"
              />
          
           </div> 
        </div>
      </div>
    </section>
  )
}

export default Home