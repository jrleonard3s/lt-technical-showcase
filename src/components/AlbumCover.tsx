import { Link } from "react-router";
import "./AlbumCover.css";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { Photo } from "../types";

interface Props {
  albumId: number;
  photos: Photo[];
}

const AlbumCover = ({ albumId, photos }: Props) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <div className="cover" style={{ display: loaded ? "block" : "none" }}>
        <h2>Album {albumId}</h2>
        <Link className="container" to={`${albumId}`}>
          <img
            className="image"
            src={photos[0].url}
            onLoad={() => setLoaded(true)}
          />
          <div className="overlay">
            <div className="text">
              {photos.length} Photo{photos.length > 1 ? "s" : ""}
            </div>
          </div>
        </Link>
      </div>
      <CircularProgress
        className="spinner"
        style={{ display: loaded ? "none" : "block" }}
      />
    </>
  );
};

export default AlbumCover;
