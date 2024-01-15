import React, { useContext, useEffect, useState } from "react";
import "./Inicio.css";
import buscador from "../../assets/search.svg";
import sliders from "../../assets/sliders.svg";
import { NavLink } from "react-router-dom";
import { AppContext } from "../Contexto/AppContext";
export const Inicio = () => {
  const contexto = useContext(AppContext);
  const [inputValue, setInputValue] = useState("");
  const [buscadorTexto, setBuscadorTexto] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [trabajos, setTrabajos] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [slider, setSlider] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);
  const [pagination, setPagination] = useState(0);
  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setInputValue(userInput);

    const filtered = suggestions
      ? suggestions.filter((suggestion) =>
          suggestion.Ciudad.toLowerCase().includes(userInput.toLowerCase())
        )
      : [];
    setFilteredSuggestions(filtered);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setFilteredSuggestions([]);
  };

  const MostrarTrabajos = async () => {
    const url = "https://apuntateback-production.up.railway.app/api/trabajos";
    //const url = "http://localhost:8090/api/trabajos";
    const resp = await fetch(url);
    const data = await resp.json();
    setTrabajos(data);
  };

  const BuscarCiudades = async () => {
    const url =
      "https://apuntateback-production.up.railway.app/api/trabajos/ciudades";
    //const url = "http://localhost:8090/api/trabajos/ciudades";
    const resp = await fetch(url);
    const data = await resp.json();
    setSuggestions(data);
  };

  const BuscarTrabajoTexto = async () => {
    setIsAvailable(false);
    if (buscadorTexto !== "" && inputValue !== "") {
      const url = `https://apuntateback-production.up.railway.app/api/trabajos/buscarTextoCiudad`;
      //const url = `http://localhost:8090/api/trabajos/buscarTextoCiudad`;
      const resp = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ texto: buscadorTexto, ciudad: inputValue }),
      });
      const data = await resp.json();
      setIsAvailable(true);
      setTrabajos(data);
      return;
    }
    if (buscadorTexto != "") {
      //const url = `http://localhost:8090/api/trabajo/buscar`;
      const url = `https://apuntateback-production.up.railway.app/api/trabajo/buscar`;
      const resp = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ texto: buscadorTexto }),
      });
      const data = await resp.json();
      setIsAvailable(true);
      setTrabajos(data);
      return;
    }
    if (inputValue !== "") {
      //const url = `http://localhost:8090/api/trabajos/buscarCiudad`;
      const url = `https://apuntateback-production.up.railway.app/api/trabajos/buscarCiudad`;
      const resp = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ciudad: inputValue }),
      });
      const data = await resp.json();
      setTrabajos(data);
      setIsAvailable(true);
    }
  };
  const Login = async (email, contrasenia) => {
    const usuario = {
      Email: email,
      Contrasenia: contrasenia,
    };
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
        return response.json();
      })
      .then((data) => {
        if (data.usuario) {
          contexto.setUsuario(data.usuario);
          contexto.setToken(data.Token);
        }
      })
      .catch((err) => {});
  };
  const SiguientePagina = async () => {
    //fetch que muestre los siguientes 10 trabajos
    const url = `https://apuntateback-production.up.railway.app/api/trabajos/rango`;
    //const url = `http://localhost:8090/api/trabajos/rango`;
    const resp = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ inicio: pagination, fin: pagination + 10 }),
    });
    const data = await resp.json();
    setTrabajos(data);
    setPagination(pagination + 10);
  };
  const AnteriorPagina = async () => {
    //fetch que muestre los siguientes 10 trabajos
    if (pagination === 0) return;
    const url = `https://apuntateback-production.up.railway.app/api/trabajos/rango`;
    //const url = `http://localhost:8090/api/trabajos/rango`;
    const resp = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ inicio: pagination - 10, fin: pagination }),
    });
    const data = await resp.json();
    setTrabajos(data);
    console.log(pagination, data)
    setPagination(pagination - 10);
  };

  useEffect(() => {
    BuscarCiudades();
    MostrarTrabajos();
    if (window.localStorage.getItem("correoApuntate")) {
      const correo = JSON.parse(window.localStorage.getItem("correoApuntate"));
      const contrasenia = JSON.parse(
        window.localStorage.getItem("contraseniaApuntate")
      );
      Login(correo, contrasenia);
    }
  }, []);

  return (
    <div className="block min-h-screen w-full bg-fondo">
      <div className="contenedor-buscador">
        <span className="franja-lateral"></span>
        <div className="inputIcono">
          <input
            type="text"
            className="inputBuscador"
            placeholder="Buscar empleo"
            onChange={(e) => {
              setBuscadorTexto(e.target.value);
            }}
          />
          <img src={buscador} alt="buscador" />
        </div>

        <div
          onClick={() => {
            if (!slider) {
              document
                .getElementById("buscadorCiudad")
                .classList.add("buscadorCiudad");
            } else {
              document
                .getElementById("buscadorCiudad")
                .classList.remove("buscadorCiudad");
              setFilteredSuggestions([]);
            }
            setSlider(!slider);
          }}
          className="border-primario border-2 rounded-md h-8 w-8 flex  flex-wrap items-center justify-center cursor-pointer"
        >
          <img src={sliders} alt="" />
        </div>

        <input
          id="buscadorCiudad"
          className="inicio-buscadorCiudad"
          type="text"
          placeholder="Ciudad"
          value={inputValue}
          onChange={handleInputChange}
        />
        {filteredSuggestions.length > 0 && (
          <ul className="w-full text-center gap-1 h-8 p-2 flex overflow-hidden  overflow-x-auto justify-between mb-2">
            {filteredSuggestions.map((suggestion, indx) => (
              <li
                className="font-bold bg-gris-oscuro text-gray-50 w-1/4 cursor-pointer h-10"
                key={`ciudad_${indx}`}
                onClick={() => handleSuggestionClick(suggestion.Ciudad)}
              >
                {suggestion.Ciudad}
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={BuscarTrabajoTexto}
          className="block m-auto w-2/4 bg-primario text-gray-50 rounded-sm p-1 mb-2 md:w-1/4"
        >
          BUSCAR
        </button>
      </div>

      <h3 className="font-bold ml-4 mt-10 mb-4 text-lg md:text-3xl text-gray-600">
        EMPLEOS
      </h3>
      <div className="flex flex-wrap w-full justify-center mt-4 gap-4">
        {trabajos.length > 0 ? (
          trabajos.map((trabajo, index) => {
            return (
              <div
                key={`trabajo-${index}`}
                className="contenedor-empleo relative flex flex-wrap md:w-1/3"
              >
                <span className="franja-lateral"></span>
                <p className="block w-full ml-4 font-bold text-lg text-gray-600">
                  {trabajo.Titulo}
                </p>
                <div className="block w-full">
                  <ul className="flex flex-wrap justify-around items-center p-1">
                    <ol className="text-detalles">{trabajo.Modalidad}</ol>
                    <ol className="text-detalles">{trabajo.Tiempo}</ol>
                    <ol className="text-detalles">{trabajo.Contrato}</ol>
                  </ul>
                </div>
                <NavLink
                  onClick={() => {
                    contexto.setTrabajo(trabajo);
                  }}
                  className="bg-gris-oscuro text-gray-50 m-auto w-2/4 p-1 rounded-sm text-lg text-center"
                  to="/detallesTrabajo"
                >
                  Ver trabajo
                </NavLink>
              </div>
            );
          })
        ) : (
          <div className="w-full flex justify-center items-center">
            <h3 className="text-2xl text-gray-600">
              No se encontraron resultados
            </h3>
          </div>
        )}
        <div className="block w-full m-auto">
          <div className="join flex justify-center">
            <button
              onClick={AnteriorPagina}
              className="join-item btn btn-outline border-primario text-primario w-1/4"
            >
              Anterior
            </button>
            <button
              onClick={SiguientePagina}
              className="join-item btn btn-outline border-primario text-primario w-1/4"
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>

      {/*
        <div className="bg-gris-oscuro mt-4 p-2 w-10/12 m-auto md:w-1/4 md:m-0 md:mt-10 md:ml-4">
        <h3 className="text-gray-50 font-bold p-2 text-lg">
          ¿Requieres personal para tu negocio?
        </h3>
        <p className="text-gray-50 p-2">
          Contáctanos, uno de nuestros ejecutivos con gusto te atenderá.
        </p>
        <button className="bg-primario text-gray-50 p-4 block ml-2 w-4/10">
          Contacto
        </button>
      </div>
        */}
    </div>
  );
};
