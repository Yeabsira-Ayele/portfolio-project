import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Sun, Circle, Moon, ArrowRight } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact Me' },
]

const linkClass = ({ isActive }) =>
  `px-4 py-1.5 rounded-full text-sm font-medium transition-colors
   ${isActive
      ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
      : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'}`

const themeOptions = [
  { value: 'light', icon: Sun },
  { value: 'system', icon: Circle },
  { value: 'dark', icon: Moon },
]

const Navbar = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'system')

  useEffect(() => {
    const root = document.documentElement
    const apply = (t) => {
      const isDark = t === 'dark' || (t === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
      root.classList.toggle('dark', isDark)
    }
    apply(theme)
    localStorage.setItem('theme', theme)

    if (theme === 'system') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      const listener = () => apply('system')
      mq.addEventListener('change', listener)
      return () => mq.removeEventListener('change', listener)
    }
  }, [theme])

  return (
    <nav className="sticky top-0 z-30 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3 relative">

        {/* Brand */}
        <NavLink to="/" className="flex items-center gap-2.5 z-20">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white text-xs font-bold">
            YA
          </span>
          <span className="text-base font-semibold tracking-tight text-gray-900 dark:text-white">
            Yeabsira Ayele
          </span>
        </NavLink>

        <input type="checkbox" id="menu-toggle" className="peer hidden" />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right side: theme switcher + CTA (desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-0.5 p-1 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
            {themeOptions.map(({ value, icon: Icon }) => (
              <button
                key={value}
                type="button"
                onClick={() => setTheme(value)}
                aria-label={`${value} theme`}
                className={`flex items-center justify-center w-7 h-7 rounded-full transition-colors
                  ${theme === value
                    ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                    : 'text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}
              >
                <Icon className="w-3.5 h-3.5" fill={value !== 'system' && theme === value ? 'currentColor' : 'none'} />
              </button>
            ))}
          </div>

          <NavLink
            to="/contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Get in touch <ArrowRight className="w-3.5 h-3.5" />
          </NavLink>
        </div>

        {/* Mobile toggle */}
        <label
          htmlFor="menu-toggle"
          aria-label="Toggle menu"
          className="md:hidden relative flex items-center p-2 -mr-2 z-20 cursor-pointer select-none"
        >
          <Menu className="w-6 h-6 text-gray-900 dark:text-white peer-checked:hidden" />
          <X className="w-6 h-6 text-gray-900 dark:text-white hidden peer-checked:block" />
        </label>

        {/* Mobile menu dropdown */}
        <div className="md:hidden absolute top-full left-0 w-full grid grid-rows-[0fr] peer-checked:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out z-10">
          <div className="overflow-hidden bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 shadow-md">
            <div className="flex flex-col gap-1 px-6 pt-2 pb-4">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => { document.getElementById('menu-toggle').checked = false }}
                  className={({ isActive }) =>
                    `py-3 text-base font-medium border-b border-gray-50 dark:border-gray-800 last:border-none transition-colors
                     ${isActive ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <div className="flex items-center gap-0.5 p-1 mt-2 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 w-fit">
                {themeOptions.map(({ value, icon: Icon }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setTheme(value)}
                    aria-label={`${value} theme`}
                    className={`flex items-center justify-center w-7 h-7 rounded-full transition-colors
                      ${theme === value
                        ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                        : 'text-gray-400'}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar