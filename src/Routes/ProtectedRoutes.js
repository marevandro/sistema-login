import React from "react";
import UserService from "../Service/UserService";
import Routering from "./routes";

const userService = new UserService();

const ProtectedRoutes = ({children}) => {
    const usuarioAutenticado = userService.usuarioAutenticado()
    return usuarioAutenticado ? children : <Routering/>
}

export default ProtectedRoutes