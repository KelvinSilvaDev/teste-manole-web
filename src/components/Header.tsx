export function Header(){
    return (
        <header className="w-full p-4">
            <nav className="flex justify-end pr-4">
                <ul className="max-w-1/2 flex gap-4">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/create-user">Create User</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}