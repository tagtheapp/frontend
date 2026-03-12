import Image from "next/image";
import "./page.css";
import logo from '../public/tag_logo_1024.png';
import mountain_background from '../public/mountain_background.png';
import Footer from "./components/footer/footer";
import DownloadButton from "./components/download-button/download-button";

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
            <DownloadButton imageURL={"/Apple_logo_white.png"} downloadText={"DOWNLOAD ON THE"} downloadService={"App Store"} />
            <DownloadButton imageURL={"/Google_Play_logo.png"} downloadText={"GET IT ON"} downloadService={"Google Play"} />
          </div>
        </div>
        <div className="content-right">
          <Image src={logo} alt="TAG Logo" className="content-logo"/>
        </div>
      </div>

      <Footer />
    </div>
  );
};
