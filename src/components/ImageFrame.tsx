import React from "react";

interface Props {
  uri: string;
  title: string;
}

const ImageFrame = ({ uri, title }: Props) => {
  return (
    <a href={uri}>
      <img
        srcSet={`${uri}`}
        src={`${uri}`}
        alt={title}
        loading="lazy"
      />
    </a>
  );
};

export default ImageFrame;
