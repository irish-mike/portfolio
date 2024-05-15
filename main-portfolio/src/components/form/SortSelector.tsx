import { Dropdown, DropdownButton } from "react-bootstrap";
import useGameQueryStore from "../../store";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const selectedSortOrder = useGameQueryStore(selector => selector.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore(selector => selector.setSortOrder);

  const currentSort = sortOrders.find((order) => order.value == selectedSortOrder);
  const title = "Order by " + (currentSort?.label || "Relevence");

  return (
    <DropdownButton id="dropdown-basic-button" title={title}>
      {sortOrders.map((sort) => (
        <Dropdown.Item
          key={sort.value}
          onClick={() => setSortOrder(sort.value)}
        >
          {sort.label}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default SortSelector;
