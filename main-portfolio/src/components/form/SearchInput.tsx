import { useRef } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          <BsSearch />
        </InputGroup.Text>
        <Form.Control
          ref={ref}
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </Form>
  );
};

export default SearchInput;
