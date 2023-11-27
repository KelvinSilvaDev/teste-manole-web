import { UsersList } from "../components/UsersList";

export default function HomePage(){
    return (
        <main className="py-4 px-4">
            <h1 className="text-center font-semibold text-3xl">Lista de Usuários</h1>

            <div>
                <UsersList />
            </div>
        </main>
    )
}