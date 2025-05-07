import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";

function Layout({ children, user }) {
    const handleLogout = () => {
        auth.signOut();
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* Topbar */}
            <header className="bg-green-700 text-white p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">Estudei Concursos</h1>
                {user && (
                    <div className="text-right">
                        <p>Olá, {user.displayName || "Usuário"}</p>
                        <p className="text-sm">{user.email}</p>
                    </div>
                )}
            </header>

            {/* Navbar horizontal */}
            <nav className="bg-green-600 text-white flex justify-center space-x-6 py-3">
                <Link to="/dashboard" className="hover:underline">Início</Link>
                <Link to="/estudo" className="hover:underline">Estudo</Link>
                <Link to="/materias" className="hover:underline">Matérias</Link>
                <Link to="/revisoes" className="hover:underline">Revisões</Link>
                <Link to="/settings" className="hover:underline">Configurações</Link>
                <Link to="/simulados" className="hover:underline">Simulados</Link>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
                >
                    Sair
                </button>
            </nav>

            {/* Conteúdo principal */}
            <main className="flex-1 bg-gray-100 p-6">
                {children}
            </main>
        </div>
    );
}

export default Layout;
