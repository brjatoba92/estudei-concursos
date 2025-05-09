import React, { useState } from "react";
import Layout from "../components/Layout";
import { auth } from "../firebase/firebaseConfig";
import {
  updateProfile,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function ChangeNamePassword() {
  const user = auth.currentUser;
  const [novoNome, setNovoNome] = useState(user?.displayName || "");
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const navigate = useNavigate();

  const handleAtualizar = async (e) => {
    e.preventDefault();
    setMensagem("");

    try {
      // Atualiza nome se mudou
      if (novoNome !== user.displayName) {
        await updateProfile(user, { displayName: novoNome });
      }

      // Atualiza senha se fornecida
      if (novaSenha.length > 0) {
        if (novaSenha.length < 6) {
          setMensagem("A nova senha deve conter pelo menos 6 caracteres.");
          return;
        }

        if (!senhaAtual) {
          setMensagem("Informe sua senha atual para alterar a nova.");
          return;
        }

        // Reautentica o usuário
        const credential = EmailAuthProvider.credential(user.email, senhaAtual);
        await reauthenticateWithCredential(user, credential);

        await updatePassword(user, novaSenha);
      }

      setMensagem("Dados atualizados com sucesso!");

      setTimeout(async () => {
        await auth.signOut();
        navigate("/");
      }, 2000);
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        setMensagem("Senha atual incorreta.");
      } else if (error.code === "auth/requires-recent-login") {
        setMensagem("Reautentique-se para alterar a senha.");
      } else {
        setMensagem("Erro ao atualizar: " + error.message);
      }
    }
  };

  return (
    <Layout>
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Editar Perfil</h2>
      <form onSubmit={handleAtualizar}>
        <div className="mb-4">
          <label className="block font-medium mb-1">Novo Nome</label>
          <input
            type="text"
            value={novoNome}
            onChange={(e) => setNovoNome(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Senha Atual</label>
          <div className="relative">
            <input
              type={showOldPassword ? "text" : "password"}
              value={senhaAtual}
              onChange={(e) => setSenhaAtual(e.target.value)}
              placeholder="Digite sua senha atual"
              className="w-full border px-3 py-2 rounded pr-10"
            />
            <button
              type="button"
              onClick={() => setShowOldPassword(!showOldPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showOldPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Nova Senha</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={novaSenha}
              onChange={(e) => setNovaSenha(e.target.value)}
              placeholder="Nova senha (mínimo 6 caracteres)"
              className="w-full border px-3 py-2 rounded pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-700 text-white px-4 py-2 rounded mt-4"
        >
          Atualizar
        </button>

        {mensagem && <p className="text-red-600 mt-3">{mensagem}</p>}
      </form>
    </Layout>
  );
}

export default ChangeNamePassword;
