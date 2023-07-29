import {FaInstagram, FaYoutube, FaTwitter, FaGoogle} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="Footer-container">
    <div className="Footer-icons-container">
      <FaTwitter className="footer-icon" />
      <FaInstagram className="footer-icon" />
      <FaYoutube className="footer-icon" />
      <FaGoogle className="footer-icon" />
    </div>
    <h1 className="contact-us-text">Contact Us</h1>
  </div>
)
export default Footer
