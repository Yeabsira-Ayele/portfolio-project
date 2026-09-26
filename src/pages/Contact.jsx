import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'

const topics = ['Job opportunity', 'Freelance project', 'Collaboration', 'Just saying hi']

const socials = [
  { icon: FaGithub, label: 'GitHub', handle: '@yeabsirayele', href: 'https://github.com/yeabsirayele' },
  { icon: FaLinkedin, label: 'LinkedIn', handle: 'Yeabsira Ayele', href: 'https://linkedin.com/in/yeabsirayele' },
]

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    // wire up your send logic here (API call, EmailJS, etc.)
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow'

  const labelClass = 'text-xs font-mono tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-2 block'

  return (
    <section className="bg-white dark:bg-black transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Header */}
        <p className="text-xs font-mono tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-4">
          Contact
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white mb-6">
          Let's build
          <br />
          something together.
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mb-14">
          Whether you have an internship opportunity, a project idea, or just want
          to connect — I'm always happy to hear from you.
        </p>

        <div className="grid md:grid-cols-[3fr_2fr] gap-10">

          {/* Left: form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className={labelClass}>Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className={labelClass}>Subject</label>
              <select
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className={`${inputClass} appearance-none cursor-pointer`}
              >
                <option value="" disabled>Select a topic</option>
                {topics.map((topic) => (
                  <option key={topic} value={topic}>{topic}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>Message *</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me what you're working on, what you need, or just say hi..."
                className={`${inputClass} resize-none `}
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center cursor-pointer gap-2 px-6 py-3.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Send message <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Right: availability + info + socials */}
          <div className="flex flex-col gap-6">

            {/* Availability card */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm font-bold text-gray-900 dark:text-white">Currently available</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
                I'm actively looking for job opportunities and freelance
                projects. Response time is typically within 24 hours.
              </p>

              <div className="border-t border-gray-200 dark:border-gray-800 pt-5 flex flex-col gap-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Timezone</span>
                  <span className="font-semibold text-gray-900 dark:text-white">East Africa Time (EAT, UTC+3)</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Response</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Within 24–48 hours</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Preferred</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Freelance · Part-time</span>
                </div>
              </div>
            </div>

            {/* Find me on */}
            <div>
              <p className="text-xs font-mono tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-3">
                Find me on
              </p>
              <div className="flex flex-col gap-3">
                {socials.map(({ icon: Icon, label, handle, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 px-5 py-4 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
                  >
                    <span className="flex items-center justify-center w-9 h-9 shrink-0 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{label}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-500">{handle}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact