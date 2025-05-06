import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [erro, setErro] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const navigate = useNavigate();

    const senhaForteRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    const handleRegister = async (e) => {
        e.preventDefault();

        if (!senhaForteRegex.test(password)) {
            setErro("A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial.");
            return;
        }

        if (password !== confirmarSenha) {
            setErro("As senhas não coincidem.");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/dashboard");
        } catch (error) {
            setErro("Email ou senha invalidos");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded shadow">
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Cadastro</h2>
            <form onSubmit={handleRegister}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                        Nome
                    </label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Seu nome completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                        Senha
                    </label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Crie uma senha forte"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                        Senha
                    </label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Repita a senha"
                        value={confirmarSenha}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {erro && <p className="text-red-500 text-center">{erro}</p>}
                <button
                    type="submit"
                    className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 mt-2"
                >
                    Criar conta
                </button>
                <p className="mt-4 text-center text-sm">
                    Já tem conta?{" "}
                    <Link to="/login" className="text-green-700 hover:underline mx-1">
                        Entrar
                    </Link>
                </p>
                
            </form>
        </div>
    );
}
export default Register;