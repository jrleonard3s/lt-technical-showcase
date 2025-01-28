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
      <div className="cover">
        <h2>Album {albumId}</h2>
        <Link className="container" to={`${albumId}`}>
          <img className="image" src={photos[0].url} />
          <div className="overlay">
            <div className="text">
              {photos.length} Photo{photos.length > 1 ? "s" : ""}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default AlbumCover;
