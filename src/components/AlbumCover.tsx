import { Link } from "react-router";
import "./AlbumCover.css";
import { Photo } from "../types";

interface Props {
  albumId: number;
  photos: Photo[];
}

const AlbumCover = ({ albumId, photos }: Props) => {
  return (
    <>
      <div className="albumCover">
        <h2>Album {albumId}</h2>
        <Link className="albumCoverContainer" to={`album/${albumId}`}>
          <img className="albumCoverImage" src={photos[0].url} />
          <div className="albumCoverOverlay">
            <div className="albumCoverText">
              {photos.length} Photo{photos.length > 1 ? "s" : ""}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default AlbumCover;
