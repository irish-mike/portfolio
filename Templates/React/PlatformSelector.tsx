import { Dropdown, DropdownButton } from "react-bootstrap";
import usePlatforms from "../../hooks/usePlatforms";
import useGameQueryStore from "../../store";


const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  const setPlatformId = useGameQueryStore(selector => selector.setPlatformId);

  const selectedPlatformId = useGameQueryStore(selector => selector.gameQuery.platformId);

  const selectedPlatform = data?.results.find(
    (p) => p.id === selectedPlatformId
  );

  if (error) return null;

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={selectedPlatform?.name || "Select Platform"}
    >
      {data?.results.map((platform) => (
        <Dropdown.Item
          onClick={() => setPlatformId(platform.id)}
          key={platform.id}
        >
          {platform.name}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default PlatformSelector;
