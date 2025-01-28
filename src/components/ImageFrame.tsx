import { Photo } from "../types";
import "./ImageFrame.css";

interface Props {
  photo: Photo;
}

const ImageFrame = ({ photo }: Props) => {
  return (
    <div className="imageFrameWrapper">
      <a href={photo.url} className="imageFrameContainer" target="_blank">
        <img
          className="imageFrameImage"
          src={photo.url}
          alt={photo.title}
          aria-description={photo.title}
          loading="lazy"
        />
        <div className="imageFrameOverlay">
          <div className="imageFrameText">{photo.title}</div>
        </div>
      </a>
    </div>
  );
};

export default ImageFrame;
