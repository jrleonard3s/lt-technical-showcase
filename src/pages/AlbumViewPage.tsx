import React from "react";
import { useParams } from "react-router";
import Gallery from "./Gallery";
import { Photo } from "./Gallery";

const AlbumViewPage = () => {
  const { albumId } = useParams();
  //get album contents
  //render gallery
  const title = "2";
  const photos: Photo[] = [
    {
      url: "https://showcase.leantechniques.com/image/danielle.jpg",
      title: "phototitle",
      albumId: 1,
      photoId: 1,
    },
    {
      url: "https://showcase.leantechniques.com/image/emma.jpg",
      title: "phototitle2",
      albumId: 1,
      photoId: 2,
    },
    {
      url: "https://showcase.leantechniques.com/image/gifford.jpg",
      title: "phototitle3",
      albumId: 1,
      photoId: 3,
    },
    {
      url: "https://showcase.leantechniques.com/image/danielle.jpg",
      title: "phototitle",
      albumId: 1,
      photoId: 4,
    },
    {
      url: "https://showcase.leantechniques.com/image/emma.jpg",
      title: "phototitle2",
      albumId: 2,
      photoId: 5,
    },
    {
      url: "https://showcase.leantechniques.com/image/gifford.jpg",
      title: "phototitle3",
      albumId: 2,
      photoId: 6,
    },
  ];
  return <Gallery title={title} photos={photos} />;
};

export default AlbumViewPage;
