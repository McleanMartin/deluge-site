import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/training', label: 'Training' },
    { path: '/components', label: 'Components' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:"#2563eb"}}/>
                  <stop offset="100%" style={{stopColor:"#3b82f6"}}/>
                </linearGradient>
              </defs>
              <polygon points="50,5 95,30 95,70 50,95 5,70 5,30" fill="none" stroke="url(#logoGradient)" strokeWidth="2"/>
              <polygon points="50,20 80,37 80,63 50,80 20,63 20,37" fill="none" stroke="url(#logoGradient)" strokeWidth="1.5" opacity="0.6"/>
              <circle cx="50" cy="50" r="12" fill="url(#logoGradient)" opacity="0.3"/>
              <circle cx="50" cy="50" r="6" fill="url(#logoGradient)"/>
            </svg>
          </div>
          <div className="navbar-brand">
            <h1 className="brand-name">DELUGE</h1>
            <p className="tagline">IoT & Automation Solutions</p>
          </div>
        </Link>
        
        <button 
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                className={`navbar-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

