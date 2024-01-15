import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import flecha from "../../assets/arrow-back-green.svg";
import { AppContext } from "../Contexto/AppContext";
export const Postulados = () => {
  const { id } = useParams();
  const contexto = useContext(AppContext);
  const [postulados, setPostulados] = useState([]);
  const [eliminar, setEliminar] = useState({ postuladoId: "", trabajoId: "" });
  const nagivate = useNavigate();
  const quitarOferta = (postuladoId, TrabajoId) => {
    //fetch(`http://localhost:8090/api/usuario/eliminar/`, {
    fetch(`https://apuntateback-production.up.railway.app/api/oferta/quitar`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        token: contexto.token,
      },
      body: JSON.stringify({ UsuarioId: postuladoId, TrabajoId: TrabajoId }),
    })
      .then((res) => res.json())
      .then((res) => {
        nagivate(`/inicioAdmin`);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    //mandar a llamar todos los postaludos de un trabajo

    //fetch("http://localhost:8090/api/oferta/conseguir", {
    fetch(
      "https://apuntateback-production.up.railway.app/api/oferta/conseguir",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          token: contexto.token,
        },
        body: JSON.stringify({
          id: id,
        }),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setPostulados(res);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {
      setPostulados([]);
    };
  }, []);
  return (
    <div className="block min-h-screen w-full bg-fondo">
      <NavLink
        to={"/inicioAdmin"}
        className="bg-white h-35 w-35 rounded-full inline-block m-2 shadow-lg"
      >
        <img src={flecha} alt="regreso" />
      </NavLink>
      <div className="flex flex-wrap w-full justify-center mt-4 gap-4">
        {postulados.length > 0 ? (
          postulados.map((postulado, idx) => {
            return (
              <div
                className="contenedor-empleo relative flex flex-wrap md:w-4/12"
                key={`postulado_${idx}`}
              >
                <span className="franja-lateral"></span>
                <p className="block w-full ml-4 font-bold text-lg text-gray-600">
                  {postulado.Nombre}
                </p>

                <div className="flex justify-around w-full">
                  <NavLink
                    className="bg-primario btn text-gray-50 m-auto w-5/12 p-1 rounded-sm text-base text-center"
                    to={`/postulado/${postulado.Usuario_Id}`}
                  >
                    Ver postulante
                  </NavLink>
                  <button
                    onClick={() => {
                      setEliminar({
                        postuladoId: postulado.Usuario_Id,
                        trabajoId: contexto.trabajo.Id,
                      });
                      document.getElementById("my_modal_3").showModal();
                    }}
                    className="bg-white btn border-red-500 text-red-500 m-auto  p-1 rounded-sm text-base text-center"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="w-full flex justify-center">
            <p className="text-2xl text-gray-600">No hay postulados aún</p>
          </div>
        )}
      </div>

      {/* MODAL DE ELIMINAR */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Eliminar postulado</h3>
          <p>¿Estás apunto de eliminar un postulado, estas seguro?</p>
          <div className="modal-action">
            <form method="dialog" className="w-full">
              <div className="w-full flex justify-around">
                <button
                  className="bg-red-500 p-2 rounded-lg text-gray-50 mb-10 btn"
                  type="submit"
                  onClick={() => {
                    quitarOferta(eliminar.postuladoId, eliminar.trabajoId);
                  }}
                >
                  ELIMINAR
                </button>
                <button
                  type="button"
                  onClick={() => {
                    document.getElementById("my_modal_3").close();
                  }}
                  className="btn bg-white text-gray-500 border-gray-500"
                >
                  CERRAR
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
