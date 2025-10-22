import React from 'react'
import './service.css'
import Services_Data from '../../assets/services_data'
import sparkle from "../../assets/sparkle-colored.png"

const Service = () => {
  return (
    <div id="services" className='services'>
        <div className="services-title">
            <h1>
                My Services
            </h1>
            <img src={sparkle} alt=""/>
        </div>
        <div className="services-container">
            {Services_Data.map((service, i) => {
                return <div key={i} className="services-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="service-readmore">
                        <p>Read More    🡪</p>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Service