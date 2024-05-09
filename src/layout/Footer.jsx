import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import './style.css'



const Footer = () => {
  return (
    <> 
        <div className='footer'>
        <div >
            <ul>
                <li>Blog</li>
                <li>FAQs</li>
                <li>Contact us</li>
            </ul>
        </div>
        <div className='iconsSocial'>
        <FaFacebookF  className='iconss' />
        <FaTwitter  className='iconss'/>
        <FaInstagram className='iconss'/>
        <FaSkype className='iconss'/>
        <FaPinterest className='iconss'/>
        </div>
        </div>
        <p className='footerParagraph'>©2018 All Rights Reserverd. This template is made with <CiHeart className='heart'/> by <span className='heart'>Colorlib</span></p>
    </>
  )
}

export default Footer