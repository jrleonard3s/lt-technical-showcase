import { ImageList, ImageListItem } from "@mui/material";
import ImageFrame from "./components/ImageFrame";
import useWindowDimensions from "./ViewportHooks";
import "./App.css";
import TopBar from "./components/TopBar";

function App() {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  let imageUris = [
    "http://showcase.leantechniques.com/image/photo-10.jpg",
    "http://showcase.leantechniques.com/image/photo-10.jpg",
    "http://showcase.leantechniques.com/image/photo-2.jpg",
    "http://showcase.leantechniques.com/image/photo-2.jpg",
    "http://showcase.leantechniques.com/image/photo-2.jpg",
    "http://showcase.leantechniques.com/image/photo-2.jpg",
    "http://showcase.leantechniques.com/image/photo-2.jpg",
    "http://showcase.leantechniques.com/image/photo-10.jpg",
    "http://showcase.leantechniques.com/image/photo-2.jpg",
    "http://showcase.leantechniques.com/image/photo-2.jpg",
    "http://showcase.leantechniques.com/image/photo-10.jpg",
    "http://showcase.leantechniques.com/image/photo-10.jpg",
    "http://showcase.leantechniques.com/image/photo-10.jpg",
    "http://showcase.leantechniques.com/image/photo-10.jpg",
    "http://showcase.leantechniques.com/image/photo-10.jpg",
    "http://showcase.leantechniques.com/image/photo-10.jpg",
    "http://showcase.leantechniques.com/image/photo-2.jpg",
    "http://showcase.leantechniques.com/image/photo-2.jpg",
    "http://showcase.leantechniques.com/image/photo-2.jpg",
    "http://showcase.leantechniques.com/image/photo-2.jpg",
    "http://showcase.leantechniques.com/image/photo-10.jpg",
    "http://showcase.leantechniques.com/image/photo-10.jpg",
  ];

  const imageListWidth = windowWidth * 0.85;
  const imageMaxWidth = Math.min(300, imageListWidth);
  return (
    <>
      <TopBar />
      <ImageList
        className="imageList"
        variant="woven"
        cols={Math.max(Math.floor(imageListWidth / imageMaxWidth), 1)}
        style={{
          width: imageListWidth,
          height: windowHeight - 64 /* height of the top app bar */,
        }}
        gap={8}
      >
        {imageUris.map((uri, idx) => (
          <ImageListItem key={idx}>
            <ImageFrame width={imageMaxWidth} uri={uri}></ImageFrame>
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

export default App;
