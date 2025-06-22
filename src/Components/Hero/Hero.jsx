import React from 'react'
import './Hero.css'
import profile_img from '../../assets/circular_profile_only.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} height={180} width={170}  alt="" />
        <h1><span>I'm Vivek Mishra,</span>from Electronics and Communication Engineering branch.</h1>
        <p>I’m a developer with growing experience in both MERN stack development and Data Structures & Algorithms (DSA) using C++. </p>
        <div className="hero-action">
            <div ><AnchorLink className="hero-connect" offset={50} href='#contact'>Connect With me </AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>

  )
}

export default Hero
