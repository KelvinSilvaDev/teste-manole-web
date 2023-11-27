import { ChangeEvent, FormEvent, useState } from "react";

export function CreateUserForm(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    
    })

    const handleUserInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        
    }

    const labelClass = "text-sm font-semibold mt-4 w-full flex align-center justify-center gap-4 items-center";

    const inputClass = "border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent";



    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center mx-auto py-4 rounded-lg   ">
            <label htmlFor="Name" className={labelClass}>
                Nome:
                <input type="text" name="name" id="name" onChange={handleUserInput} className={inputClass}/>
            </label>
            <label htmlFor="Email" className={labelClass}>
                Email:
                <input type="email" name="email" id="email" onChange={handleUserInput} className={inputClass}/>
            </label>
            <button type="submit" className="bg-blue-400 w-full max-w-xs rounded-sm py-1 mt-4">Criar</button>
        </form>
    )
}