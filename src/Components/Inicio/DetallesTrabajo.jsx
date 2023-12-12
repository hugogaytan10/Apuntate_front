import React from 'react'
import './DetallesTrabajo.css'
export const DetallesTrabajo = () => {
    return (
        <div className='bg-fondo min-h-screen'>
            <div className='contenedor-trabajo'>
                <span className='franja-lateral'></span>
                <h3 className='text-lg font-bold p-2'>Estilista</h3>
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
                <ul className='contenedor-etiquetas flex flex-wrap justify-around items-center'>
                    <li>Tiempo completo</li>
                    <li>Hace un día</li>
                    <li>Moroleón</li>
                </ul>
            </div>
            <button className='block w-2/4 bg-gris-oscuro text-gray-50 p-2 m-auto mt-10 md:w-1/4'>APLICAR</button>
        </div>
    )
}
