import React from 'react'
import { NavLink } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import tms from '../assets/tms2.jpg'
import rag from '../assets/rag4.jpg'
const projects = [
{
number: '01',
year: '2026',
status: 'Live',
title: 'Task Management System',
tagline: 'Full-stack team task management platform',
description:
'A task management platform with authentication, role-based access, task assignment, status tracking, due dates, priorities, and dashboard analytics.',
tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
image: tms,
liveUrl: 'https://task-managment-frontend-4tic.vercel.app/',
githubUrl: 'https://github.com/Yeabsira-Ayele/Task-managment-frontend',
featured: false,
},
{
number: '02',
year: '2026',
status: 'AI Project',
title: 'Document Q&A',
tagline: 'AI-powered question answering with RAG',
description:
'A document question-answering system that uses retrieval augmented generation to answer questions from uploaded documents with relevant context.',
tags: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'Gemini'],
image: rag,
liveUrl: '',
githubUrl: 'https://github.com/Yeabsira-Ayele/-Document-Q-A-with-Citations',
featured: false,
},


]


const Projects = () => {
  return (
    <section className="bg-white dark:bg-black transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="flex flex-col  items-start justify-start mb-10">
          <p className="text-xs font-mono tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-4">
          Projects
          </p>
         
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Selected Websites
          </h2>
          
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-5">
          {projects.map((project) => (
            <div
              key={project.number}
              className={`group grid md:grid-cols-[2fr_1fr] rounded-2xl overflow-hidden border bg-gray-50 dark:bg-gray-950
  transition-all duration-300 ease-out
  hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/10 hover:border-blue-600/60
  border-gray-200 dark:border-gray-800`}
            >
              {/* Text content */}
              <div className="p-8 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-mono text-gray-400 dark:text-gray-500">
                    {project.number}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-mono text-gray-400 dark:text-gray-500">
                      {project.year}
                    </span>
                    <span className="px-2.5 py-1 rounded-full border border-gray-300 dark:border-gray-700 text-xs font-mono text-gray-500 dark:text-gray-400">
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${project.featured ? 'text-blue-600 dark:text-blue-500' : 'text-gray-900 dark:text-white'}`}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {project.tagline}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-lg bg-gray-200/60 dark:bg-gray-800 font-mono text-xs text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 dark:border-gray-800 mb-5" />

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
                    >
                      View Live <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                    >
                      <FaGithub className="w-3.5 h-3.5" /> GitHub
                    </a>
                  )}
                </div>
              </div>
               {/*image*/}
              <div className="hidden md:block relative   ">
              <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full" />
</div>
            </div>
          ))}
        </div>

        

      </div>
    </section>
  )
}

export default Projects