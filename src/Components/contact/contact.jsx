import React from 'react'
import './contact.css'
import sparkle from "../../assets/sparkle-colored.png"
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import in_icon from '../../assets/in_logo.png'

const Contact = () => {
   
    const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9be474f9-9ad1-41b5-953a-247e0308e011")

    const json = JSON.stringify(Object.fromEntries(formData));

    const result = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json
      }).then((result) => result.json());

      if(result.success){
        alert(result.message);
      }
  };

  return (
    <div id="contact" className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={sparkle} alt=""/>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Currently I'm available to take on new projects. Feel free to send me a message about anything that you want me to work on. 
                    You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt=""/>
                        <p>miaastojanova@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img height="35px" src={location_icon} alt=""/>
                        <p>Skopje, Macedonia</p>
                    </div>
                    <div className="contact-detail">
                        <img className='linked-in' src={in_icon} alt=""/>
                        <a href='https://www.linkedin.com/in/mia-stojanova/'>Mia Stojanova</a>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} action="" className="contact-right">
                <label htmlFor="">Your name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                
                <label htmlFor="">Your e-mail</label>
                <input type="email" placeholder='Enter your e-mail' name='name'/>
                
                <label htmlFor="">Message</label>
                <textarea name="message" rows="8" placeholder='Enter your message'/>

                <button type="submit" className='contact-submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact