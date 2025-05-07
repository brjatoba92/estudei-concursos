import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";

function Sidebar() {
    const handleLogout = () => {
        auth.signOut();
    };

    return (
        <aside className="w-64 bg-blue-700 text-white flex flex-col p-6">
            <nav className="flex flex-col gap-4 text-base font-medium">
                <Link to="/dashboard" className="hover:underline">Início</Link>
                <Link to="/estudo" className="hover:underline">Estudo</Link>
                <Link to="/materias" className="hover:underline">Matérias</Link>
                <Link to="/revisoes" className="hover:underline">Revisões</Link>
                <Link to="/settings" className="hover:underline">Configurações</Link>
                <Link to="/simulados" className="hover:underline">Simulados</Link>
            </nav>

            <button
                onClick={handleLogout}
                aria-label="Sair da conta"
                className="mt-auto bg-red-500 py-2 rounded hover:bg-red-600 transition-colors duration-200"
            >
                Sair
            </button>
        </aside>
    );
}

export default Sidebar;
