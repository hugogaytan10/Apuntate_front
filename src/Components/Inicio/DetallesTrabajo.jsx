import React, { useContext, useState } from 'react'
import './DetallesTrabajo.css'
import flecha from '../../assets/arrow-back-green.svg';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../Contexto/AppContext';
import { Loader } from '../Loader/Loader';
export const DetallesTrabajo = () => {
    const contexto = useContext(AppContext);
    const [loader, setLoader] = useState(false);
    const Aplicar = async () => {
        
        //en caso de que no este logueado, invitar a iniciar sesion
        if (!contexto.usuario.correo == '') {
            document.getElementById('my_modal_2').showModal();
        }else{
            setLoader(true);
            //POSTULAR EL USUARIO AL EMPLEO
            setTimeout(() => {
                setLoader(false);
                document.getElementById('my_modal_1').showModal();
            }, 2000);
        }
    }
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
            <button
                onClick={Aplicar}
                className='block h-14 w-2/4 bg-gris-oscuro text-gray-50 p-2 m-auto mt-10 md:w-1/4'>
                {
                    loader ?
                        <Loader />
                        :
                        "APLICAR"
                }
            </button>

            {/* MODAL PARA INVITAR A INICIAR SESION */}
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Inicie sesión</h3>
                    <p>Para poder postularse es necesario iniciar sesión</p>
                    <div className="modal-action">
                        <form method="dialog" className='w-full'>
                            <div className='w-full flex justify-around'>
                                <button
                                    className='bg-blue-500 p-2 rounded-lg text-gray-50  btn w-3/4'
                                    type='submit'
                                >ACEPTAR</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>

            {/* MODAL POATULACION EXITOSA */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Postulación éxitosa</h3>
                    <p>Felicidades por dar este gran paso, ¡éxito!</p>
                    <div className="modal-action">
                        <form method="dialog" className='w-full'>
                            <div className='w-full flex justify-around'>
                                <button
                                    className='bg-blue-500 p-2 rounded-lg text-gray-50  btn w-3/4'
                                    type='submit'
                                >ACEPTAR</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    )
}
