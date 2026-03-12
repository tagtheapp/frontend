import Image from "next/image";
import "./download-button.css";

interface DownloadButtonProps {
  imageURL: string,
  downloadText: string,
  downloadService: string,
}

const DownloadButton = (props: DownloadButtonProps) => {
  return (
    <a href="">
      <div className="download-link">
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
      </div>
    </a>
  )
};

export default DownloadButton;