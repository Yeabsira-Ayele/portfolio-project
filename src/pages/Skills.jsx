import React from 'react'
import { Code2 } from 'lucide-react'
import {
  SiReact, SiJavascript, SiTypescript, SiVite, SiTailwindcss, SiRedux,
  SiZod, SiAxios, SiReactrouter, SiFramer,
  SiNodedotjs, SiExpress, SiMongodb, SiJsonwebtokens,
  SiPython, SiFastapi, SiHuggingface,
  SiGit, SiGithub, SiNpm, SiFigma,
  SiVercel,
} from 'react-icons/si'

const skillMeta = {
  'React': { icon: SiReact, color: '#61DAFB' },
  'JavaScript': { icon: SiJavascript, color: '#F7DF1E' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6' },
  'Vite': { icon: SiVite, color: '#646CFF' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#38BDF8' },
  'React Router': { icon: SiReactrouter, color: '#CA4245' },
  'Zustand': { icon: Code2, color: '#8B5CF6' },
  'Redux Toolkit': { icon: SiRedux, color: '#764ABC' },
  'Zod': { icon: SiZod, color: '#3E67B1' },
  'Axios': { icon: SiAxios, color: '#5A29E4' },
  'shadcn/ui': { icon: Code2, color: '#A1A1AA' },
  'Framer Motion': { icon: SiFramer, color: '#EF4444' },
  'Recharts': { icon: Code2, color: '#22C55E' },
  'Node.js': { icon: SiNodedotjs, color: '#5FA04E' },
  'Express.js': { icon: SiExpress, color: '#A1A1AA' },
  'REST APIs': { icon: Code2, color: '#F59E0B' },
  'MongoDB': { icon: SiMongodb, color: '#47A248' },
  'Mongoose': { icon: Code2, color: '#C74634' },
  'JWT': { icon: SiJsonwebtokens, color: '#D63AFF' },
  'bcryptjs': { icon: Code2, color: '#3B82F6' },
  'Nodemailer': { icon: Code2, color: '#0EA5E9' },
  'Python': { icon: SiPython, color: '#3776AB' },
  'FastAPI': { icon: SiFastapi, color: '#009688' },
  'Google Gemini': { icon: Code2, color: '#8E75FF' },
  'LangChain': { icon: Code2, color: '#1C3C3C' },
  'Hugging Face': { icon: SiHuggingface, color: '#FFD21E' },
  'ChromaDB': { icon: Code2, color: '#FF6B6B' },
  'Embeddings': { icon: Code2, color: '#06B6D4' },
  'RAG': { icon: Code2, color: '#F97316' },
  'LLM evaluation': { icon: Code2, color: '#EC4899' },
  'Git': { icon: SiGit, color: '#F05032' },
  'GitHub': { icon: SiGithub, color: '#A1A1AA' },
  'VS Code': { icon: Code2, color: '#007ACC' },
  'npm': { icon: SiNpm, color: '#CB3837' },
  'Figma': { icon: SiFigma, color: '#F24E1E' },
  'Vercel': { icon: SiVercel, color: '#A1A1AA' },
  'Render': { icon: Code2, color: '#46E3B7' },
  'MongoDB Atlas': { icon: SiMongodb, color: '#47A248' },
}

const skillCategories = [
  {
    label: 'Frontend',
    skills: ['React', 'JavaScript', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'Zustand', 'Redux Toolkit', 'Zod', 'Axios', 'shadcn/ui', 'Framer Motion', 'Recharts'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Mongoose', 'JWT', 'bcryptjs', 'Nodemailer'],
  },
  {
    label: 'AI / RAG',
    skills: ['Python', 'FastAPI', 'Google Gemini', 'LangChain', 'Hugging Face', 'ChromaDB', 'Embeddings', 'RAG', 'LLM evaluation'],
  },
  {
    label: 'Development & Deployment',
    skills: ['Git', 'GitHub', 'VS Code', 'npm', 'Figma' , 'Vercel', 'Render', 'MongoDB Atlas'],
  },
  
]

const Skills = () => {
  return (
    <section className="bg-white dark:bg-black transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-20">
          {/* Header */}
       <p className="text-xs font-mono tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-4">Skills</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-10">
          Skills & technologies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 items-stretch ">
          {skillCategories.map((category) => (
            <div
              key={category.label}
              className="group rounded-2xl border bg-gray-50 dark:bg-gray-950 p-6 border-gray-200 dark:border-gray-800
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/10 hover:border-blue-600/60"
            >
              <h3 className="text-xs font-mono tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-4">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const meta = skillMeta[skill] || { icon: Code2, color: '#9CA3AF' }
                  const Icon = meta.icon
                  return (
                    <span
                      key={skill}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-200/60 dark:bg-gray-800 text-xs font-medium text-gray-700 dark:text-gray-300"
                    >
                      <Icon className="w-3.5 h-3.5" style={{ color: meta.color }} />
                      {skill}
                    </span>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills