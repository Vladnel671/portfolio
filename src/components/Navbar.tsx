import React from 'react'
import { ScrollRefs } from '../types/types'

const Navbar: React.FC<{ scrollRefs: ScrollRefs }> = ({ scrollRefs }) => {
  const navLinks = [
    { label: 'Main', ref: scrollRefs.mainRef },
    { label: 'Skills', ref: scrollRefs.skillsRef },
    { label: 'Projects', ref: scrollRefs.projectRef },
    { label: 'Contacts', ref: scrollRefs.contactsRef },
    { label: 'Socials', ref: scrollRefs.socialsRef },
  ]

  return (
    <nav className="flex">
      {navLinks.map((link) => (
        <a
          key={link.label}
          onClick={() =>
            link.ref.current?.scrollIntoView({ behavior: 'smooth' })
          }
          className="text-sm py-3.5 px-2.5 cursor-pointer hover:bg-white/10 transition-colors duration-200 rounded-md"
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}

export default Navbar
