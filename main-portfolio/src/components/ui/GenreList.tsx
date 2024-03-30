import { Button, Spinner } from "react-bootstrap";
import useGenres, { Genre } from "../../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading } = useGenres();

  if (isLoading) return <Spinner animation="border" />;

  return (
    <ul>
      {data.map((genre) => (
        <Button
          onClick={() => {
            onSelectGenre(genre);
          }}
          className="m-1"
          key={genre.id}
        >
          {genre.name}
        </Button>
      ))}
    </ul>
  );
};

export default GenreList;
