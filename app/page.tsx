import Image from "next/image";
import "./page.css";
import logo from '../public/tag_logo_1024.png';
import Apple_logo from '../public/Apple_logo_white.png';
import Google_Play_logo from '../public/Google_Play_logo.png';
import mountain_background from '../public/mountain_background.png';

export default function Home() {
  return (
    <div className="container">
      <div className="content-container">
        <Image
          src={mountain_background}
          alt="Mountain range background image"
          priority
          fill
          className="bg-mountain"/>
        <div className="content-left">
          <div className="title">
            <h1>TAG</h1>
            <h3>You're It!</h3>
          </div>
          <div>
            <p className="description">Bring back the thrill of playground tag,<br />now across your whole campus, with<br />live maps, groups, and real-time hunts</p>
          </div>
          <div className="download-links">
            <a href="">
              <div className="download-link">
                <Image src={Apple_logo} alt="Apple logo" className="download-img"/>
                <div className="download-info">
                  <p className="download-text">DOWNLOAD ON THE</p>
                  <p className="download-text white">App Store</p>
                </div>
              </div>
            </a>
            <a href="">
              <div className="download-link">
                <Image src={Google_Play_logo} alt="Google Play logo" className="download-img"/>
                <div className="download-info">
                  <p className="download-text">GET IT ON</p>
                  <p className="download-text white">Google Play</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="content-right">
          <Image src={logo} alt="TAG Logo" className="content-logo"/>
        </div>
      </div>

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
    </div>
  );
}
