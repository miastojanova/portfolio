import React from 'react'
import "./footer.css"
import user_icon from "../../assets/user_icon.svg"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <p className='name-logo'>MIASTOJANOVA</p>
                <p>  Final-year software engineering student passionate about creating practical digital solutions through code. 
            I love transforming ideas into interactive web experiences using Java, Python and modern frameworks.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt=''/>
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">
                    Subscribe
                </div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">
                © 2025 Mia Stojanova. All rights reserved
            </p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer