import { useParams } from "react-router";
import Gallery from "./Gallery";
import { useQuery } from "@tanstack/react-query";
import { Album } from "../types";

const AlbumViewPage = () => {
  const { albumId } = useParams();
  // start the query as disabled so we don't fetch if the album has been passed in
  const { data, isFetching, isFetched, error } = useQuery({
    queryKey: ["album", albumId],
    queryFn: () => getAlbum(albumId!),
  });

  return <Gallery title={title} photos={photos} />;
};

const getAlbum = async (albumId: string): Promise<Album> => {
  const response = await fetch(`ltapi/album/${albumId}`, {
    headers: {
      lt_api_key: "lt_tech_showcase",
    },
  });
  return await response.json();
};

export default AlbumViewPage;
