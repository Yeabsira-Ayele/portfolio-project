import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { SiLeetcode } from 'react-icons/si'

const topics = [
  'Job opportunity',
  'Freelance project',
  'Collaboration',
  'Just saying hi',
]

const socials = [
  {
    icon: FaGithub,
    label: 'GitHub',
    handle: '@yeabsirayele',
    href: 'https://github.com/Yeabsira-Ayele',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    handle: 'Yeabsira Ayele',
    href: 'http://www.linkedin.com/in/yeabsira-ayele-509a84377',
  },
  {
    icon: SiLeetcode,
    label: 'LeetCode',
    handle: '@yeabsirayele',
    href: 'https://leetcode.com/u/yeabsirayele',
  },
]

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setStatus('sending')

    const formData = new FormData()

    formData.append(
      'access_key',
      '77a4bb76-4411-43ca-ae05-fc6b30648d9b'
    )

    formData.append('name', form.name)
    formData.append('email', form.email)
    formData.append('subject', form.subject)
    formData.append('message', form.message)

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: formData,
        }
      )

      const data = await response.json()

      if (data.success) {
        setStatus('success')

        setForm({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      } else {
        console.error(data)
        setStatus('error')
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow'

  const labelClass =
    'text-xs font-mono tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-2 block'

  return (
    <section className="bg-white dark:bg-black transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Header */}
        <p className="text-xs font-mono tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-4">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white mb-6">
          Have an idea? Let's build it.
        </h2>

        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mb-14">
          I'm open to software projects, internship opportunities, and
          collaborations. If you have a problem to solve or an idea to
          turn into a product, let's talk.
        </p>

        <div className="grid md:grid-cols-[3fr_2fr] gap-10">

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >

            <div className="grid sm:grid-cols-2 gap-6">

              <div>
                <label
                  htmlFor="name"
                  className={labelClass}
                >
                  Name *
                </label>

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
                <label
                  htmlFor="email"
                  className={labelClass}
                >
                  Email *
                </label>

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

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className={labelClass}
              >
                Subject
              </label>

              <select
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className={`${inputClass} appearance-none cursor-pointer`}
              >
                <option value="" disabled>
                  Select a topic
                </option>

                {topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className={labelClass}
              >
                Message *
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me what you're working on, what you need, or just say hi..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="flex items-center justify-center cursor-pointer gap-2 px-6 py-3.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {status === 'sending'
                ? 'Sending...'
                : 'Send message'}

              {status !== 'sending' && (
                <ArrowRight className="w-4 h-4" />
              )}
            </button>

            {/* Success */}
            {status === 'success' && (
              <p className="text-sm text-green-600 dark:text-green-400">
                Message sent successfully. I'll get back to you soon.
              </p>
            )}

            {/* Error */}
            {status === 'error' && (
              <p className="text-sm text-red-600 dark:text-red-400">
                Something went wrong. Please try again or contact me
                directly.
              </p>
            )}

          </form>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-6">

            {/* Availability */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-6">

              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-500" />

                <span className="text-sm font-bold text-gray-900 dark:text-white">
                  Currently available
                </span>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
                I'm actively looking for job opportunities and freelance
                projects. Response time is typically within 24 hours.
              </p>

              <div className="border-t border-gray-200 dark:border-gray-800 pt-5 flex flex-col gap-3">

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">
                    Timezone
                  </span>

                  <span className="font-semibold text-gray-900 dark:text-white">
                    EAT (UTC+3)
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">
                    Response
                  </span>

                  <span className="font-semibold text-gray-900 dark:text-white">
                    Within 24–48 hours
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">
                    Preferred
                  </span>

                  <span className="font-semibold text-gray-900 dark:text-white">
                    Freelance · Part-time
                  </span>
                </div>

              </div>
            </div>

            {/* Socials */}
            <div>

              <p className="text-xs font-mono tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-3">
                Find me on
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 px-5 py-4 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
                  >
                    <span className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                      <Icon className="w-4 h-4 shrink-0" />

                      <span className="text-sm font-bold text-gray-900 dark:text-white">
                        {label}
                      </span>
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