import React from "react";
import { Link } from "react-router-dom";

function Header({ user }) {
  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : "U";
  }
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
          <Link to="/dashboard">
            <div className="w-10 h-10 rounded-full bg-white text-blue-700 font-bold flex items-center justify-center border-2 border-white hover:scale-105 transition-transform">
              {getInitial(user.displayName)}
            </div>
          </Link>
          
        </div>
      )}
    </header>
  );
}

export default Header;