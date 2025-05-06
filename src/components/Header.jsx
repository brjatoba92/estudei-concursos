import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="bg-blue-700 text-white shadow">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold tracking-wide">
                    Estudei Concursos
                </Link>
                <nav className="space-x-4">
                    <Link to="/" className="hover:underline">
                        Início
                    </Link>
                    <Link to="/estudo" className="hover:underline">
                        Estudo
                    </Link>
                    <Link to="/materias" className="hover:underline">
                        Materias
                    </Link>
                    <Link to="/revisoes" className="hover:underline">
                        Revisões
                    </Link>
                    <Link to="/settings" className="hover:underline">
                        Configurações
                    </Link>
                    <Link to="/simulados" className="hover:underline">
                        Simulados
                    </Link>
                    {/* <Link to="/login">Entrar</Link> */}
                    {/* <Link to="/dashboard">Painel</Link> */}
                </nav>
            </div>
        </header>
    )
}

export default Header