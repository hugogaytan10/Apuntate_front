import React, { useState, createContext } from "react";
import { AppContextState } from "./EstadoContexto";
import { Usuario } from "../Modelos/Usuario";
type Props = {
    children: React.ReactNode
}
export const AppContext = createContext({} as AppContextState);

const AppProvider: React.FC<Props> = ({ children }) => {
    const [usuario, setUsuario] = useState<Usuario>({
        id: "",
        contrasenia: "",
        correo: "e",
        tipo: "",
        nombre: "",
        calle: "",
        codigoPostal: "",
        colonia: "",
        edad: 0,
        estado: "",
        estadoCivil: "",
        fecha: "",
        telefono: "",
    })
    return (
        <AppContext.Provider
            value={{
                usuario: usuario,
                setUsuario: setUsuario
            }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;