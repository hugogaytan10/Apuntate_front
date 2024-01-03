import React from 'react'
import { NavLink } from 'react-router-dom'
import flecha from '../../assets/arrow-back-green.svg';
export const Postulados = () => {
    return (
        <div className='block min-h-screen w-full bg-fondo'>
            <NavLink
                to='/InicioAdmin'
                className='bg-white h-35 w-35 rounded-full inline-block m-2 shadow-lg'>
                <img src={flecha} alt="regreso" />
            </NavLink>
            <div className='flex flex-wrap w-full justify-center mt-4 gap-4'>
                <div className='contenedor-empleo relative flex flex-wrap md:w-4/12'>
                    <span className='franja-lateral'></span>
                    <p className='block w-full ml-4 font-bold text-lg'>Alan Brito</p>

                    <div className='flex justify-around w-full'>
                        <NavLink className='bg-primario btn text-gray-50 m-auto w-5/12 p-1 rounded-sm text-base text-center' to={`/postulado/${1}`}>Ver postulante</NavLink>
                        <button className='bg-white btn border-red-500 text-red-500 m-auto  p-1 rounded-sm text-base text-center'>Eliminar</button>
                    </div>
                </div>

            </div>

        </div>
    )
}
