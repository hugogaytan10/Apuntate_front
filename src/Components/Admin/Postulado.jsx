import React, { useContext, useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import flecha from "../../assets/arrow-back-green.svg";
import { AppContext } from "../Contexto/AppContext";
export const Postulado = () => {
  const contexto = useContext(AppContext);
  const { id } = useParams();
  const [postulado, setPostulado] = useState({});
  const CopyToClip = (correo) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(correo);
    }
  };
  useEffect(() => {
    //traemos la informacion del usuario por medio del ID
    
    //fetch(`http://localhost:8090/api/usuario/informacion/`, {
    fetch(`https://apuntateback-production.up.railway.app/api/usuario/informacion/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        token: contexto.token,
      },
      body: JSON.stringify({ id: id }),
    })
      .then((res) => res.json())
      .then((res) => {
        setPostulado(res);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="block min-h-screen w-full bg-fondo p-2">
      <NavLink
        to={`/postuladosAdmin/${contexto.trabajo.Id}`}
        className="bg-gris-oscuro h-35 w-35 rounded-full inline-block m-2 shadow-lg"
      >
        <img src={flecha} alt="regreso" />
      </NavLink>
      <div className="flex w-full md:w-1/2 mt-10 m-auto rounded-md h-10 ">
        <div className="w-1/4 bg-gris-oscuro text-gray-50 rounded-l-md text-center">
          Nombre
        </div>
        <div className="w-3/4 bg-primario text-gray-50 rounded-r-md pl-2">
          {postulado.Nombre}
        </div>
      </div>

      <div className="flex w-full md:w-1/2 mt-2 m-auto rounded-md h-10 ">
        <div className="w-1/4 bg-gris-oscuro text-gray-50 rounded-l-md text-center">
          Teléfono
        </div>
        <div className="w-2/4 bg-primario text-gray-50  pl-2">
          {postulado.Telefono}
        </div>
        <a
          className="w-1/4 bg-gris-oscuro text-gray-50 rounded-r-md text-center"
          href={`tel:+52${postulado.Telefono}}`}
        >
          Llamar
        </a>
      </div>

      <div className="flex w-full md:w-1/2 mt-2 m-auto rounded-md h-10 ">
        <div className="w-1/4 bg-gris-oscuro text-gray-50 rounded-l-md text-center">
          Correo
        </div>
        <div className="w-2/4 bg-primario text-gray-50  pl-2">
          {postulado.Email}
        </div>
        <div
          className="w-1/4 bg-gris-oscuro text-gray-50 rounded-r-md text-center"
          onClick={() => {
            CopyToClip("Hola@gmail.com");
          }}
        >
          COPIAR
        </div>
      </div>

      <div className="flex w-full md:w-1/2 mt-2 m-auto rounded-md h-10 ">
        <div className="w-1/4 bg-gris-oscuro text-gray-50 rounded-l-md text-center">
          Dirección
        </div>
        <div className="w-3/4 bg-primario text-gray-50 rounded-r-md pl-2">
          {postulado.Direccion}
        </div>
      </div>

      <button className="btn bg-red-500 text-gray-50 m-auto block mt-10 rounded-sm border-red-500">
        DESCARTAR
      </button>
    </div>
  );
};
