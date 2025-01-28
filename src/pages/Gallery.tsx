import ImageFrame from "../components/ImageFrame";
import "./Gallery.css";
import { Photo } from "../types";

interface Props {
  photos: Photo[];
}

const Gallery = ({ photos }: Props) => {
  return (
    <>
      <div className="flexbox">
        {photos.map((photo, index) => (
          <ImageFrame key={index} photo={photo}></ImageFrame>
        ))}
      </div>
    </>
  );
};

export default Gallery;
