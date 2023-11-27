import { useParams } from "react-router-dom";
import api from "../services/api";
import { User } from "../types/User";
import { useEffect, useState } from "react";

export default function UserPage() {
    
    const [user, setUser] = useState<User>({} as User);
    
    const { id } = useParams<{ id: string }>();


    const getUser = async () => {
        const response = await api.get(`/users/${id}`);

        setUser(response.data);
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <main>
            <h1 className="text-center text-2xl font-bold mt-4">{user.name}</h1>
            <h2 className="text-center text-xlg font-semibold mt-4">{user.email}</h2>
        </main>
    )
}