import React from 'react'
import './Inicio.css'
import buscador from '../../assets/search.svg'
import { NavLink } from 'react-router-dom'
export const Inicio = () => {
    return (
        <div className='block min-h-screen w-full bg-fondo'>
            <div className='contenedor-buscador'>
                <span className='franja-lateral'></span>
                <div className='inputIcono'>
                    <input type="text" className='inputBuscador' placeholder='Buscar empleo' />
                    <img src={buscador} alt="buscador" />
                </div>
                <button className='block m-auto w-2/4 bg-primario text-gray-50 rounded-sm p-1 mb-2'>BUSCAR</button>
            </div>

            <h3 className='font-bold ml-4 mt-10 mb-4 text-lg'>EMPLEOS</h3>
            <div className='flex flex-wrap w-full justify-center mt-4 gap-4'>

                <div className='contenedor-empleo relative flex flex-wrap'>
                    <span className='franja-lateral'></span>
                    <p className='block w-full ml-4 font-bold text-lg'>Estilista</p>
                    <div className='block w-full'>
                        <ul className='flex flex-wrap justify-around items-center'>
                            <ol className='text-detalles'>Hace un día</ol>
                            <ol className='text-detalles'>Tiempo completo</ol>
                            <ol className='text-detalles'>Moroleón</ol>
                        </ul>
                    </div>
                    <NavLink className='bg-gris-oscuro text-gray-50 m-auto w-2/4 p-1 rounded-sm text-lg text-center' to='/detallesTrabajo'>Ver trabajo</NavLink>
                </div>

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

