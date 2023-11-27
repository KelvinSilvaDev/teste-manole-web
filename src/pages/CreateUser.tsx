import { CreateUserForm } from "../components/CreateUserForm";

export default function CreateUserPage(){
    return(
        <main>
            <h1>Adicionar Usuário</h1>

            <div className="shadow-lg max-w-lg mx-auto ">
                <CreateUserForm />
            </div>
        </main>
    )
}