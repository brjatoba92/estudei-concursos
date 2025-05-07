import React from "react";
import Layout from "../components/Layout";
import { auth } from "../firebase/firebaseConfig";

function Dashboard() {
    const user = auth.currentUser;

    return (
        <Layout user={user}>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Bem-vindo</h2>
            <p className="text-gray-700">
                Escolha uma seção no menu para começar seus estudos.
            </p>
        </Layout>
    );
}

export default Dashboard;
