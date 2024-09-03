import { Image } from "react-bootstrap";
import { MediaTypes } from "@entities";

interface Props {
  title: string;
  type: MediaTypes;
  url: string;
}

const FeaturedMedia = ({ title, type, url }: Props) => {
  if (type === "image") {
    return <Image src={url} alt={title} className="img-fluid border rounded" />;
  }

  if (type === "video") {
    return (
      <div className="ratio ratio-16x9 w-75 mx-auto mb-3 shadow border rounded">
        <iframe className="embed-responsive-item" src={url} allowFullScreen title={title}></iframe>
      </div>
    );
  }

  return null;
};

export default FeaturedMedia;
