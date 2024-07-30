import { BsTwitterX, BsFacebook, BsLinkedin } from "react-icons/bs";

interface Props {
  title: string;
  url: string;
  text: string;
}

const SocialShareIcons = ({ title, url, text }: Props) => {
  return (
    <div className="d-flex align-items-center">
      <p className="mb-0 me-2">{text}</p>
      <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" className="me-2 text-reset">
        <BsTwitterX size={24} />
      </a>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" className="me-2 text-reset">
        <BsFacebook size={24} />
      </a>
      <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer" className="text-reset">
        <BsLinkedin size={24} />
      </a>
    </div>
  );
};

export default SocialShareIcons;
