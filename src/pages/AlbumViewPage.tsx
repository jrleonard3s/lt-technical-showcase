import { useParams } from "react-router";
import Gallery from "./Gallery";
import { useQuery } from "@tanstack/react-query";
import { Photo } from "../types";
import TopBar from "../components/TopBar";

const AlbumViewPage = () => {
  const { albumId } = useParams();
  // start the query as disabled so we don't fetch if the album has been passed in
  const { data, error } = useQuery({
    queryKey: ["album", albumId],
    queryFn: () => getAlbum(albumId!),
  });

  if (error) {
    alert("Failed to load album");
  }

  return (
    <>
      <TopBar title={`Album ${albumId}`} showHomeButton={true} />
      {data !== undefined && <Gallery photos={data} />}
    </>
  );
};

const getAlbum = async (albumId: string): Promise<Photo[]> => {
  const response = await fetch(`ltapi/albums/${albumId}`, {
    headers: {
      lt_api_key: "lt_tech_showcase",
    },
  });
  console.log(`ltapi/albums/${albumId}`);
  return await response.json();
};

export default AlbumViewPage;
