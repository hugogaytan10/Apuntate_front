import React, { useContext, useEffect, useState } from "react";
import "./InicioAdmin.css";
import buscador from "../../assets/search.svg";
import add from "../../assets/add.svg";
import { NavLink } from "react-router-dom";
import { ErrorMessage, Formik } from "formik";
import { empleoSchema } from "../EsquemasValidacion/Empleo";
import { AppContext } from "../Contexto/AppContext";
export const InicioAdmin = () => {
  const contexto = useContext(AppContext);
  const [trabajo, setTrabajo] = useState({
    Titulo: "",
    Descripcion: "",
    Salario: "",
    Direccion: "",
    Tiempo: "",
    Empresa: "",
    Contrato: "",
    Modalidad: "",
    EmpresaId: "",
    Ciudad: "",
  });
  const [trabajos, setTrabajos] = useState([]);
  const agregarTrabajo = (nuevoTrabajo) => {
    //fetch("http://localhost:8090/api/trabajo/agregar", {
    fetch(
      "https://apuntateback-production.up.railway.app/api/trabajo/agregar",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: contexto.token,
        },
        body: JSON.stringify(nuevoTrabajo),
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  const actualizarTrabajo = (actualizarTrabajo) => {
    //fetch("http://localhost:8090/api/trabajo/actualizar", {
    fetch(
      "https://apuntateback-production.up.railway.app/api/trabajo/actualizar",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: contexto.token,
        },
        body: JSON.stringify(actualizarTrabajo),
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        if (data) {
          document.getElementById("my_modal_2").close();
          conseguirTrabajos();
        }
      })
      .catch((err) => console.log(err));
  };
  const conseguirTrabajos = () => {
    //fetch("http://localhost:8090/api/trabajos/", {
    fetch("https://apuntateback-production.up.railway.app/api/trabajos/", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        token: contexto.token,
      },
      body: JSON.stringify({ EmpresaId: contexto.usuario.Empresa_Id }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setTrabajos(data);
      })
      .catch((err) => console.log(err));
  };
  const eliminarTrabajo = () => {
    //fetch("http://localhost:8090/api/trabajo/eliminar", {
    fetch(
      "https://apuntateback-production.up.railway.app/api/trabajo/eliminar",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: contexto.token,
        },
        body: JSON.stringify({ Id: trabajo.Id }),
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        if (data) {
          conseguirTrabajos();
          document.getElementById("my_modal_3").close();
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    conseguirTrabajos();
  }, [trabajos, trabajo]);
  return (
    <div className="block min-h-screen w-full bg-fondo ">
      <div className="contenedor-buscador">
        <span className="franja-lateral"></span>
        <div className="inputIcono">
          <input
            type="text"
            className="inputBuscador"
            placeholder="Buscar empleo"
          />
          <img src={buscador} alt="buscador" />
        </div>
        <button className="block m-auto w-2/4 bg-primario text-gray-50 rounded-sm p-1 mb-2 md:w-1/4">
          BUSCAR
        </button>
      </div>
      <div className="flex flex-wrap w-full justify-center mt-4 gap-4">
        {trabajos.map((trabajo, index) => {
          return (
            <div
              key={`empleo_${index}`}
              className="contenedor-empleo relative flex flex-wrap md:w-1/3 text-gray-600"
            >
              <span className="franja-lateral"></span>
              <p className="block w-full ml-4 font-bold text-lg">
                {trabajo.Titulo}
              </p>
              <div className="block w-full">
                <ul className="flex flex-wrap justify-around items-center p-1">
                  <ol className="text-detalles">{trabajo.Modalidad}</ol>
                  <ol className="text-detalles">{trabajo.Tiempo}</ol>
                  <ol className="text-detalles">{trabajo.Contrato}</ol>
                </ul>
              </div>
              <div className="flex justify-around w-full">
                <NavLink
                  onClick={() => {
                    contexto.setTrabajo(trabajo);
                  }}
                  className="bg-gris-oscuro text-gray-50 m-auto w-1/3 p-1 rounded-sm text-base text-center"
                  to={`/postuladosAdmin/${trabajo.Id}`}
                >
                  Postulados
                </NavLink>
                <button
                  onClick={() => {
                    document.getElementById("my_modal_2").showModal();
                    setTrabajo(trabajo);
                  }}
                  className="bg-blue-600 text-gray-50 m-auto w-1/4 p-1 rounded-sm text-base text-center"
                >
                  Editar
                </button>
                <button
                  onClick={() => {
                    setTrabajo(trabajo);
                    document.getElementById("my_modal_3").showModal();
                  }}
                  className="bg-red-500 text-gray-50 m-auto w-1/4 p-1 rounded-sm text-base text-center"
                >
                  Eliminar
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => document.getElementById("my_modal_1").showModal()}
        className="fixed bottom-2 right-1"
      >
        <img src={add} alt="add" />
      </button>

      {/*MODAL PARA AGREGAR */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-white text-gray-600">
          <h3 className="font-bold text-lg">Registrar empleo</h3>
          <div className="modal-action">
            <Formik
              key={`empleo_nuevo_${trabajo.Id}`}
              initialValues={{
                titulo: "",
                descripcion: "",
                salario: "",
                ubicacion: "",
                tiempo: "",
                contrato: "",
                modalidad: "",
                ciudad: "",
              }}
              validationSchema={empleoSchema}
              onSubmit={(values) => {
                const nuevoTrabajo = {
                  Titulo: values.titulo,
                  Descripcion: values.descripcion,
                  Salario: values.salario,
                  Direccion: values.ubicacion,
                  Tiempo: values.tiempo,
                  Contrato: values.contrato,
                  Modalidad: values.modalidad,
                  Ciudad: values.ciudad,
                  EmpresaId: contexto.usuario.Empresa_Id,
                };
                agregarTrabajo(nuevoTrabajo);
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
                <form
                  className="w-full "
                  method="dialog"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(e);
                  }}
                >
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder=" "
                      name="titulo"
                      className="bg-white"
                      onChange={handleChange("titulo")}
                      onBlur={handleBlur("titulo")}
                      value={values.titulo}
                    />
                    <label>Título</label>
                  </div>
                  {errors.titulo && touched.titulo && (
                    <ErrorMessage
                      name="titulo"
                      component="div"
                      className="error"
                    />
                  )}

                  <div className="form-group">
                    <input
                      type="number"
                      placeholder=" "
                      name="salario"
                      className="bg-white"
                      onChange={handleChange("salario")}
                      onBlur={handleBlur("salario")}
                      value={values.salario}
                    />
                    <label>salario</label>
                  </div>
                  {errors.salario && touched.salario && (
                    <ErrorMessage
                      name="salario"
                      component="div"
                      className="error"
                    />
                  )}
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder=" "
                      name="ciudad"
                      className="bg-white"
                      onChange={handleChange("ciudad")}
                      onBlur={handleBlur("ciudad")}
                      value={values.ciudad}
                    />
                    <label>Ciudad</label>
                  </div>
                  {errors.ciudad && touched.ciudad && (
                    <ErrorMessage
                      name="ciudad"
                      component="div"
                      className="error"
                    />
                  )}
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder=" "
                      name="ubicacion"
                      className="bg-white"
                      onChange={handleChange("ubicacion")}
                      onBlur={handleBlur("ubicacion")}
                      value={values.ubicacion}
                    />
                    <label>Ubicación</label>
                  </div>
                  {errors.ubicacion && touched.ubicacion && (
                    <ErrorMessage
                      name="ubicacion"
                      component="div"
                      className="error"
                    />
                  )}
                  <div className="form-group">
                    <select
                      name="tiempo"
                      className="bg-white"
                      onChange={handleChange("tiempo")}
                      onBlur={handleBlur("tiempo")}
                      value={values.tiempo}
                    >
                      <option value="">Selecciona el tipo de tiempo</option>
                      <option value="completo">Tiempo completo</option>
                      <option value="medio tiempo">Medio tiempo</option>
                      <option value="indefinido">Indefinido</option>
                    </select>
                  </div>
                  {errors.tiempo && touched.tiempo && (
                    <ErrorMessage
                      name="tiempo"
                      component="div"
                      className="error"
                    />
                  )}

                  <div className="form-group">
                    <select
                      className="bg-white"
                      name="contrato"
                      onChange={handleChange("contrato")}
                      onBlur={handleBlur("contrato")}
                      value={values.contrato}
                    >
                      <option value="">Selecciona el tipo de contrato</option>
                      <option value="eventual">Eventual</option>
                      <option value="proyecto">Proyecto</option>
                      <option value="indefinido">Indefinido</option>
                    </select>
                  </div>
                  {errors.contrato && touched.contrato && (
                    <ErrorMessage
                      name="contrato"
                      component="div"
                      className="error"
                    />
                  )}
                  <div className="form-group">
                    <select
                      className="bg-white"
                      name="modalidad"
                      onChange={handleChange("modalidad")}
                      onBlur={handleBlur("modalidad")}
                      value={values.modalidad}
                    >
                      <option value="">Selecciona la modalidad</option>
                      <option value="presencial">Presencial</option>
                      <option value="hibrido">Híbrido</option>
                      <option value="home office">Home Office</option>
                    </select>
                  </div>
                  {errors.modalidad && touched.modalidad && (
                    <ErrorMessage
                      name="modalidad"
                      component="div"
                      className="error"
                    />
                  )}

                  <div className="form-group">
                    <textarea
                      className="bg-white"
                      type="text"
                      placeholder=" "
                      name="descripcion"
                      onChange={handleChange("descripcion")}
                      onBlur={handleBlur("descripcion")}
                      value={values.descripcion}
                    />
                    <label>Descripción</label>
                  </div>
                  {errors.descripcion && touched.descripcion && (
                    <ErrorMessage
                      name="descripcion"
                      component="div"
                      className="error"
                    />
                  )}
                  <div className="w-full flex justify-around">
                    <button
                      className="bg-blue-600 p-2 rounded-lg text-gray-50 mb-10 btn"
                      type="submit"
                    >
                      GUARDAR
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        document.getElementById("my_modal_1").close();
                      }}
                      className="btn bg-white text-red-500 border-red-500"
                    >
                      CERRAR
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </dialog>

      {/* MODAL DE ACUTALIZAR */}

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-white text-gray-600">
          <h3 className="font-bold text-lg">Actualizar empleo</h3>
          <div className="modal-action">
            <Formik
              key={`empleo_${trabajo.Id}`}
              initialValues={{
                titulo: trabajo.Titulo,
                descripcion: trabajo.Descripcion,
                salario: trabajo.Salario,
                ubicacion: trabajo.Direccion,
                tiempo: trabajo.Tiempo,
                contrato: trabajo.Contrato,
                modalidad: trabajo.Modalidad,
                ciudad: trabajo.Ciudad,
              }}
              validationSchema={empleoSchema}
              onSubmit={(values) => {
                const actualizar = {
                  Id: trabajo.Id,
                  Titulo: values.titulo,
                  Descripcion: values.descripcion,
                  Salario: values.salario,
                  Direccion: values.ubicacion,
                  Ciudad: values.ciudad,
                  Tiempo: values.tiempo,
                  Contrato: values.contrato,
                  Modalidad: values.modalidad,
                  EmpresaId: contexto.usuario.Empresa_Id,
                };
                actualizarTrabajo(actualizar);
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
                <form
                  className="w-full "
                  method="dialog"
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
                      name="titulo"
                      onChange={handleChange("titulo")}
                      onBlur={handleBlur("titulo")}
                      value={values.titulo}
                    />
                    <label>Título</label>
                  </div>
                  {errors.titulo && touched.titulo && (
                    <ErrorMessage
                      name="titulo"
                      component="div"
                      className="error"
                    />
                  )}

                  <div className="form-group">
                    <input
                      className="bg-white"
                      type="number"
                      placeholder=" "
                      name="salario"
                      onChange={handleChange("salario")}
                      onBlur={handleBlur("salario")}
                      value={values.salario}
                    />
                    <label>salario</label>
                  </div>
                  {errors.salario && touched.salario && (
                    <ErrorMessage
                      name="salario"
                      component="div"
                      className="error"
                    />
                  )}
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder=" "
                      name="ciudad"
                      className="bg-white"
                      onChange={handleChange("ciudad")}
                      onBlur={handleBlur("ciudad")}
                      value={values.ciudad}
                    />
                    <label>Ciudad</label>
                  </div>
                  {errors.ciudad && touched.ciudad && (
                    <ErrorMessage
                      name="ciudad"
                      component="div"
                      className="error"
                    />
                  )}
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder=" "
                      name="ubicacion"
                      className="bg-white"
                      onChange={handleChange("ubicacion")}
                      onBlur={handleBlur("ubicacion")}
                      value={values.ubicacion}
                    />
                    <label>Ubicación</label>
                  </div>
                  {errors.ubicacion && touched.ubicacion && (
                    <ErrorMessage
                      name="ubicacion"
                      component="div"
                      className="error"
                    />
                  )}
                  <div className="form-group">
                    <select
                      className="bg-white"
                      name="tiempo"
                      onChange={handleChange("tiempo")}
                      onBlur={handleBlur("tiempo")}
                      value={values.tiempo}
                    >
                      <option value="">Selecciona el tipo de tiempo</option>
                      <option value="completo">Tiempo completo</option>
                      <option value="medio tiempo">Medio tiempo</option>
                      <option value="indefinido">Indefinido</option>
                    </select>
                  </div>
                  {errors.tiempo && touched.tiempo && (
                    <ErrorMessage
                      name="tiempo"
                      component="div"
                      className="error"
                    />
                  )}
                  <div className="form-group">
                    <select
                      className="bg-white"
                      name="contrato"
                      onChange={handleChange("contrato")}
                      onBlur={handleBlur("contrato")}
                      value={values.contrato}
                    >
                      <option value="">Selecciona el tipo de contrato</option>
                      <option value="eventual">Eventual</option>
                      <option value="proyecto">Proyecto</option>
                      <option value="indefinido">Indefinido</option>
                    </select>
                  </div>
                  {errors.contrato && touched.contrato && (
                    <ErrorMessage
                      name="contrato"
                      component="div"
                      className="error"
                    />
                  )}
                  <div className="form-group">
                    <select
                      className="bg-white"
                      name="modalidad"
                      onChange={handleChange("modalidad")}
                      onBlur={handleBlur("modalidad")}
                      value={values.modalidad}
                    >
                      <option value="">Selecciona la modalidad</option>
                      <option value="presencial">Presencial</option>
                      <option value="hibrido">Híbrido</option>
                      <option value="home office">Home Office</option>
                    </select>
                  </div>
                  {errors.modalidad && touched.modalidad && (
                    <ErrorMessage
                      name="modalidad"
                      component="div"
                      className="error"
                    />
                  )}

                  <div className="form-group">
                    <textarea
                      className="bg-white"
                      type="text"
                      placeholder=" "
                      name="descripcion"
                      onChange={handleChange("descripcion")}
                      onBlur={handleBlur("descripcion")}
                      value={values.descripcion}
                    />
                    <label>Descripción</label>
                  </div>
                  {errors.descripcion && touched.descripcion && (
                    <ErrorMessage
                      name="descripcion"
                      component="div"
                      className="error"
                    />
                  )}
                  <div className="w-full flex justify-around">
                    <button
                      className="bg-blue-600 p-2 rounded-lg text-gray-50 mb-10 btn"
                      type="submit"
                    >
                      ACTUALIZAR
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        document.getElementById("my_modal_2").close();
                      }}
                      className="btn bg-white text-red-500 border-red-500"
                    >
                      CERRAR
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </dialog>

      {/* MODAL DE ELIMINAR */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white text-gray-600">
          <h3 className="font-bold text-lg">
            Eliminar empleo <strong> {trabajo.Tiempo} </strong>
          </h3>
          <p>¿Estás apunto de eliminar un empleo, estas seguro?</p>
          <div className="modal-action">
            <form method="dialog" className="w-full">
              <div className="w-full flex justify-around">
                <button
                  className="bg-red-500 p-2 rounded-lg text-gray-50 mb-10 btn"
                  type="submit"
                  onClick={() => {
                    eliminarTrabajo();
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
