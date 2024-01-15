import React, { useContext, useState } from "react";
import "./DetallesTrabajo.css";
import flecha from "../../assets/arrow-back-green.svg";
import { NavLink } from "react-router-dom";
import { AppContext } from "../Contexto/AppContext";
import { Loader } from "../Loader/Loader";
export const DetallesTrabajo = () => {
  const contexto = useContext(AppContext);
  const [loader, setLoader] = useState(false);
  const Aplicar = async () => {
    //en caso de que no este logueado, invitar a iniciar sesion

    if (contexto.usuario.Email == "") {
      document.getElementById("my_modal_2").showModal();
    } else {
      setLoader(true);
      //POSTULAR EL USUARIO AL EMPLEO
      const body = {
        Usuario_Id: contexto.usuario.Id,
        Trabajo_Id: contexto.trabajo.Id,
      };
      //fetch(`http://localhost:8090/api/oferta/agregar`, {
      fetch(
        `https://apuntateback-production.up.railway.app/api/oferta/agregar`,
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            token: contexto.token,
          },
          body: JSON.stringify(body),
        }
      )
        .then((response) => {
          if (response.status === 400) {
            console.log("error");
          }
          return response.json();
        })
        .then((data) => {
          if (data) {
            document.getElementById("my_modal_1").showModal();
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="bg-fondo min-h-screen">
      <NavLink
        to="/inicio"
        className="bg-gris-oscuro h-35 w-35 rounded-full inline-block m-2 shadow-lg"
      >
        <img src={flecha} alt="regreso" />
      </NavLink>
      <div className="contenedor-trabajo">
        <span className="franja-lateral"></span>
        <h3 className="text-2xl font-extrabold p-4 text-gray-600">
          {contexto.trabajo.Titulo}
        </h3>
        <p className="w-full break-words">{contexto.trabajo.Descripcion}</p>
        
        <div className="stats shadow bg-white w-1/3 m-4">
          <div className="stat">
            <div className="stat-title text-gray-700">Salario</div>
            <div className="stat-title text-gray-500">{contexto.trabajo.Salario}</div>
          </div>
        </div>

        <div className="stats shadow bg-white w-1/3 m-4">
          <div className="stat">
            <div className="stat-title text-gray-700">Ubicación</div>
            <div className="stat-title text-gray-500">{contexto.trabajo.Ciudad}</div>
          </div>
        </div>

        <ul className="contenedor-etiquetas flex flex-wrap justify-around items-center gap-2 ">
          <li>{contexto.trabajo.Tiempo}</li>
          <li>{contexto.trabajo.Modalidad}</li>
          <li>{contexto.trabajo.Contrato}</li>
        </ul>
      </div>
      <button
        onClick={Aplicar}
        className="block h-14 w-2/4 bg-gris-oscuro text-gray-50 p-2 m-auto mt-10 md:w-1/4"
      >
        {loader ? <Loader /> : "APLICAR"}
      </button>

      {/* MODAL PARA INVITAR A INICIAR SESION */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg text-gray-600">Inicie sesión</h3>
          <p className="text-gray-500">
            Para poder postularse es necesario iniciar sesión
          </p>
          <div className="modal-action">
            <form method="dialog" className="w-full">
              <div className="w-full flex justify-around">
                <button
                  onClick={() => {
                    setLoader(false);
                  }}
                  className="p-2 rounded-lg text-gray-600 bg-white border-2  w-1/4"
                  type="submit"
                >
                  ACEPTAR
                </button>
                <NavLink
                  to={"/login"}
                  onClick={() => {
                    setLoader(false);
                  }}
                  className="bg-primario p-2 rounded-lg text-center text-gray-50 border-2   w-2/4"
                  type="submit"
                >
                  Iniciar sesión
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </dialog>

      {/* MODAL POATULACION EXITOSA */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg text-gray-600">
            Postulación éxitosa
          </h3>
          <p className="text-gray-500">
            Felicidades por dar este gran paso, ¡éxito!
          </p>
          <div className="modal-action">
            <form method="dialog" className="w-full">
              <div className="w-full flex justify-around">
                <button
                  onClick={() => {
                    setLoader(false);
                  }}
                  className="bg-blue-500 p-2 rounded-lg text-gray-50  btn w-3/4"
                  type="submit"
                >
                  ACEPTAR
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
