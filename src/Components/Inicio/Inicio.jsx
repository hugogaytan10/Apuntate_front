import React, { useEffect, useState } from 'react'
import './Inicio.css'
import buscador from '../../assets/search.svg'
import { NavLink } from 'react-router-dom'
export const Inicio = () => {
    const [inputValue, setInputValue] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [trabajos, setTrabajos] = useState([]);
    const suggestions = ['moroleon', 'uriangato', 'yuriria', 'moroleon', 'uriangato', 'yuriria', 'moroleon', 'uriangato', 'yuriria']
    const handleInputChange = (e) => {
        const userInput = e.target.value;
        setInputValue(userInput);
        const filtered = suggestions.filter(
            suggestion => suggestion.toLowerCase().includes(userInput.toLowerCase())
        );
        setFilteredSuggestions(filtered);
    };

    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion);
        setFilteredSuggestions([]);
    };

    const MostrarTrabajos = async () => {
        const url = 'http://localhost:8090/api/trabajos';
        const resp = await fetch(url);
        const data = await resp.json();
        setTrabajos(data);
    }
    useEffect(() => {
        MostrarTrabajos();
    }, [])
    return (
        <div className='block min-h-screen w-full bg-fondo'>
            <div className='contenedor-buscador'>
                <span className='franja-lateral'></span>
                <div className='inputIcono'>
                    <input type="text" className='inputBuscador' placeholder='Buscar empleo' />
                    <img src={buscador} alt="buscador" />
                </div>
                <div
                    onClick={() => {
                        document.getElementById('buscadorCiudad').classList.add('buscadorCiudad');
                    }}
                    className='border-primario border-2 rounded-md h-8 w-8 flex  flex-wrap items-center justify-center'>
                    <img src={buscador} alt="" />
                </div>
                <input
                    id='buscadorCiudad'
                    className='inicio-buscadorCiudad'
                    type="text"
                    placeholder='Ciudad'
                    value={inputValue}
                    onChange={handleInputChange}
                />
                {filteredSuggestions.length > 0 && (
                    <ul className='w-full text-center gap-1 h-8 p-2 flex flex-wrap overflow-hidden justify-between mb-2'>
                        {filteredSuggestions.map(suggestion => (
                            <li
                                className='font-bold bg-gris-oscuro text-gray-50 w-1/4 cursor-pointer'
                                key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                )}


                <button className='block m-auto w-2/4 bg-primario text-gray-50 rounded-sm p-1 mb-2 md:w-1/4'>BUSCAR</button>
            </div>

            <h3 className='font-bold ml-4 mt-10 mb-4 text-lg md:text-3xl text-gray-600'>EMPLEOS</h3>
            <div className='flex flex-wrap w-full justify-center mt-4 gap-4'>

                {
                    trabajos.map((trabajo, index) => {
                        return (
                            <div
                                key={`trabajo-${index}`}
                                className='contenedor-empleo relative flex flex-wrap md:w-1/3'>
                                <span className='franja-lateral'></span>
                                <p className='block w-full ml-4 font-bold text-lg text-gray-600'>{trabajo.Titulo}</p>
                                <div className='block w-full'>
                                    <ul className='flex flex-wrap justify-around items-center p-1'>
                                        <ol className='text-detalles'>{trabajo.Modalidad}</ol>
                                        <ol className='text-detalles'>{trabajo.Tiempo}</ol>
                                        <ol className='text-detalles'>{trabajo.Contrato}</ol>
                                    </ul>
                                </div>
                                <NavLink
                                    
                                    className='bg-gris-oscuro text-gray-50 m-auto w-2/4 p-1 rounded-sm text-lg text-center'
                                    to='/detallesTrabajo'>
                                    Ver trabajo
                                </NavLink>
                            </div>
                        )
                    })
                }




            </div>

            <div className='bg-gris-oscuro mt-4 p-2 w-10/12 m-auto md:w-1/4 md:m-0 md:mt-10 md:ml-4'>
                <h3 className='text-gray-50 font-bold p-2 text-lg'>¿Requieres personal para tu negocio?</h3>
                <p className='text-gray-50 p-2'>Contáctanos, uno de nuestros
                    ejecutivos con gusto te atenderá.
                </p>
                <button className='bg-primario text-gray-50 p-4 block ml-2 w-4/10'>Contacto</button>
            </div>


        </div>
    )
}

