import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="max-w-md mx-auto mt-10 mg-white p-8 rounded shadow">
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Página de Login</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Digite seu email"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800"
                >
                    Entrar
                </button>
                <p className="mt-4 text-center text-sm">
                    Não tem uma conta? 
                    <Link to="/register" className="text-blue-700 hover:underline mx-1">
                        Registre-se
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default Login;