import React from 'react'
import profile_pic from '../../assets/profile-pic.PNG'
import "./hero.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {
  return (
    <div id="home" className='hero'>
        <img src={profile_pic}></img>
        <h1>I'm Mia Stojanova, <span>a soon-to-be software engineer</span>, exploring <span>Software, Data & Design.</span></h1>
        <p>
            Final-year software engineering student passionate about creating practical digital solutions through code. 
            I love transforming ideas into interactive web experiences using Java, Python and modern frameworks.
        </p>
        <div className="hero-action">
            <div className="hero-connect" color='white'><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero