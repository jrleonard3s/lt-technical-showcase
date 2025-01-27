import { Box, ImageList, ImageListItem } from "@mui/material";
import ImageFrame from "../components/ImageFrame";
import useWindowDimensions from "../ViewportHooks";
import "./HomePage.css";
import TopBar from "../components/TopBar";

function HomePage() {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  let imageUris = [
    "https://showcase.leantechniques.com/image/danielle.jpg",
    "https://showcase.leantechniques.com/image/emma.jpg",
    "https://showcase.leantechniques.com/image/gifford.jpg",
    "https://showcase.leantechniques.com/image/jarred.jpg",
    "https://showcase.leantechniques.com/image/jason-peyton.jpg",
    "https://showcase.leantechniques.com/image/nick.jpg",
    "https://showcase.leantechniques.com/image/photo-10.jpg",
    "https://showcase.leantechniques.com/image/photo-2.jpg",
    "https://showcase.leantechniques.com/image/photo.jpg",
    "https://showcase.leantechniques.com/image/roy.jpg",
    "https://showcase.leantechniques.com/image/scott-1.jpg",
    "https://showcase.leantechniques.com/image/ward.jpg",
    "https://showcase.leantechniques.com/image/welcome.jpg",
  ];

  const imageListWidth = windowWidth * 0.85;
  const imageWidth = Math.min(300, imageListWidth);
  return (
    <>
      <TopBar />
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
          {imageUris.map((uri, idx) => (
            <ImageListItem key={idx}>
              <ImageFrame uri={uri} width={imageWidth}></ImageFrame>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
}

export default HomePage;
