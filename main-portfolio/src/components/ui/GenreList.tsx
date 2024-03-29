import { Spinner } from "react-bootstrap";
import useGenres from "../../hooks/useGenres";

const GenreList = () => {
  const { data, isLoading } = useGenres();

  if (isLoading) return <Spinner animation="border" />;

  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
