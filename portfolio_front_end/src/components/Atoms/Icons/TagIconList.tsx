import { FaWindows, FaApple, FaLinux } from "react-icons/fa";
import { IconType } from "react-icons";
import { Badge, Stack } from "react-bootstrap";

interface Props {
  tags: string[];
}

const TagIconList = ({ tags }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    windows: FaWindows,
    mac: FaApple,
    linux: FaLinux
  };

  return (
    <>
      <Stack direction="horizontal" gap={2}>
        {tags.map((tag, index) => {
          const IconComponent = iconMap[tag];
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
