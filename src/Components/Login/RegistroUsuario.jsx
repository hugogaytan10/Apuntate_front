import React, { useState } from 'react'

export const RegistroUsuario = () => {
    const [paso, setPaso] = useState(0);
    const CambioColor = () => {
        setPaso(paso + 1);
        if (paso == 0) {
            const divUno = document.getElementById('pasoUno');
            const divDos = document.getElementById('pasoDos');
            const formDos = document.getElementById('divPasoDos');
            const formUno = document.getElementById('divPasoUno');
            formDos.style.opacity = '1';
            formDos.style.display = 'block';
            formUno.style.opacity = '0';
            formUno.style.display = 'none';
            divUno.style.backgroundColor = '#2C3A3A';
            divDos.style.backgroundColor = '#5BA4A4';
        }
        if (paso == 1) {
            const divDos = document.getElementById('pasoDos');
            const divTres = document.getElementById('pasoTres');
            const formDos = document.getElementById('divPasoDos');
            const formTres = document.getElementById('divPasoTres');
            formDos.style.opacity = '0';
            formDos.style.display = 'none';
            formTres.style.opacity = '1';
            formTres.style.display = 'block';
            divDos.style.backgroundColor = '#2C3A3A';
            divTres.style.backgroundColor = '#5BA4A4';
        }
    }
    const Retroceder = () => {
        setPaso(paso - 1);
        if (paso == 1) {
            const divUno = document.getElementById('pasoUno');
            const divDos = document.getElementById('pasoDos');
            const formDos = document.getElementById('divPasoDos');
            const formUno = document.getElementById('divPasoUno');
            formDos.style.opacity = '0';
            formDos.style.display = 'none';
            formUno.style.opacity = '1';
            formUno.style.display = 'block';
            divUno.style.backgroundColor = '#5BA4A4';
            divDos.style.backgroundColor = '#2C3A3A';
        }
        if (paso == 2) {
            const divDos = document.getElementById('pasoDos');
            const divTres = document.getElementById('pasoTres');
            const formDos = document.getElementById('divPasoDos');
            const formTres = document.getElementById('divPasoTres');
            formDos.style.opacity = '1';
            formDos.style.display = 'block';
            formTres.style.opacity = '0';
            formTres.style.display = 'none';
            divDos.style.backgroundColor = '#5BA4A4';
            divTres.style.backgroundColor = '#2C3A3A';
        }
    }
    return (
        <div className='bg-fondo min-h-screen'>
            <div className='flex flex-wrap w-full justify-around'>
                <div id="pasoUno" className={`mt-4 h-16 w-16 bg-primario text-white rounded-full flex items-center justify-center font-bold text-2xl`}>1</div>
                <div id="pasoDos" className={`mt-4 h-16 w-16 bg-gris-oscuro text-white rounded-full flex items-center justify-center font-bold text-2xl`}>2</div>
                <div id="pasoTres" className={`mt-4 h-16 w-16 bg-gris-oscuro text-white rounded-full flex items-center justify-center font-bold text-2xl`}>3</div>
            </div>


            <div id='divPasoUno' className='w-11/12 m-auto bg-white mt-10 transition-all md:w-2/4'>
                <h3 className='font-bold text-xl ml-4'>Datos Personales</h3>
                <div className='w-10/12 m-auto mt-10'>
                    <div className="form-group">
                        <input type="text" placeholder=" " id="nombre" />
                        <label>Nombre Completo</label>
                    </div>
                    <div className="form-group">
                        <input type="number" placeholder=" " id="edad" />
                        <label>Edad</label>
                    </div>
                    <div className="form-group">
                        <input type="date" placeholder=" " id="fecha" />
                        <label>Fecha de nacimiento</label>
                    </div>
                    <div className="form-group">
                        <input type="number" placeholder=" " id="telefono" />
                        <label>Teléfono</label>
                    </div>
                    <div className="form-group">
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Estado cívil</option>
                            <option>Solter@</option>
                            <option>Casad@</option>
                            <option>Viud@</option>
                        </select>
                    </div>

                    <button className='bg-gris-oscuro p-2 rounded-sm text-gray-50 mb-10' onClick={CambioColor}>SIGUIENTE</button>

                </div>
            </div>



            <div id='divPasoDos' className='w-11/12 m-auto bg-white mt-10 transition-all opacity-0 md:w-2/4'>
                <h3 className='font-bold text-xl ml-4'>Lugar de Residencia</h3>
                <div className='w-10/12 m-auto mt-10'>

                    <div className="form-group">
                        <input type="text" placeholder=" " id="estado" />
                        <label>Estado</label>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder=" " id="calle" />
                        <label>Calle y número</label>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder=" " id="colonia" />
                        <label>Colonia</label>
                    </div>
                    <div className="form-group">
                        <input type="number" placeholder=" " id="codigoPostal" />
                        <label>Código postal</label>
                    </div>
                    <div className='w-3/4 flex flex-wrap justify-around'>
                        <button className='border-2 border-gris-oscuro p-2 rounded-sm text-gris-oscuro mb-10' onClick={Retroceder}>Retroceder</button>
                        <button className='bg-gris-oscuro p-2 rounded-sm text-gray-50 mb-10' onClick={CambioColor}>SIGUIENTE</button>

                    </div>
                </div>
            </div>

            <div id='divPasoTres' className='w-11/12 m-auto bg-white mt-10 transition-all opacity-0 md:w-2/4'>
                <h3 className='font-bold text-xl ml-4'>Credenciales</h3>
                <div className='w-10/12 m-auto mt-10'>
                    <div className="form-group">
                        <input type="text" placeholder=" " id="name" />
                        <label>Correo</label>
                    </div>
                    <div className="form-group top-4">
                        <input type="password" placeholder=" " id="pass" />
                        <label>Contraseña</label>
                    </div>
                    <div className="form-group top-4">
                        <input type="password" placeholder=" " id="pass" />
                        <label>Confirmar contraseña</label>
                    </div>
                    <div className='w-3/4 flex flex-wrap justify-around mt-10'>
                        <button className='border-2 border-gris-oscuro p-2 rounded-sm text-gris-oscuro mb-10' onClick={Retroceder}>Retroceder</button>
                        <button className='bg-gris-oscuro p-2 rounded-sm text-gray-50 mb-10' onClick={CambioColor}>SIGUIENTE</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
