import Image from "next/image";
import "./page.css";
import logo from '../public/tag_logo_1024.png';

export default function Home() {
  return (
    <div className="container">
      <div className="content-container">
        <div className="content-left">
          <div className="title">
            <h1>TAG</h1>
            <h3>You're It!</h3>
          </div>
          <div>
            <p className="description">Bring back the thrill of playground tag,<br />now across your whole campus, with<br />live maps, groups, and real-time hunts</p>
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
