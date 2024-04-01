import { Dropdown, DropdownButton } from "react-bootstrap";
import usePlatforms, { Platform } from "../../hooks/usePlatforms";

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
      {data?.results.map((platform) => (
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
