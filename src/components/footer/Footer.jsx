import React from 'react'
import './footer.css'
import FaFacebook from '../../assets/icon_facebook.png'
import FaInstagram from '../../assets/icon_instagram.png'
import FaTwitter from '../../assets/icon_twitter.png'
import FaMail from '../../assets/icon_mail.png'
import FaTwitch from '../../assets/icon_twitch.png'
import FaFooter from '../../assets/Footer.png'

const Footer = () => {
  return (
    <>
     <div className="footerContainer">
      <div className="footerSatu">
        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
        <p>binarcarrental@gmail.com</p>
        <p>081-233-334-808</p>
      </div>
      <div className="footerDua">
        <p>Our Services</p>
        <p>Why Us</p>
        <p>Testimonial</p>
        <p>FAQ</p>
      </div>
      <div className="footerTiga">
      <p>Connect With Us</p>
        <div className="footerTigaImage">
          <img src={FaFacebook} alt="" />
          <img src={FaInstagram} alt="" />
          <img src={FaTwitter} alt="" />
          <img src={FaMail} alt="" />
          <img src={FaTwitch} alt="" />
        </div>
      </div>
        <div className="footerEmpat">
          <p>CopyRight Binar 2023</p>
          <img src={FaFooter} alt="" />
        </div>
    </div>  
      </>
  )
}

export default Footer