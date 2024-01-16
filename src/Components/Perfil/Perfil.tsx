import React, { useContext, useRef } from "react";
import { ErrorMessage, Formik } from "formik";
import {
  usuarioCompletoSchema,
  usuarioSchema,
} from "../EsquemasValidacion/Usuario";
import { AppContext } from "../Contexto/AppContext";
import { Usuario } from "../Modelos/Usuario";
import { clickBtn } from "../Login/confetti";
export const Perfil = () => {
  const contexto = useContext(AppContext);
  const refContrasenia = useRef<HTMLInputElement>(null);
  const ActualizarInformacion = (usuario: Usuario) => {
    //fetch("http://localhost:8090/api/usuario/actualizar", {
    fetch(
      "https://apuntateback-production.up.railway.app/api/usuario/actualizar",
      {
        method: "POST",
        body: JSON.stringify(usuario),
        headers: {
          "Content-Type": "application/json",
          token: contexto.token,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          clickBtn();
          contexto.setUsuario(usuario);
          if (window.localStorage.getItem("correoApuntate")) {
            localStorage.setItem(
              "correoApuntate",
              JSON.stringify(contexto.usuario.Email)
            );
            localStorage.setItem(
              "contraseniaApuntate",
              JSON.stringify(refContrasenia)
            );
          }else{
            window.localStorage.setItem(
              "correoApuntate",
              JSON.stringify(contexto.usuario.Email)
            );
            window.localStorage.setItem(
              "contraseniaApuntate",
              JSON.stringify(refContrasenia.current?.value ?? "")
            );
          }
        }
      })
      .catch((err) => {
        alert("Ocurrió un error al actualizar los datos");
      });
  };
  return (
    <div className="block min-h-screen w-full bg-fondo">
      <h3 className="text-center text-lg font-bold text-gray-600">
        Hola {contexto.usuario.Nombre}! esta es tu información
      </h3>

      <Formik
        initialValues={{
          nombre: contexto.usuario.Nombre || "",
          apellido: contexto.usuario.Apellido || "",
          telefono: contexto.usuario.Telefono || "",
          estadoCivil: contexto.usuario.EstadoCivil || "",
          fecha: contexto.usuario.FechaNac || "",
          direccion: contexto.usuario.Direccion || "",
          ciudad: contexto.usuario.Ciudad || "",
          contrasenia: "",
          confirmarContrasenia: "",
        }}
        validationSchema={usuarioCompletoSchema}
        onSubmit={(values) => {
          let usuario: Usuario = {
            Id: contexto.usuario.Id,
            Contrasenia: values.contrasenia,
            Email: contexto.usuario.Email,
            tipo: contexto.usuario.tipo,
            Nombre: values.nombre,
            Calle: contexto.usuario.Calle,
            CodigoPostal: contexto.usuario.CodigoPostal,
            colonia: contexto.usuario.colonia,
            Edad: contexto.usuario.Edad,
            estado: contexto.usuario.estado,
            EstadoCivil: values.estadoCivil,
            Ciudad: values.ciudad,
            FechaNac: values.fecha,
            Telefono: values.telefono,
            Apellido: values.apellido,
            Direccion: values.direccion,
            Empresa_Id: contexto.usuario.Empresa_Id,
          };
          ActualizarInformacion(usuario);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <div
            id="divPasoUno"
            className="w-11/12 m-auto mb-20 text-gray-600 bg-white mt-10 transition-all md:w-2/4"
          >
            <h3 className="font-bold text-xl ml-4 text-gray-600">
              Datos Personales
            </h3>
            <form
              className="w-10/12 m-auto mt-10"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}
            >
              <div className="form-group">
                <input
                  type="text"
                  placeholder=" "
                  className="bg-white"
                  name="nombre"
                  onChange={handleChange("nombre")}
                  onBlur={handleBlur("nombre")}
                  value={values.nombre}
                />
                <label>Nombre</label>
              </div>
              {errors.nombre && touched.nombre && (
                <ErrorMessage name="nombre" component="div" className="error" />
              )}
              <div className="form-group">
                <input
                  type="text"
                  placeholder=" "
                  className="bg-white"
                  name="apellido"
                  onChange={handleChange("apellido")}
                  onBlur={handleBlur("apellido")}
                  value={values.apellido}
                />
                <label>Apellido</label>
              </div>
              {errors.apellido && touched.apellido && (
                <ErrorMessage
                  name="apellido"
                  component="div"
                  className="error"
                />
              )}

              <div className="form-group">
                <input
                  type="date"
                  className="calendario"
                  placeholder=" "
                  id="fecha"
                  name="fecha"
                  onChange={handleChange("fecha")}
                  onBlur={handleBlur("fecha")}
                  value={values.fecha}
                />
                <label>Fecha de nacimiento</label>
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="bg-white"
                  placeholder=" "
                  id="telefono"
                  name="telefono"
                  onChange={handleChange("telefono")}
                  onBlur={handleBlur("telefono")}
                  value={values.telefono}
                />
                <label>Teléfono</label>
              </div>
              {errors.telefono && touched.telefono && (
                <ErrorMessage
                  name="telefono"
                  component="div"
                  className="error"
                />
              )}
              <div className="form-group">
                <select
                  className="bg-white select select-bordered w-full w-full"
                  onChange={handleChange("estadoCivil")}
                  onBlur={handleBlur("estadoCivil")}
                  name="estadoCivil"
                >
                  <option defaultValue="Soltero">Estado cívil</option>
                  <option>soltero/a</option>
                  <option>casado/a</option>
                  <option>viudo/a</option>
                  <option>divorciado/a</option>
                </select>
              </div>
              {errors.ciudad && touched.ciudad && (
                <ErrorMessage
                  name="estadoCivil"
                  component="div"
                  className="error"
                />
              )}
              <div className="form-group">
                <input
                  type="text"
                  placeholder=" "
                  id="ciudad"
                  name="ciudad"
                  className="bg-white"
                  onChange={handleChange("ciudad")}
                  onBlur={handleBlur("ciudad")}
                  value={values.ciudad}
                />
                <label>Ciudad</label>
              </div>
              {errors.ciudad && touched.ciudad && (
                <ErrorMessage name="ciudad" component="div" className="error" />
              )}
              <div className="form-group">
                <input
                  type="text"
                  placeholder=" "
                  id="direccion"
                  name="direccion"
                  className="bg-white"
                  onChange={handleChange("direccion")}
                  onBlur={handleBlur("direccion")}
                  value={values.direccion}
                />
                <label>Dirección</label>
              </div>
              {errors.direccion && touched.direccion && (
                <ErrorMessage
                  name="direccion"
                  component="div"
                  className="error"
                />
              )}
              <div className="form-group">
                <input
                  type="password"
                  className="bg-white"
                  placeholder=" "
                  id="pass"
                  onChange={handleChange("contrasenia")}
                  onBlur={handleBlur("contrasenia")}
                  value={values.contrasenia}
                />
                <label>Contraseña</label>
              </div>
              {errors.contrasenia && touched.contrasenia && (
                <ErrorMessage
                  name="contrasenia"
                  component="div"
                  className="error"
                />
              )}

              <div className="form-group">
                <input
                  ref={refContrasenia}
                  type="password"
                  className="bg-white"
                  placeholder=" "
                  id="Confirmpass"
                  onChange={handleChange("confirmarContrasenia")}
                  onBlur={handleBlur("confirmarContrasenia")}
                  value={values.confirmarContrasenia}
                />
                <label>Confirmar contraseña</label>
              </div>
              {errors.confirmarContrasenia && touched.confirmarContrasenia && (
                <ErrorMessage
                  name="confirmarContrasenia"
                  component="div"
                  className="error"
                />
              )}

              <button
                className="bg-blue-700 p-2 rounded-sm text-gray-50   w-3/4 m-auto block "
                type="submit"
              >
                ACTUALIZAR
              </button>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};
