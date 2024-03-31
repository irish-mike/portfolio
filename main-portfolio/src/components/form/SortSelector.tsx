import { Dropdown, DropdownButton } from "react-bootstrap";

interface Props {
  onSelectSort: (order: string) => void;
  sortOrder: string | null;
}

const SortSelector = ({ onSelectSort, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSort = sortOrders.find((order) => order.value == sortOrder);
  const title = "Order by " + (currentSort?.label || "Relevence");

  return (
    <DropdownButton id="dropdown-basic-button" title={title}>
      {sortOrders.map((sort) => (
        <Dropdown.Item
          key={sort.value}
          onClick={() => onSelectSort(sort.value)}
        >
          {sort.label}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default SortSelector;
