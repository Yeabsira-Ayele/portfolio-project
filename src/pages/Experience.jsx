import React from 'react'
import { NavLink } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const experience = [
{
initial: 'WEB',
role: 'Software Development Intern',
company: 'YAI P.L.C',
period: 'Jun 2025 – Aug 2025',
description: 'Developed a Task Management System using React, TypeScript, and Node.js.',
},
{
initial: 'AI',
role: 'Generative AI & LLM Intern',
company: 'Agentic AI',
period: '2026',
description: 'Built AI-powered applications using LLMs, RAG, and modern generative AI tools.',
},
]


const Experience = () => {
  return (
    <section className="bg-white dark:bg-black transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16">

          {/* Left: heading */}
          <div>
            <p className="text-xs font-mono tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-4">
               Experience
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
              Where I've worked
            </h2>
            {/* <NavLink
              to="/experience"
              className="inline-flex items-center gap-1.5 text-sm font-mono text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Full timeline <ArrowRight className="w-3.5 h-3.5" />
            </NavLink> */}
          </div>

          {/* Right: experience cards */}
          <div className="flex flex-col gap-5 ">
            {experience.map((job) => (
              <div
                key={job.role}
                className="flex items-start gap-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-6  transition-all duration-300 ease-out
  hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/10 hover:border-blue-600/60
  border-gray-200 dark:border-gray-800"
              >
                <span className="flex items-center justify-center w-9 h-9 shrink-0 rounded-lg bg-gray-200 dark:bg-gray-800 font-mono text-sm text-gray-700 dark:text-gray-300">
                  {job.initial}
                </span>

                <div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">
                    {job.role}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {job.company}
                  </p>
                  <p className="text-sm font-mono text-gray-500 dark:text-gray-500">
                    {job.period} · {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience