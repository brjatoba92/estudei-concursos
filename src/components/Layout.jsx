import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

function Layout({ children }) {
    const navigate = useNavigate();
    const handleLogout = async () => {
        await signOut(auth);
        navigate("/login");
    };

    return (
        <div className="flex-h-screen">
            <aside className="w-64 bg-blue-700 text-white flex flex-col p-6 space-y-4">
                <h1 className="text-2xl font-bold mb-6">Estudei</h1>
                <nav className="flex flex-col gap-4">
                    <Link to="/dashboard">Inicio</Link>
                    <Link to="/estudo">Estudo</Link>
                    <Link to="/materias">Materias</Link>
                    <Link to="/revisoes">Revisões</Link>
                    <Link to="/settings">Configurações</Link>
                    <Link to="/simulados">Simulados</Link>
                </nav>
                <button
                    onClick={handleLogout}
                    className="mt-auto bg-red-500 py-2 rounded hover:bg-red-600"
                >
                    Sair
                </button>
            </aside>
            <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
                {children}
            </main>

        </div>
    );
}

export default Layout;