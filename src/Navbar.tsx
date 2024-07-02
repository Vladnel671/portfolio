import React from 'react'
import { ScrollRefs } from './types'

const Navbar: React.FC<{ scrollRefs: ScrollRefs }> = ({ scrollRefs }) => {
  const navLinks = [
    { label: 'Main', ref: scrollRefs.mainRef },
    { label: 'Skills', ref: scrollRefs.skillsRef },
    { label: 'Projects', ref: scrollRefs.projectRef },
    { label: 'Contacts', ref: scrollRefs.contactsRef },
    { label: 'Socials', ref: scrollRefs.socialsRef },
  ]

  return (
    <nav className="flex mt-1">
      {navLinks.map((link) => (
        <a
          key={link.label}
          onClick={() =>
            link.ref.current?.scrollIntoView({ behavior: 'smooth' })
          }
          className="p-3 cursor-pointer hover:bg-gray-700 transition-colors duration-200 rounded-md"
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}

export default Navbar
