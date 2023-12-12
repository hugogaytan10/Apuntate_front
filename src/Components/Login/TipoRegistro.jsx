import React from 'react'
import arrow from '../../assets/arrow-back-green.svg'
import company from '../../assets/business.svg'
import user from '../../assets/user-green.svg'
import { useNavigate } from 'react-router-dom'
export const TipoRegistro = () => {
    const navigate = useNavigate();
    return (
        <div className='min-h-screen bg-primario relative'>
            <div 
            onClick={()=>{navigate('/login')}}
            className='h-8 w-8 bg-white block rounded-full left-3 absolute top-3'>
                <img src={arrow} alt="arrow" />
            </div>
            <h3 className='relative text-white text-2xl text-center top-12'>¿Cómo deseas registrarte?</h3>
            <div
                onClick={() => { navigate('/RegistroCompania') }}
                className='h-72 w-72 bg-white rounded-full absolute top-20 left-1/2 -translate-x-1/2 flex flex-wrap flex-col justify-center items-center'>
                <img src={company} alt="compañia" />
                <p className='text-2xl font-bold text-primario'>COMPAÑIA</p>
            </div>
            <div
                onClick={() => { navigate('/RegistroUsuario') }}
                className='h-72 w-72 bg-white rounded-full absolute top-96 left-1/2 -translate-x-1/2 flex flex-wrap flex-col justify-center items-center'>
                <img src={user} alt="usuario" />
                <p className='text-2xl font-bold text-primario'>TRABAJADOR</p>
            </div>
        </div>
    )
}
