import { Photo } from "./Gallery";

export type Album = {
  albumId: number;
  images: Photo[];
};

let imageUris = [
  "https://showcase.leantechniques.com/image/nick.jpg",
  "https://showcase.leantechniques.com/image/photo-10.jpg",
  "https://showcase.leantechniques.com/image/photo-2.jpg",
  "https://showcase.leantechniques.com/image/photo.jpg",
  "https://showcase.leantechniques.com/image/roy.jpg",
  "https://showcase.leantechniques.com/image/scott-1.jpg",
  "https://showcase.leantechniques.com/image/ward.jpg",
  "https://showcase.leantechniques.com/image/welcome.jpg",
];

const AlbumSelectPage = () => {
  // Fetch Albums
  // Display Album covers
  return <div> album select page </div>;
};

export default AlbumSelectPage;
