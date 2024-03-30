import { Dropdown, DropdownButton } from "react-bootstrap";
import usePlatforms from "../../hooks/usePlatforms";
import { Platform } from "../../hooks/useProjects";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={selectedPlatform?.name || "Platforms"}
    >
      {data.map((platform) => (
        <Dropdown.Item
          onClick={() => onSelectPlatform(platform)}
          key={platform.id}
        >
          {platform.name}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default PlatformSelector;
