import { Link } from "react-router";
import "./AlbumCover.css";
import { Photo } from "../types";
import fallback_image from "../assets/fallback_image.png";

interface Props {
  albumId: number;
  photos: Photo[];
}

const AlbumCover = ({ albumId, photos }: Props) => {
  return (
    <>
      <div className="albumCover">
        <h2>Album {albumId}</h2>
        <Link
          className="albumCoverContainer"
          to={`album/${albumId}`}
          data-testid="routerLink"
        >
          <img
            data-testid="album-cover-testid"
            className="albumCoverImage"
            src={photos.length > 0 ? photos[0].url : fallback_image}
            alt={`Album ${albumId}`}
            aria-description={`Album ${albumId}`}
          />
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
