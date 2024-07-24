import { Stack } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons/linkedin';
import 'react-social-icons/github';
import 'react-social-icons/soundcloud';
import 'react-social-icons/youtube';

const SocialIconGroup = () => {
    return (
        <Stack direction="horizontal" gap={3}>
            <div className="p-1"><SocialIcon url="https://www.linkedin.com" /></div>
            <div className="p-1"><SocialIcon url="https://github.com" /></div>
            <div className="p-1"><SocialIcon url="https://www.soundcloud.com" /></div>
            <div className="p-1"><SocialIcon url="https://www.youtube.com" /></div>
        </Stack>
    );
}

export default SocialIconGroup;
