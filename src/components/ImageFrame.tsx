import { Photo } from "../pages/Gallery";

interface Props {
  photo: Photo;
  width: number;
}

const ImageFrame = ({ photo, width }: Props) => {
  return (
    <a href={photo.url} target="_blank">
      <img src={photo.url} alt={photo.title} width={width} loading="lazy" />
    </a>
  );
};

export default ImageFrame;
