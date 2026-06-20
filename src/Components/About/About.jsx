import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/owner.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                 <img src={profile_img} height={556} width={280} 
                alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I’m an enthusiastic developer with a strong interest in both MERN stack development and Data Structures & Algorithms (DSA) using C++. While I’m still building my expertise in MERN, I have a comparatively stronger command over DSA, which has enhanced my logical thinking and problem-solving abilities. I enjoy the continuous learning process in both areas and am committed to growing as a well-rounded developer.</p>
                    <p> I'm especially enthusiastic about working on real-time projects that bring ideas to life and offer practical, hands-on experience.</p>
                </div>
                <br />
                <div className="about-skills">
                    <div className="about-skill">
                        <p>DSA in C++</p><hr style={{width:"70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>HTML && CSS</p><hr style={{width:"50%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>React JS</p><hr style={{width:"50%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p><hr style={{width:"60%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Node.js</p><hr style={{width:"50%"}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
