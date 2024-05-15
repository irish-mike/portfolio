import { Button, Spinner } from "react-bootstrap";
import useGenres, { Genre } from "../../hooks/useGenres";
import useGameQueryStore from "../../store";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const setGenreId = useGameQueryStore((state) => state.setGenreId);

  if (isLoading) return <Spinner animation="border" />;

  return (
    <ul>
      {data?.results.map((genre: Genre) => (
        <Button
          onClick={() => setGenreId(genre.id)}
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
