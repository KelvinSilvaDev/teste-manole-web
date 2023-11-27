import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { User } from "../types/User";
import api from "../services/api";


export function UsersList() {
    const [users, setUsers] = useState<User[]>([]);

    const navigate = useNavigate();


    const getUsers = async () => {
        const response = await api.get('/users');

        setUsers(response.data);
    }

    useEffect(() => {
        getUsers();
    }, []);

    const userRedirect = (id: number) => {
        navigate(`/users/${id}`);
    }

    return (
        <div className="mt-4">
            <table className="w-full">
                <thead>
                    <th>Nome</th>
                    <th>Email</th>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id} className={`${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          } hover:cursor-pointer hover:bg-gray-100 `}
                          onClick={()=> userRedirect(user.id)}
                          >
                            <td className="text-center">{user.name}</td>
                            <td className="text-center">{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}