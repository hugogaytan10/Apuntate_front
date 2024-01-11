import React, { useState, createContext } from "react";
import { AppContextState } from "./EstadoContexto";
import { Usuario } from "../Modelos/Usuario";
import { Trabajo } from "../Modelos/Trabajo";
type Props = {
    children: React.ReactNode
}
export const AppContext = createContext({} as AppContextState);

const AppProvider: React.FC<Props> = ({ children }) => {
    const [usuario, setUsuario] = useState<Usuario>({
        Id: "",
        Contrasenia: "",
        Email: "",
        tipo: "",
        Nombre: "",
        Calle: "",
        CodigoPostal: "",
        colonia: "",
        Edad: 0,
        estado: "",
        EstadoCivil: "",
        FechaNac: "",
        Telefono: "",
        Apellido: "",
        Direccion: "",  
    });
    const [trabajo, setTrabajo] = useState<Trabajo>({} as Trabajo)
    const [token, setToken] = useState<string>("");
    return (
        <AppContext.Provider
            value={{
                usuario: usuario,
                setUsuario: setUsuario,
                token: token,
                setToken: setToken,
                trabajo: trabajo,
                setTrabajo: setTrabajo,
            }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;