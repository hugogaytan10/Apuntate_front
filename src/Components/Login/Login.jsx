import React, { useContext, useState } from "react";
import user from "../../assets/user.svg";
import "./Login.css";
import { AppContext } from "../Contexto/AppContext";
import { useNavigate } from "react-router-dom";
import { Loader } from "../Loader/Loader";

export const Login = () => {
  const contexto = useContext(AppContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [recordar, setRecordar] = useState(false);

  const ManejoLogin = () => {
    const usuario = {
      Email: document.getElementById("correo").value,
      Contrasenia: document.getElementById("pass").value,
    };
    setLoading(true);
    //fetch("http://localhost:8090/api/login", {
    fetch("https://apuntateback-production.up.railway.app/api/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    })
      .then((response) => {
        if (response.status === 400) {
            document.getElementById("my_modal_1").showModal();
            setLoading(false);
        }
        return response.json();
      })
      .then((data) => {
        if (data.usuario) {
          contexto.setUsuario(data.usuario);
          contexto.setToken(data.Token);
          if(recordar){
            localStorage.setItem("correoApuntate", JSON.stringify(document.getElementById("correo").value));
            localStorage.setItem("contraseniaApuntate", JSON.stringify(document.getElementById("pass").value));
          }
          navigate("/inicio");
          setLoading(false);
        }
      })
      .catch((err) => {setLoading(false); });
  };
  const Registro = () => {
    navigate("/TipoRegistro");
  };
  return (
    <div className="bg-primario relative min-h-screen min-w-full">
      <div className="w-32 h-32 bg-white rounded-full relative m-auto top-10">
        <img
          src={user}
          alt="user"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="contenedor-login bg-white relative top-20  border-primary shadow-lg ">
        <h2 className="font-extrabold text-center text-4xl relative top-4 text-gray-600">
          LOGIN
        </h2>

        <div className="w-3/4 m-auto relative top-20 text-gray-600">
          <div className="form-group">
            <input
              type="text"
              className="bg-white"
              placeholder=" "
              id="correo"
            />
            <label>Correo</label>
          </div>
          <div className="form-group top-4">
            <input
              type="password"
              className="bg-white"
              placeholder=" "
              id="pass"
            />
            <label>Contraseña</label>
          </div>

          <div className=" w-52">
            <label className="cursor-pointer flex items-center gap-4 mt-10 ">
              <input
                type="checkbox"
                className="toggle toggle-accent text-primario"
                onClick={() => {
                  setRecordar(!recordar);
                }}
              />
              <span className="label-text text-gray-600">Recordar</span>
            </label>
          </div>

          <button
            className="block m-auto h-10 w-full md:w-1/2 bg-primario relative top-10 p-2 rounded-md text-gray-50 font-semibold"
            onClick={ManejoLogin}
          >
            {loading ? <Loader/> :  'ENTRAR'}
          </button>
          <button
            className="block m-auto h-10 w-full md:w-1/2 bg-white border-primario border-2 relative top-14 p-2 rounded-md font-semibold text-primario"
            onClick={Registro}
          >
            REGISTRARSE
          </button>
        </div>
      </div>

   
   
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-white  ">
          <h3 className="font-bold text-lg text-gray-600">CUIDADO</h3>
          <p className="py-4 text-red-800">
           Credenciales incorrectas, intente nuevamente
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn border-red-500 bg-white text-red-500">Cerrar</button>
            </form>
          </div>
        </div>
      </dialog>

    </div>
  );
};
