import React from "react";
import Layout from "../components/Layout";

function Dashboard() {
    return (
        <Layout>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Bem-vindo</h2>
            <p className="text-gray-700">Escolha uma seção no menu para começar seus estudos.</p>
        </Layout>
    );
}

export default Dashboard;