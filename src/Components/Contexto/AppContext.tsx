import React, { useState, createContext, useMemo } from "react";
import { AppContextState } from "./EstadoContexto";
import { Usuario } from "../Modelos/Usuario";
import { Trabajo } from "../Modelos/Trabajo";
type Props = {
  children: React.ReactNode;
};
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
    Empresa_Id: null,
    Ciudad: ""
  });
  const [trabajo, setTrabajo] = useState<Trabajo>({} as Trabajo);
  const [token, setToken] = useState<string>("");
  const memoizedValue = useMemo(
    () => ({
      usuario: usuario,
      setUsuario: setUsuario,
      token: token,
      setToken: setToken,
      trabajo: trabajo,
      setTrabajo: setTrabajo,
    }),
    [usuario, setUsuario, token, setToken, trabajo, setTrabajo]
  );
  return (
    <AppContext.Provider value={memoizedValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
