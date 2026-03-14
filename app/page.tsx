"use client"

import Image from "next/image";
import "./page.css";
import logo from '../public/tag_logo_1024.png';
import mountain_background from '../public/mountain_background.png';
import Footer from "./components/footer/footer";
import DownloadButton from "./components/download-button/download-button";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="container">
      <div className="content-container">
        <Image
          src={mountain_background}
          alt="Mountain range background image"
          priority
          fill
          decoding="async"
          className="bg-mountain"/>
        
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          className="content-left"
        >
          <div className="title">
            <h1>TAG</h1>
            <h3>You're It!</h3>
          </div>
          <div>
            <p className="description">Bring back the thrill of playground tag across<br />your town, campus, or city, with live maps,<br />groups, and real-time hunts</p>
          </div>
          <div className="download-links">
            <DownloadButton imageURL={"/Apple_logo_white.png"} downloadText={"DOWNLOAD ON THE"} downloadService={"App Store"} />
            <DownloadButton imageURL={"/Google_Play_logo.png"} downloadText={"GET IT ON"} downloadService={"Google Play"} />
          </div>
        </motion.div>

        <div className="content-right">
          <motion.div
            style={{ transformOrigin: "center center", marginTop: "auto" }}
            initial={{ rotate: -3 }}
            whileHover={{ rotate: -7 }}
            whileTap={{ rotate: -7 }}
          >
            <Image src={logo} alt="TAG Logo" className="content-logo"/>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
