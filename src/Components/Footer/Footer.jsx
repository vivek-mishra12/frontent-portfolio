import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/ass.png'
import user_icon from "../../assets/user_icon.svg"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} width={60} alt="" />
                <p>I am a MERN stack developer from MMMUT Gorakhpur</p>
            </div>
            {/* <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter yout email' />
                </div>
            </div> */}
            </div>
            <hr />
            <div className="footer-bottom">
             <div className="footer-bottom-left">&copy; Vivek's Portfolio</div> 
             <br />
              
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