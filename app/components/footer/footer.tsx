import Image from "next/image";
import "./footer.css";
import logo from '../../../public/tag_logo_1024.png';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-links hover-pointer">
        <Image src={logo} alt="TAG Logo" className="footer-logo"/>
        <p className="footer-link">TAG</p>
      </div>

      <div className="footer-links">
        <a href="/privacy" className="footer-link hover-pointer">Privacy</a>
        <a href="/terms" className="footer-link hover-pointer">Terms</a>
        <a href="/contact" className="footer-link hover-pointer">Contact</a>
      </div>
    </div>
  )
};

export default Footer;