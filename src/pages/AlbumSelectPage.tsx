import { useQuery } from "@tanstack/react-query";
import { Photo } from "./Gallery";
import AlbumCover from "../components/AlbumCover";

export type Album = {
  albumId: number;
  photos: Photo[];
};

export type Albums = {
  albums: Album[];
};

const AlbumSelectPage = () => {
  var parsedResponse: Album[] = [];

  // Setup fetch query
  const { data, isFetched, error } = useQuery({
    queryKey: ["albums"],
    queryFn: getAlbums,
  });
  if (error) {
    alert("Album fetch failed");
    console.log(error);
  }
  if (isFetched) {
    parsedResponse = JSON.parse(JSON.stringify(data)) as Album[];
    parsedResponse.sort((a, b) => a.albumId - b.albumId);
  }
  return (
    <div>
      {!isFetched
        ? "todo spinner"
        : parsedResponse.map((album, index) => (
            <AlbumCover
              key={index}
              albumId={album.albumId}
              photos={album.photos}
            ></AlbumCover>
          ))}
    </div>
  );
};

const getAlbums = async () => {
  const response = await fetch("ltapi/albums", {
    headers: {
      lt_api_key: "lt_tech_showcase",
    },
  });
  return await response.json();
};

export default AlbumSelectPage;
