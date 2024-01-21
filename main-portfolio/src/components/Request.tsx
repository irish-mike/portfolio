import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const Request = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Request;
