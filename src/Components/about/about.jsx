import React from 'react'
import './about.css'
import sparkle from "../../assets/sparkle-colored.png"
import profile_pic1 from "../../assets/profile-pic1.jpg"

const About = () => {
  return (
    <div id="about" className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={sparkle} alt='sparkle'/>
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_pic1} alt='profile_img'/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I may be at the start of my professional journey, but I’ve already built a solid foundation across multiple technologies and love turning ideas into real, working projects.</p>
                    <p>My curiosity doesn’t stop at one framework — I enjoy exploring the entire tech stack, learning fast, and finding creative ways to make code come alive.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p className='about-skill-title'>Languages</p>
                        <p className='about-skill-items'>Java, Python, C++, C</p>
                    </div>
                    <hr></hr>
                    <div className="about-skill">
                        <p className='about-skill-title'>Frameworks</p>
                        <p className='about-skill-items'>Spring Boot, Django, React</p>
                    </div>
                    <hr></hr>
                    <div className="about-skill">
                        <p className='about-skill-title'>Databases & tools</p>
                        <p className='about-skill-items'>MySql, Git, GitHub</p>
                    </div>
                    <hr></hr>
                    <div className="about-skill">
                        <p className='about-skill-title'>Additional & related skills</p>
                        <p className='about-skill-items'>Data Science Basics, RESTful APIs, Object-Oriented Programming (OOP), Agile (Scrum/Kanban)</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achivements">
            <div className="about-achivement">
                <h1></h1>
            </div>
        </div>
    </div>
  )
}

export default About