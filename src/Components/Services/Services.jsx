import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Projects and Profiles</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="services-container">
            {Services_Data.map((Services,index)=>{
              return <div key={index} className="services-format">
                <h3>{Services.P_no}</h3>
                <h2>{Services.P_name}</h2>
                <p>{Services.P_desc}</p>
                <div className='services-readmore'>
                  <p>View</p>
      
                  <a href={Services.link} className='arrow-link'>
                    <img src={arrow_icon} alt=""/>
                    <div className="preview-box">
                      <iframe src={Services.link} title='Preview'></iframe>
                    </div>
                  </a>
                </div>
              </div>
            })}
        </div>
    </div>
  )
}

export default Services