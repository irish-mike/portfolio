import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import { CanceledError } from "../services/api-client";

const useUsers = () =>{
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
  
      const { request, cancel } = userService.getAll<User>();
  
      request
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
  
      return () => cancel();
    }, []);

    return {users, error, isLoading}
};

export default useUsers;