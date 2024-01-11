import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import flecha from '../../assets/arrow-back-green.svg';
export const Postulados = () => {
    const {id} = useParams();
    useEffect(()=>{
        //mandar a llamar todos los postaludos de un trabajo
    },[])
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
                        <button 
                        onClick={() => { document.getElementById('my_modal_3').showModal(); }}
                        className='bg-white btn border-red-500 text-red-500 m-auto  p-1 rounded-sm text-base text-center'>Eliminar</button>
                    </div>
                </div>

            </div>

            {/* MODAL DE ELIMINAR */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Eliminar postulado</h3>
                    <p>¿Estás apunto de eliminar un postulado, estas seguro?</p>
                    <div className="modal-action">
                        <form method="dialog" className='w-full'>
                            <div className='w-full flex justify-around'>
                                <button
                                    className='bg-red-500 p-2 rounded-lg text-gray-50 mb-10 btn'
                                    type='submit'
                                >ELIMINAR</button>
                                <button
                                    type='button'
                                    onClick={() => { document.getElementById('my_modal_3').close(); }}
                                    className="btn bg-white text-gray-500 border-gray-500">CERRAR</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>


        </div>
    )
}
