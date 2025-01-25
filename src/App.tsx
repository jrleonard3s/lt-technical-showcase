import { ImageList, ImageListItem } from "@mui/material";
import ImageFrame from "./components/ImageFrame";
import useWindowDimensions from "./ViewportHooks";
import "./App.css";

function App() {
  const { width: windowWidth } = useWindowDimensions();
  let imageUris = [
    "http://showcase.leantechniques.com/image/photo-2.jpg",
    "http://showcase.leantechniques.com/image/photo-10.jpg",
  ];

  const imageMaxWidth = Math.min(300, windowWidth);
  return (
    <>
      <ImageList
        className="imageList"
        variant="woven"
        cols={Math.max(Math.floor(windowWidth / imageMaxWidth), 1)}
        gap={8}
      >
        {imageUris.map((uri) => (
          <ImageListItem key={uri}>
            <ImageFrame width={imageMaxWidth} uri={uri}></ImageFrame>
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

export default App;
