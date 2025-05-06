import React from "react";
import {useNavigate} from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

function Dashboard() {
    const navigate = useNavigate();
    const handleLogout = async() => {
        await signOut(auth);
        navigate("/login");
        
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <h1 className="text-3xl font-bold text-blue-700 mb-6">Bem vindo a Plataforma</h1>
            <p className=" text-gray-700 mb-4">Você esta logado com sucesso</p>
            <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={handleLogout}
            >
                Sair
            </button>
        </div>
    );
}

export default Dashboard;