import { useParams } from "react-router";
import Gallery from "../components/Gallery";
import { useQuery } from "@tanstack/react-query";
import { Photo } from "../types";
import TopBar from "../components/TopBar";
import { useState } from "react";
import "./AlbumViewPage.css";

const AlbumViewPage = () => {
  // get album id from url
  const { albumId } = useParams();
  // tanstack query
  const { data, error } = useQuery({
    queryKey: ["album", albumId],
    queryFn: () => getAlbum(albumId!),
  });
  const [filteredData, setFilteredData] = useState<Photo[]>([]);
  const [isFiltered, setIsFiltered] = useState(false);

  // Filter the photos for the search term and flag that we should
  // use the filtered list
  const onSearch = (searchTerm: string) => {
    if (data !== undefined) {
      setFilteredData(
        data?.filter((photo) =>
          photo.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setIsFiltered(searchTerm.length > 0);
    }
  };

  if (error) {
    alert("Failed to load album");
  }

  return (
    <>
      <TopBar
        title={`Album ${albumId}`}
        showHomeButton={true}
        searchCallback={onSearch}
      />
      {data !== undefined && !isFiltered && <Gallery photos={data} />}
      {data !== undefined && isFiltered && (
        <>
          {filteredData.length > 0 ? (
            <Gallery photos={filteredData} />
          ) : (
            <p className="noResultsText">No results found</p>
          )}
        </>
      )}
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
