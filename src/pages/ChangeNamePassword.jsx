import React, {useState} from "react";
import Layout from "../components/Layout";
import { auth } from "../firebase/firebaseConfig";
import { updateProfile, updatePassword } from "firebase/auth";

function ChangeNamePassword() {
    const user = auth.currentUser;
    const [nome, setNome] = useState(user?.displayName || "");
    const [novaSenha, setNovaSenha] = useState("");
    const [mensagem, setMensagem] = useState("");

    const handleAtualizar = async (e) => {
        e.preventDefault();
        
        try {
            // atualiza o nome
            if (nome && nome !== user.displayName) {
                await updateProfile(user, { displayName: nome });
            }
            // atualiza senha
            if (novaSenha.lenght >= 6){
                await updatePassword(user, novaSenha);
            } else if (novaSenha.lenght > 0 && novaSenha.lenght < 6) {
                setMensagem("A senha deve conter pelo menos 6 caracteres");
            }
            setMensagem("Dados atualizados com sucesso!");
        } catch (error) {
            if (error.code === "auth/requires-recent-login") {
                setMensagem("A senha deve conter pelo menos 6 caracteres");
            }else {
                setMensagem("Erro ao atualizar os dados." + error.message)
            };
        }
    };
    
    return (
        <Layout>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Editar perfil</h2>
            <form onSubmit={handleAtualizar}>
                <div>
                    <label className="block font-medium mb-1">Nome</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium mb-1">Nova Senha</label>
                    <input
                        type="password"
                        value={novaSenha}
                        onChange={(e) => setNovaSenha(e.target.value)}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-700 text-white px-4 py-2 rounded mt-4"
                >
                    Atualizar
                </button>
                {mensagem && <p className="text-red-500 mt-2">{mensagem}</p>}
            </form>
        </Layout>
    );
}

export default ChangeNamePassword;