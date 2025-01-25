interface Props {
  uri: string;
  title?: string;
  width?: number;
}

const ImageFrame = ({ uri, title, width = 300 }: Props) => {
  return (
    <a href={uri} target="_blank">
      <img
        width={width}
        srcSet={`${uri}?w=161&fit=crop&auto=format&dpr=2 2x`}
        src={`${uri}?w=161&fit=crop&auto=format`}
        alt={title}
        loading="lazy"
      />
    </a>
  );
};

export default ImageFrame;
