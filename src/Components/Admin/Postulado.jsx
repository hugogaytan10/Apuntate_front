import React, { useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom';
import flecha from '../../assets/arrow-back-green.svg';
export const Postulado = () => {
    const { id } = useParams();
    const CopyToClip = (correo) => {

        if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
            return navigator.clipboard.writeText(correo);
        }

    }
    useEffect(() => {
        //traemos la informacion del usuario
        console.log(id)
    }, [])
    return (
        <div className='block min-h-screen w-full bg-fondo p-2'>
            <NavLink
                to='/postuladosAdmin'
                className='bg-gris-oscuro h-35 w-35 rounded-full inline-block m-2 shadow-lg'>
                <img src={flecha} alt="regreso" />
            </NavLink>
            <div className='flex w-full md:w-1/2 mt-10 m-auto rounded-md h-10 '>
                <div className='w-1/4 bg-gris-oscuro text-gray-50 rounded-l-md text-center'>Nombre</div>
                <div className='w-3/4 bg-primario text-gray-50 rounded-r-md pl-2'>Alan Brito</div>
            </div>

            <div className='flex w-full md:w-1/2 mt-2 m-auto rounded-md h-10 '>
                <div className='w-1/4 bg-gris-oscuro text-gray-50 rounded-l-md text-center'>Edad</div>
                <div className='w-3/4 bg-primario text-gray-50 rounded-r-md pl-2'>23</div>
            </div>

            <div className='flex w-full md:w-1/2 mt-2 m-auto rounded-md h-10 '>
                <div className='w-1/4 bg-gris-oscuro text-gray-50 rounded-l-md text-center'>Teléfono</div>
                <div className='w-2/4 bg-primario text-gray-50  pl-2' >+524451113370</div>
                <a className='w-1/4 bg-gris-oscuro text-gray-50 rounded-r-md text-center' href='tel:+524451113370'>Llamar</a>
            </div>

            <div className='flex w-full md:w-1/2 mt-2 m-auto rounded-md h-10 '>
                <div className='w-1/4 bg-gris-oscuro text-gray-50 rounded-l-md text-center'>Correo</div>
                <div className='w-2/4 bg-primario text-gray-50  pl-2'>Hola@gmail.com</div>
                <div className='w-1/4 bg-gris-oscuro text-gray-50 rounded-r-md text-center'
                    onClick={() => { CopyToClip('Hola@gmail.com') }}
                >COPIAR</div>
            </div>

            <div className='flex w-full md:w-1/2 mt-2 m-auto rounded-md h-10 '>
                <div className='w-1/4 bg-gris-oscuro text-gray-50 rounded-l-md text-center'>Estado</div>
                <div className='w-3/4 bg-primario text-gray-50 rounded-r-md pl-2'>Guanajuato</div>
            </div>

            <div className='flex w-full md:w-1/2 mt-2 m-auto rounded-md h-10 '>
                <div className='w-1/4 bg-gris-oscuro text-gray-50 rounded-l-md text-center'>Calle</div>
                <div className='w-3/4 bg-primario text-gray-50 rounded-r-md pl-2'>Presa solis</div>
            </div>

            <div className='flex w-full md:w-1/2 mt-2 m-auto rounded-md h-10 '>
                <div className='w-1/4 bg-gris-oscuro text-gray-50 rounded-l-md text-center'>Colonia</div>
                <div className='w-3/4 bg-primario text-gray-50 rounded-r-md pl-2'>La manguita del valle</div>
            </div>

            <div className='flex w-full md:w-1/2 mt-2 m-auto rounded-md h-10 '>
                <div className='w-1/4 bg-gris-oscuro text-gray-50 rounded-l-md text-center'>Código postal</div>
                <div className='w-3/4 bg-primario text-gray-50 rounded-r-md pl-2'>38800</div>
            </div>

            <button className='btn bg-red-500 text-gray-50 m-auto block mt-10'>DESCARTAR</button>
        </div>
    )
}
