import React from "react";
import { Link } from "react-router-dom";

function Header({ user }) {
  return (
    <header className="bg-blue-700 text-white py-4 px-6 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">
        <Link to="/">Estudei Concursos</Link>
      </h1>

      {user && (
        <div className="flex items-center space-x-4">
          <div className="text-right text-sm">
            <p>Olá, {user.displayName || "Usuário"}</p>
            <p className="text-gray-200">{user.email}</p>
          </div>
          <div>
            <Link to="/perfil">
                <img
                    src={user.photoURL || "https://via.placeholder.com/40"}
                    alt="Avatar"
                    className="w-10 h-10 rounded-full object-cover border-2 border-white hover:scale-105 transition-transform"
                />
            </Link>
          </div>
          
        </div>
      )}
    </header>
  );
}

export default Header;
