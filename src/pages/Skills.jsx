import React, { useState, useEffect } from 'react'
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
  { label: 'Frontend', skills: ['React', 'JavaScript', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'Zustand', 'Redux Toolkit', 'Zod', 'Axios', 'shadcn/ui', 'Framer Motion', 'Recharts'] },
  { label: 'Backend', skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Mongoose', 'JWT', 'bcryptjs', 'Nodemailer'] },
  { label: 'AI / RAG', skills: ['Python', 'FastAPI', 'Google Gemini', 'LangChain', 'Hugging Face', 'ChromaDB', 'Embeddings', 'RAG', 'LLM evaluation'] },
  { label: 'Development', skills: ['Git', 'GitHub', 'VS Code', 'npm', 'Figma'] },
  { label: 'Deployment', skills: ['Vercel', 'Render', 'MongoDB Atlas'] },
]

const SkillCard = ({ skill, delay, visible }) => {
  const [active, setActive] = useState(false)
  const meta = skillMeta[skill] || { icon: Code2, color: '#9CA3AF' }
  const Icon = meta.icon

  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => setActive((a) => !a)} // tap-to-activate on mobile
      className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 cursor-pointer
        transition-all duration-300 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
        ${active
          ? 'border-transparent -translate-y-1 scale-[1.03] shadow-lg'
          : 'border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950'}`}
      style={{
        transitionDelay: visible ? `${delay}ms` : '0ms',
        backgroundColor: active ? `${meta.color}14` : undefined,
        boxShadow: active ? `0 8px 24px -8px ${meta.color}66` : undefined,
        borderColor: active ? `${meta.color}55` : undefined,
      }}
    >
      <span
        className="flex items-center justify-center w-8 h-8 shrink-0 rounded-lg transition-all duration-300"
        style={{
          backgroundColor: `${meta.color}${active ? '33' : '1A'}`,
          transform: active ? 'scale(1.15) rotate(-6deg)' : 'scale(1) rotate(0deg)',
        }}
      >
        <Icon
          className="w-4 h-4 transition-transform duration-300"
          style={{ color: meta.color }}
        />
      </span>
      <span
        className={`text-sm font-medium truncate transition-colors duration-300 ${active ? '' : 'text-gray-900 dark:text-white'}`}
        style={{ color: active ? meta.color : undefined }}
      >
        {skill}
      </span>
    </div>
  )
}

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(false)
    const t = setTimeout(() => setVisible(true), 30)
    return () => clearTimeout(t)
  }, [activeIndex])

  const activeCategory = skillCategories[activeIndex]

  return (
    <section className="bg-white dark:bg-black transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs font-mono tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-4">
          Stack & tools
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-10">
          Skills & technologies
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {skillCategories.map((category, i) => (
            <button
              key={category.label}
              onClick={() => setActiveIndex(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${i === activeIndex
                  ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                  : 'bg-gray-100 dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skill grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 gap-4">
          {activeCategory.skills.map((skill, i) => (
            <SkillCard
              key={skill}
              skill={skill}
              delay={i * 40}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills