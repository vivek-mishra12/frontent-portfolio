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
                    <p>I’m a passionate MERN Stack Developer with a solid foundation in building dynamic and responsive web applications. Alongside my development journey, I’ve also explored Data Structures and Algorithms using C++, which has strengthened my problem-solving skills. While I’m still refining my mastery in DSA, I enjoy the learning process and continually strive to improve.</p>
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