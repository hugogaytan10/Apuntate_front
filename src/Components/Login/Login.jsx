import React, { useContext } from 'react'
import user from '../../assets/user.svg'
import './Login.css'
import { AppContext } from '../Contexto/AppContext'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const contexto = useContext(AppContext);
    const navigate = useNavigate();
    const ManejoLogin = () => {
        const usuario = {
            correo: 'hola',
            contrasenia: 'a',
            id: '1',
            tipo: '1'
        }
        contexto.setUsuario(usuario)
        navigate('/inicio');
        console.log(contexto.usuario)
    }
    const Registro = () => {
        navigate('/TipoRegistro');
    }
    return (
        <div className='bg-primario relative min-h-screen min-w-full'>
            <div className='w-32 h-32 bg-white rounded-full relative m-auto top-10'>
                <img src={user} alt='user' className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>
            <div className='contenedor-login bg-white relative top-20  border-primary shadow-lg '>
                <h2 className='font-extrabold text-center text-4xl relative top-4'>LOGIN</h2>

                <div className='w-3/4 m-auto relative top-20'>
                    <div className="form-group">
                        <input type="text" placeholder=" " id="name" />
                        <label>Correo</label>
                    </div>
                    <div className="form-group top-4">
                        <input type="password" placeholder=" " id="pass" />
                        <label>Contraseña</label>
                    </div>

                    <div className=" w-52">
                        <label className="cursor-pointer flex items-center gap-4 mt-10">
                            <input type="checkbox" className="toggle toggle-accent"  />
                            <span className="label-text">Recordar</span>
                        </label>
                    </div>

                    <button className='block m-auto w-full md:w-1/2 bg-primario relative top-10 p-2 rounded-md text-gray-50 font-semibold' onClick={ManejoLogin}>ENTRAR</button>
                    <button className='block m-auto w-full md:w-1/2 bg-white border-primario border-2 relative top-14 p-2 rounded-md font-semibold text-primario' onClick={Registro}>REGISTRARSE</button>
                </div>
            </div>
        </div>
    )
}
