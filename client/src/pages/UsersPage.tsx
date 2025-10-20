import { useEffect, useState } from "react";
import type { UserSchema } from "../types/userSchema";
import api from "../services/api";

const UsersPage = () => {
  const [users, setUsers] = useState<UserSchema[]>();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/api/users");
        setUsers(response.data);
      } catch (error: any) {
        console.log(error.message);
        setUsers(undefined);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {users?.map((item) => (
        <h1 key={item.id}>{item.name}</h1>
      ))}
    </div>
  );
};

export default UsersPage;
