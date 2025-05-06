import React from "react";
import { Link } from "react-router-dom";

function Register() {
    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded shadow">
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Cadastro</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                        Nome
                    </label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Seu nome completo"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Digite seu email"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                        Senha
                    </label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="*********"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800"
                >
                    Criar conta
                </button>
                <p className="mt-4 text-center text-sm">
                    Já tem conta?{" "}
                    <Link to="/login" className="text-blue-700 hover:underline">
                        Entrar
                    </Link>
                </p>
                
            </form>
        </div>
    );
}
export default Register;