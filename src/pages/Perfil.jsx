import React, { useRef, useState } from "react";
import Layout from "../components/Layout";
import { auth } from "../firebase/firebaseConfig";
import { updateProfile } from "firebase/auth";

function Perfil() {
  const user = auth.currentUser;
  const fileInputRef = useRef(null);
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [uploading, setUploading] = useState(false);

  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      setUploading(true);
      try {
        // Atualiza o perfil no Firebase
        await updateProfile(user, {
          photoURL: reader.result,
        });

        // Recarrega os dados do usuário
        await auth.currentUser.reload();

        // Atualiza localmente e recarrega a página
        setPhotoURL(reader.result);
        alert("Foto de perfil atualizada com sucesso!");
        window.location.reload(); // Garante que o Header pegue a nova foto
      } catch (error) {
        console.error("Erro ao atualizar a foto de perfil:", error);
      }
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <Layout>
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Perfil do Usuário</h2>
      {user ? (
        <div className="bg-white shadow p-6 rounded space-y-4 max-w-md">
          <div className="flex items-center space-x-4">
            <img
              src={photoURL || "https://i.pravatar.cc/150?img=3"}
              alt="Avatar"
              className="w-20 h-20 rounded-full object-cover"
            />
            <button
              onClick={triggerFileInput}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              disabled={uploading}
            >
              {uploading ? "Atualizando..." : "Alterar Foto"}
            </button>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              className="hidden"
              onChange={handlePhotoChange}
            />
          </div>
          <div>
            <strong>Nome:</strong> {user.displayName || "Nome não definido"}
          </div>
          <div>
            <strong>Email:</strong> {user.email}
          </div>
        </div>
      ) : (
        <p className="text-gray-600">Nenhum usuário logado.</p>
      )}
    </Layout>
  );
}

export default Perfil;
