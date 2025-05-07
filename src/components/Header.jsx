import React from "react";

function Header({ user }) {
    return (
        <header className="bg-blue-700 text-white py-4 px-6 flex justify-between shadow">
            <h1 className="text-xl font-bold">Estudei Concursos</h1>
            { user && (
                <div className="text-right text-sm">
                    <p>Ola, {user.displayName || "Usuario"}</p>
                    <p className="text-grau-200">{user.email}</p>
                </div>
            )}
        </header>
    )
}

export default Header