import { Stack } from "react-bootstrap";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/linkedin";
import "react-social-icons/github";
import "react-social-icons/soundcloud";
import "react-social-icons/youtube";

const SocialIconGroup = () => {
  return (
    <Stack
      direction="horizontal"
      gap={3} // Adjust gap as needed
      className="justify-content-center justify-content-lg-end"
    >
      <div className="p-1">
        <SocialIcon url="https://www.linkedin.com/in/-michael-grinnell" target="_blank" className="social-icon" />
      </div>
      <div className="p-1">
        <SocialIcon network="github" href="https://bitbucket.org/michael_grinnell" target="_blank" className="social-icon" />
      </div>
      <div className="p-1">
        <SocialIcon url="https://soundcloud.com/mikegireland" target="_blank" className="social-icon" />
      </div>
      <div className="p-1">
        <SocialIcon url="https://www.youtube.com/@digitaldeveloper4803" target="_blank" className="social-icon" />
      </div>
    </Stack>
  );
};

export default SocialIconGroup;
