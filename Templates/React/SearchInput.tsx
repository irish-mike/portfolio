import { useRef } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../../store";


const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore(selector => selector.setSearchText);

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
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
