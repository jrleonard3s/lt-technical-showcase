interface Props {
  uri: string;
  title?: string;
  width: number;
}

const ImageFrame = ({ uri, title, width }: Props) => {
  return (
    <a href={uri} target="_blank">
      <img src={uri} alt={title} width={width} loading="lazy" />
    </a>
  );
};

export default ImageFrame;
 