import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Estudo from "../pages/Estudo";
import Materias from "../pages/Materias";
import Revisoes from "../pages/Revisoes";
import Settings from "../pages/Settings";
import Simulados from "../pages/Simulados";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Perfil from "../pages/Perfil";
import Questoes from "../pages/Questoes";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/estudo" element={<Estudo />} />
            <Route path="/materias" element={<Materias />} />
            <Route path="/revisoes" element={<Revisoes />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/simulados" element={<Simulados />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
                path="/dashboard"
                element={
                    <PrivateRoute>
                        <Dashboard/>
                    </PrivateRoute>
                } 
            />
            <Route
                path="/perfil"
                element={
                    <PrivateRoute>
                        <Perfil/>
                    </PrivateRoute>
                }
            />
            <Route
                path="/questoes"
                element={
                    <PrivateRoute>
                        <Questoes/>
                    </PrivateRoute>
                }
            />
        </Routes>
    );
}

export default AppRoutes;