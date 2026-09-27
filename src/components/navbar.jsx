
import React, { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react'

const links = [
  { to: 'home', label: 'Home' },
  { to: 'projects', label: 'Projects' },
  { to: 'experience', label: 'Experience' },
  { to: 'skills', label: 'Skills' },
  { to: 'contact', label: 'Contact' },
]

const ThemeToggle = ({ isDark, setIsDark }) => (
  <button
    type="button"
    onClick={() => setIsDark((d) => !d)}
    aria-label="Toggle theme"
    className="relative flex items-center w-14 h-8 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
  >
    <span
      className={`absolute top-1 left-1 flex items-center justify-center w-6 h-6 rounded-full bg-white dark:bg-gray-950 shadow-md transition-transform duration-300 ease-out ${
        isDark ? 'translate-x-6' : 'translate-x-0'
      }`}
    >
      {isDark ? (
        <Moon className="w-3.5 h-3.5 text-blue-400" />
      ) : (
        <Sun className="w-3.5 h-3.5 text-amber-500" />
      )}
    </span>
  </button>
)

const Navbar = () => {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('theme')

    if (stored) {
      return stored === 'dark'
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Theme
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  // Scroll spy
  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.to))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-40% 0px -55% 0px',
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (id) => {
    setMobileOpen(false)

    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  const linkClass = (id) =>
    `px-4 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
      activeSection === id
        ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white'
        : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
    }`

  return (
    <nav className="sticky top-0 z-30 isolate bg-white/80 dark:bg-black backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('home')
          }}
          className="flex items-center z-20"
        >
          <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600 text-white text-xs font-bold">
            YA
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.to}
              href={`#${link.to}`}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link.to)
              }}
              className={linkClass(link.to)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle
            isDark={isDark}
            setIsDark={setIsDark}
          />

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('contact')
            }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Get in touch
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-3 z-20">
          <ThemeToggle
            isDark={isDark}
            setIsDark={setIsDark}
          />

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="flex items-center justify-center p-1 text-gray-900 dark:text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-[999] bg-white dark:bg-black transition-opacity duration-300 ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-white dark:bg-black border-b border-gray-100 dark:border-gray-800">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('home')
            }}
            className="flex items-center"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600 text-white text-xs font-bold">
              YA
            </span>
          </a>

          {/* Mobile Header Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle
              isDark={isDark}
              setIsDark={setIsDark}
            />

            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="flex items-center justify-center p-1 text-gray-900 dark:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col gap-1 px-6 pt-6 bg-white dark:bg-black w-100">

          {links.map((link) => (
            <a
              key={link.to}
              href={`#${link.to}`}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link.to)
              }}
              className={`px-4 py-3.5 rounded-xl text-base font-medium transition-colors cursor-pointer ${
                activeSection === link.to
                  ? 'bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white font-semibold'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Get In Touch */}
          <div className="border-t border-gray-100 dark:border-gray-800 mt-4 pt-5">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('contact')
              }}
              className="flex items-center justify-center gap-1.5 w-full px-4 py-3.5 rounded-full bg-blue-600 text-white text-base font-medium hover:bg-blue-700 transition-colors"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
