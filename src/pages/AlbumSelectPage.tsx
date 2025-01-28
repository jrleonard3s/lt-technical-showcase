import { useQuery } from "@tanstack/react-query";
import AlbumCover from "../components/AlbumCover";
import { Album } from "../types";
import TopBar from "../components/TopBar";
import "./AlbumSelectPage.css";

const AlbumSelectPage = () => {
  // Setup fetch query
  const { data, error } = useQuery({
    queryKey: ["albums"],
    queryFn: getAlbums,
  });
  if (error) {
    alert("Album fetch failed");
    console.log(error);
  }

  data?.sort((a, b) => a.albumId - b.albumId);
  return (
    <>
      <TopBar />
      <div className="flexbox">
        {data?.map((album, index) => (
          <div key={index}>
            <AlbumCover
              albumId={album.albumId}
              photos={album.photos}
            ></AlbumCover>
          </div>
        ))}
      </div>
    </>
  );
};

const getAlbums = async (): Promise<Album[]> => {
  const response = await fetch("ltapi/albums", {
    headers: {
      lt_api_key: "lt_tech_showcase",
    },
  });
  return await response.json();
};

export default AlbumSelectPage;
