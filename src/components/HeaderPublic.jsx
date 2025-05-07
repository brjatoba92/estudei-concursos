import React from "react";
import { Link } from "react-router-dom";

function HeaderPublic() {
    return (
        <header className="bg-blue-700 shadow p-4 flex justify-between items-center text-white">
            <Link to='/'>
                <h1 className="text-2xl font-bold text-white">Estudei Concursos</h1>
            </Link>
            
            <nav className="flex space-x-4">
                <Link to="/" className= "hover:underline">Inicio</Link>
                <Link to="/" className= "hover:underline">Assinaturas</Link>
                <Link to="/" className= "hover:underline">Tutoriais</Link>
                <Link to="/" className= "hover:underline">Sobre</Link>
                <Link to="/" className= "hover:underline">Contato</Link>
                <Link to="/login" className= "hover:underline">Login</Link>
                <Link to="/register" className= "hover:underline">Register</Link>
            </nav>
        </header>
    );
}

export default HeaderPublic;