import Image from "next/image";
import "./download-button.css";
import { motion } from "motion/react";

interface DownloadButtonProps {
  imageURL: string,
  downloadText: string,
  downloadService: string,
}

const DownloadButton = (props: DownloadButtonProps) => {
  return (
    <a href="">
      <motion.div
        className="download-link"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.05 }}
      >
        <Image
          src={props.imageURL}
          alt={`${props.downloadService} logo`}
          width={0}
          height={0}
          className="download-img"/>
        <div className="download-info">
          <p className="download-text">{props.downloadText}</p>
          <p className="download-text white">{props.downloadService}</p>
        </div>
      </motion.div>
    </a>
  )
};

export default DownloadButton;