import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'
import { Inicio } from '../Inicio/Inicio'
import { Perfil } from '../Perfil/Perfil'
import menu from '../../assets/menu.svg'
import { DetallesTrabajo } from '../Inicio/DetallesTrabajo'
import { Login } from '../Login/Login'
import { AppContext } from '../Contexto/AppContext'
import { TipoRegistro } from '../Login/TipoRegistro'
import { RegistroUsuario } from '../Login/RegistroUsuario'
import { RegistroCompania } from '../Login/RegistroCompania'
export const Rutas = () => {
    const contexto = useContext(AppContext);
    return (
        <BrowserRouter>

            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />


                <div className="drawer-content flex flex-col">
                    < div className="w-full navbar bg-gris-oscuro">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <img src={menu} alt='menu' className='h-10 w-10 ' htmlFor="my-drawer" />
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2 text-gray-50 font-bold justify-center md:justify-start">APUNTATE</div>
                        <div className="flex-none hidden lg:block ">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                <li><a className='text-white'>Inicio</a></li>
                                <li><a className='text-white'>Perfil</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}
                    <Routes>
                        <Route path='/' element={<Inicio />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/registro' element={<Inicio />}></Route>
                        <Route path='/TipoRegistro' element={<TipoRegistro />}></Route>
                        <Route path='/RegistroUsuario' element={<RegistroUsuario />}></Route>
                        <Route path='/RegistroCompania' element={<RegistroCompania />}></Route>
                        <Route path='/inicio' element={<Inicio />}></Route>
                        <Route path='/perfil' element={<Perfil />}></Route>
                        <Route path='/detallesTrabajo' element={<DetallesTrabajo />}></Route>
                    </Routes>
                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-gris-oscuro">
                        {/* Sidebar content here */}
                        <li><NavLink to='/inicio' className='text-white text-lg' >Inicio</NavLink></li>
                        <li><NavLink to='/perfil' className='text-white text-lg' >Perfil</NavLink></li>
                        <li><NavLink to='/login' className='text-white text-lg' >Iniciar sesión</NavLink></li>
                    </ul>
                </div>
            </div >

        </BrowserRouter >
    )
}
