import { Dispatch } from "react";
import { Usuario } from "../Modelos/Usuario"
import { Trabajo } from  '../Modelos/Trabajo'

export type AppContextState = {
    usuario: Usuario;
    setUsuario: Dispatch<React.SetStateAction<Usuario>>;
    token: string;
    setToken: Dispatch<React.SetStateAction<string>>;
    trabajo: Trabajo,
    setTrabajo: Dispatch<React.SetStateAction<Trabajo>>;
}