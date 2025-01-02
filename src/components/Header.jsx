import React, {useState} from 'react'

import '../styles/global.css'
import Logo from '../assets/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#home"><img src={Logo} alt="Logo" /></a>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#schedule">Schedule</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-button">
        <a href="#register" className="btn">Register</a>
      </div>
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        ☰
      </button>
    </nav>
  )
}

export default Header
