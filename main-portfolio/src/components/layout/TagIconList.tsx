import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import Platform from "src/entities/Platform";
import { IconType } from "react-icons";
import { Badge, Stack } from "react-bootstrap";

interface Props {
  platforms: Platform[];
}

const TagIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <>
      <Stack direction="horizontal" gap={2}>
        {platforms.map((platform, index) => {
          const IconComponent = iconMap[platform.slug];
          return (
            <Badge bg="dark" key={index}>
              {IconComponent ? <IconComponent /> : null}
            </Badge>
          );
        })}
      </Stack>
    </>
  );
};

export default TagIconList;
