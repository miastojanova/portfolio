import React from 'react'
import './mywork.css'
import mywork_data from '../../assets/mywork_data.js'
import sparkle from "../../assets/sparkle-colored.png"


const Mywork = () => {
return (
    <div id="portfolio" className='mywork'>
        <div className="mywork-title">
            <h1>My Work</h1>
            <img src={sparkle} alt=""/>
        </div>
        <div className="mywork-container">
            {
            mywork_data.length > 0 ?(
            mywork_data.map((work, index) => (
                <img src={work.w_img} key={index} alt=""/>
            ))
        ) : (
            <h3 className='if-text'>Yet to come ⍨</h3>
        )}
        </div>
        <div className="mywork-showmore">
            <p>Show more     </p><p>🡪</p>
        </div>
    </div>
  )
}

export default Mywork