import React from "react";
import Login from "../Pages/Login";
import Cadastro from "../Pages/Cadastro";
import Home from "../Pages/Home";
import ProtectedRoutes from "./ProtectedRoutes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Routering() {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Login />} />
                <Route path="/cadastrar" element={<Cadastro />} />
                <Route path="/home" element={
                    <ProtectedRoutes>
                        <Home />
                    </ProtectedRoutes>
                } />
            </Routes>
        </Router>
    );
}

export default Routering;