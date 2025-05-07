import React from "react";
import Sidebar from "./Sidebar";

function Layout({ children, user }) {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 bg-gray-100 p-6">
                <header className="bg-blue-700 text-white p-4 rounded mb-4 flex justify-end">
                    {user ? (
                        <div className="text-right">
                            <p>Olá, {user.displayName || "Usuário"}</p>
                            <p className="text-sm">{user.email}</p>
                        </div>
                    ) : (
                        <p>Carregando usuário...</p>
                    )}
                </header>
                
                {children}
            </main>
        </div>
    );
}

export default Layout;
