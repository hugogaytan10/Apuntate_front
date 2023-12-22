import React from 'react'
import './DetallesTrabajo.css'
import flecha from '../../assets/arrow-back-green.svg';
import { NavLink } from 'react-router-dom';
export const DetallesTrabajo = () => {
    return (
        <div className='bg-fondo min-h-screen'>
            <NavLink 
            to='/inicio'
            className='bg-gris-oscuro h-35 w-35 rounded-full inline-block m-2 shadow-lg'>
                <img src={flecha} alt="regreso" />
            </NavLink>
            <div className='contenedor-trabajo'>
                <span className='franja-lateral'></span>
                <h3 className='text-2xl font-extrabold p-2'>Estilista</h3>
                <p>
                    En Mujer Bella, estamos en busca de
                    un estilista talentoso y apasionado
                    para unirse a nuestro equipo.
                    Valoramos la creatividad, la
                    dedicación y la  habilidad para
                    realzar la belleza de nuestros clientes.
                    Como estilista en nuestro equipo,
                    tendrás la oportunidad de dar rienda
                    suelta a tu creatividad, colaborar con
                    clientes diversos y contribuir al éxito
                    de nuestro salón.
                </p>
                <ul className='contenedor-etiquetas flex flex-wrap justify-around items-center gap-2 '>
                    <li>Tiempo completo</li>
                    <li>Hace un día</li>
                    <li>Moroleón</li>
                </ul>
            </div>
            <button className='block w-2/4 bg-gris-oscuro text-gray-50 p-2 m-auto mt-10 md:w-1/4'>APLICAR</button>
        </div>
    )
}
