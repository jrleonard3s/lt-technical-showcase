import { useQuery } from "@tanstack/react-query";
import { Photo } from "./Gallery";

export type Album = {
  albumId: number;
  images: Photo[];
};

const AlbumSelectPage = () => {
  // Fetch Albums
  const { data, isPending, error } = useQuery({
    queryKey: ["albums"],
    queryFn: getAlbums,
  });
  if (error) {
    //alert("Album fetch failed");
    console.log(error);
  }

  // Display Album covers
  return <div>{isPending ? "todo spinner" : JSON.stringify(data)}</div>;
};

const headers = new Headers();
headers.append("lt_api_key", "lt_tech_showcase");
headers.append("accept", "*/*");
headers.append("content-type", "application/json");

const getAlbums = async () => {
  const response = await fetch("ltapi/albums", {
    headers: {
      lt_api_key: "lt_tech_showcase",
    },
  });
  return await response.json();
};

export default AlbumSelectPage;
