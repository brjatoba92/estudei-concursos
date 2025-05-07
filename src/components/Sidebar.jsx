import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut(); // logout do Firebase
      navigate("/");         // redireciona para a Home
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  };
  

  return (
    <aside className="w-64 bg-blue-700 text-white flex flex-col p-6 space-y-4">
      <nav className="flex flex-col gap-4">
        <Link to="/dashboard">Início</Link>
        <Link to="/estudo">Estudo</Link>
        <Link to="/materias">Matérias</Link>
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
  );
}

export default Sidebar;
