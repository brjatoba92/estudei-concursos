import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import HeaderPublic from "../components/HeaderPublic";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setErro("");

    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate("/dashboard");
    } catch (err) {
      setErro("Email ou senha inválidos.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderPublic />

      <main className="flex-1 flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded shadow">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Página de Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Senha</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            {erro && <p className="text-red-600 text-sm mb-4">{erro}</p>}
            <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800">
              Entrar
            </button>
          </form>
          <p className="mt-4 text-center text-sm">
            Não tem uma conta?
            <Link to="/register" className="text-blue-700 hover:underline mx-1">
              Registre-se
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Login;
