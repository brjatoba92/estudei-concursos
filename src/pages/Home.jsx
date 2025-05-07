// src/pages/Home.jsx
import React from "react";
import HeaderPublic from "../components/HeaderPublic";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderPublic />
      <main className="flex-1 container mx-auto p-6">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Bem-vindo ao Estudei Concursos</h2>
        <p className="text-gray-700">Organize seus estudos, acompanhe seu progresso e prepare-se com eficiência.</p>
      </main>
    </div>
  );
}

export default Home;
