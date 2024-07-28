import React, { useState } from "react";
import { Form, Button, Dropdown, Container } from "react-bootstrap";
interface TagsProps {
  options: string[];
}
const TagSearch: React.FC<TagsProps> = ({ options }) => {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false); // State to control dropdown visibility
  const filteredOptions = options.filter((option) => option.toLowerCase().includes(inputValue.toLowerCase()) && !tags.includes(option));
  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
    if (event.target.value.trim()) {
      setShowDropdown(true); // Show dropdown when input is not empty
    } else {
      setShowDropdown(false); // Hide dropdown when input is cleared
    }
  };
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter" && inputValue && !tags.includes(inputValue)) {
      event.preventDefault();
      setTags([...tags, inputValue]);
      setInputValue("");
      setShowDropdown(false); // Optionally hide dropdown after adding a tag
    }
  };
  const addTag = (tag: string) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
      setInputValue("");
      setShowDropdown(false); // Hide dropdown after adding a tag
    }
  };
  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };
  return (
    <Container className="p-2">
      <Form.Label>Filter Keywords</Form.Label>
      <div className="d-flex flex-wrap gap-2 mb-2">
        {tags.map((tag, index) => (
          <Button key={tag} variant="secondary" size="sm" onClick={() => removeTag(index)}>
            {tag} <span aria-hidden="true">&times;</span>
          </Button>
        ))}
      </div>
      <Dropdown onToggle={() => setShowDropdown(!showDropdown)} show={showDropdown}>
        <Dropdown.Toggle as={Form.Control} value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} placeholder="Add a keyword" />
        <Dropdown.Menu show={showDropdown && (!!inputValue.trim() || filteredOptions.length > 0)}>
          {filteredOptions.map((option) => (
            <Dropdown.Item key={option} onClick={() => addTag(option)}>
              {option}
            </Dropdown.Item>
          ))}
          {inputValue && !filteredOptions.includes(inputValue) && <Dropdown.Item onClick={() => addTag(inputValue)}>Add "{inputValue}"</Dropdown.Item>}
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
};
export default TagSearch;
