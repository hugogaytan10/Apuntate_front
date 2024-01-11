import React, { useContext } from 'react'
import user from '../../assets/user.svg'
import './Login.css'
import { AppContext } from '../Contexto/AppContext'
import { useNavigate } from 'react-router-dom';
import { data } from 'autoprefixer';

export const Login = () => {
    const contexto = useContext(AppContext);
    const navigate = useNavigate();

    const ManejoLogin = () => {
        const usuario = {
           Email: document.getElementById('correo').value,
           Contrasenia: document.getElementById('pass').value
        }
        
        fetch('http://localhost:8090/api/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        }).then(response => response.json())
            .then(data => {
                if (data.usuario) {
                    contexto.setUsuario(data.usuario);
                    contexto.setToken(data.Token);
                    navigate('/inicio');
                } 
                
            })
            .catch(err => console.log(err))
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
                <h2 className='font-extrabold text-center text-4xl relative top-4 text-gray-600'>LOGIN</h2>

                <div className='w-3/4 m-auto relative top-20 text-gray-600'>
                    <div className="form-group">
                        <input type="text"  className='bg-white' placeholder=" " id="correo" />
                        <label>Correo</label>
                    </div>
                    <div className="form-group top-4">
                        <input type="password"  className='bg-white' placeholder=" " id="pass" />
                        <label>Contraseña</label>
                    </div>

                    <div className=" w-52">
                        <label className="cursor-pointer flex items-center gap-4 mt-10 ">
                            <input type="checkbox" className="toggle toggle-accent text-primario"  />
                            <span className="label-text text-gray-600">Recordar</span>
                        </label>
                    </div>

                    <button className='block m-auto w-full md:w-1/2 bg-primario relative top-10 p-2 rounded-md text-gray-50 font-semibold' onClick={ManejoLogin}>ENTRAR</button>
                    <button className='block m-auto w-full md:w-1/2 bg-white border-primario border-2 relative top-14 p-2 rounded-md font-semibold text-primario' onClick={Registro}>REGISTRARSE</button>
                </div>
            </div>
        </div>
    )
}
