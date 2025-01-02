import React from 'react'
import '../styles/global.css'
import Logo from '../assets/logo.svg'
import Overlay from '../assets/bgvideo.mp4'

const HeroSection = () => {
  return (
    <div className="hero">
        <video autoPlay loop muted playsInline className="background-video">
        <source src={Overlay} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        
        <h1 className="hero-heading">ACM STUDENT CHAPTER FISAT
        PRESENTS</h1>
        <div className='hero-logo-container'>
        <img src={Logo} alt="Logo" className="hero-logo" />

        </div>
        <p className="hero-subtext">
        Get ready to ignite your passion for technology at ACM STUDENT CHAPTER FISAT's flagship inter-college event 11th-12th November,2023.        </p>
      </div>
    </div>
  )
}

export default HeroSection
