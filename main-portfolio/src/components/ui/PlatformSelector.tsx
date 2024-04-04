import { Dropdown, DropdownButton } from "react-bootstrap";
import usePlatforms, { Platform } from "../../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = data?.results.find(
    (p) => p.id === selectedPlatformId
  );

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
