import { useParams } from "react-router";

const SingleImageViewPage = () => {
  const { photoId } = useParams();
  return <div>View image {photoId}</div>;
};

export default SingleImageViewPage;
