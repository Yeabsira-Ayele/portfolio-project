import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'

const navigation = [
  { to: 'projects', label: 'Projects' },
  { to: 'experience', label: 'Experience' },
  { to: 'skills', label: 'Skills' },
  { to: 'contact', label: 'Contact' },
]

const socialLinks = [
  { href: 'https://github.com/Yeabsira-Ayele', label: 'GitHub', icon: FaGithub },
  { href: 'https://linkedin.com/in/yeabsira-ayele-509a84377', label: 'LinkedIn', icon: FaLinkedin },
  { href: 'https://x.com/your-username', label: 'Leetcode', icon: FaXTwitter },
  { href: 'mailto:yeabsiraayele42@gmail.com', label: 'Email', icon: null },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-100 dark:border-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white text-xs font-bold">
                YA
              </span>
              <span className="text-base font-bold text-gray-900 dark:text-white">
                Yeabsira Ayele
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
              Software Engineering student building thoughtful digital products.
            </p>
          </div>

          {/* Navigation + Links */}
          <div className="grid grid-cols-2 md:contents gap-8">

            {/* Navigation */}
            <div>
              <h4 className="text-xs font-mono tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-5">
                Navigation
              </h4>
              <ul className="flex flex-col gap-3.5">
                {navigation.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-xs font-mono tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-5">
                Links
              </h4>
              <ul className="flex flex-col gap-3.5">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 dark:border-gray-900 mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-xs font-mono text-gray-400 dark:text-gray-500">
            © {year} Yeabsira Ayele. All rights reserved.
          </p>
          <p className="text-xs font-mono text-gray-400 dark:text-gray-500">
            Addis Ababa, Ethiopia — Available for opportunities
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer