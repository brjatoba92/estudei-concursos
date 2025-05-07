import React from "react";
import Layout from "../components/Layout";
import { auth } from "../firebase/firebaseConfig";

function Perfil() {
  const user = auth.currentUser;

  return (
    <Layout>
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Perfil do Usuário</h2>
      {user ? (
        <div className="bg-white shadow p-6 rounded space-y-4 max-w-md">
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
