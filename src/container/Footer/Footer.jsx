import React from 'react'
import { Newsletter } from '../../components'
import { FiFaceBook, FiInstagram, FiTwitter } from 'react-icons/fi'
import { images } from '../../constants'
import './Footer.css'

const Footer = () => (
  <div className="app__footer section__padding">
    {/* <FooterOverlay /> */}
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          Country: Nepal, District: Lalitpur, Postal code: 44705, Area code: 01
        </p>
        <p className="p__opensans">+977 9812057600</p>
        <p className="p__opensans">+977 9845372227</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">
          "The Best Way To Find Yourself Is To Loose Yourself In The Service Of
          Others."
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: '15px' }}
        />

        <div className="app__footer-links_icons">
          {/* <FiFaceBook /> */}
          <FiInstagram />

          <FiInstagram />
          <FiTwitter />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Sunday-Monday:</p>
        <p className="p__opensans">08:00am-12:00am</p>
        <p className="p__opensans">Friday-Saturday:</p>
        <p className="p__opensans">07:00am-11:00pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2021 AMAN MAHARJAN. All Rights Reserved</p>
    </div>
  </div>
)

export default Footer
