import { useQuery } from "@tanstack/react-query";
import AlbumCover from "../components/AlbumCover";
import { Album } from "../types";
import TopBar from "../components/TopBar";
import "./AlbumSelectPage.css";
import { useState } from "react";

const AlbumSelectPage = () => {
  const [filteredData, setFilteredData] = useState<Album[]>([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const onSearch = (searchTerm: string) => {
    console.log("searching for " + searchTerm);
    const containsSearchTerm = (album: Album, searchTerm: string): boolean => {
      return album.photos.some((photo) =>
        photo.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    };
    if (data !== undefined) {
      setFilteredData(
        data.filter((album) => containsSearchTerm(album, searchTerm))
      );
      setIsFiltered(searchTerm.length > 0);
    }
  };

  // Setup fetch query
  const { data, error } = useQuery({
    queryKey: ["albums"],
    queryFn: getAlbums,
  });
  // Alert if the fetch fails
  if (error) {
    alert("Album fetch failed");
    console.log(error);
  }

  const albumCovers = (albums?: Album[]) => {
    return (
      <>
        {albums?.map((album, index) => (
          <div key={index}>
            <AlbumCover
              albumId={album.albumId}
              photos={album.photos}
            ></AlbumCover>
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <TopBar searchCallback={onSearch} />
      <div className="albumSelectFlexbox">
        {isFiltered ? (
          <>
            {filteredData.length > 0 ? (
              albumCovers(filteredData)
            ) : (
              <p>No results found</p>
            )}
          </>
        ) : (
          albumCovers(data)
        )}
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
  return await response
    .json()
    .then((albums) =>
      albums.sort((a: Album, b: Album) => a.albumId - b.albumId)
    );
};

export default AlbumSelectPage;
