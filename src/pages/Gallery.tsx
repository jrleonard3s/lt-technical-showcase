import { Box, ImageList, ImageListItem } from "@mui/material";
import ImageFrame from "../components/ImageFrame";
import useWindowDimensions from "../hooks/useWindowDimensions";
import "./Gallery.css";
import TopBar from "../components/TopBar";

interface Props {
  photos: Photo[];
  title?: string;
}

const Gallery = ({ title, photos }: Props) => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const imageListWidth = windowWidth * 0.85;
  const imageWidth = Math.min(300, imageListWidth);
  return (
    <>
      <TopBar title={title} />
      <Box
        className="imageListContainer"
        sx={{
          width: windowWidth,
          height: windowHeight,
          overflowY: "scroll",
        }}
      >
        <ImageList
          className="imageList"
          variant="masonry"
          cols={Math.max(Math.floor(imageListWidth / imageWidth), 1)}
          //style={{
          //  width: imageListWidth,
          //  height: windowHeight - 64 /* height of the top app bar */,
          //}}
          gap={4}
        >
          {photos.map((photo, idx) => (
            <ImageListItem key={idx}>
              <ImageFrame photo={photo} width={imageWidth}></ImageFrame>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
};

export default Gallery;
