import { CircularProgress } from "@mui/material";
import { Photo } from "../types";
import { useState } from "react";

interface Props {
  photo: Photo;
  width: number;
}

const ImageFrame = ({ photo, width }: Props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <a
        href={photo.url}
        style={{ display: loaded ? "block" : "none" }}
        target="_blank"
      >
        <img
          src={photo.url}
          alt={photo.title}
          width={width}
          aria-description={photo.title}
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
      </a>
      <CircularProgress style={{ display: loaded ? "none" : "block" }} />
    </>
  );
};

export default ImageFrame;
