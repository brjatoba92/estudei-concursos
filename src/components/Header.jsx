import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { Bars3Icon } from "@heroicons/react/24/solid";

function Header({ user, setSidebarOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const getInitial = (name) => (name ? name.charAt(0).toUpperCase() : "U");

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  return (
    <header className="bg-blue-700 text-white py-4 px-6 flex justify-between items-center shadow relative">
      <div className="flex items-center gap-x-2">
        <Bars3Icon
          className="w-8 h-8 text-white cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        />
        <h1 className="text-xl font-bold">
          <Link to="/dashboard">Estudei Concursos</Link>
        </h1>
      </div>

      {user && (
        <div className="flex items-center space-x-4 relative">
          <div className="text-right text-sm">
            <p>Olá, {user.displayName || "Usuário"}</p>
            <p className="text-gray-200">{user.email}</p>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-white text-blue-700 font-bold flex items-center justify-center border-2 border-white hover:scale-105 transition-transform">
              {getInitial(user.displayName)}
            </div>
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-16 bg-white text-black rounded shadow-md w-48 z-10">
              <Link to="/perfil" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
                Perfil
              </Link>
              <Link to="/change-name-pwd" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
                Editar perfil
              </Link>
              <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
                Configurações
              </Link>
              <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-gray-100">
                Sair
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
