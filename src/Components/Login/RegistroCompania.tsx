import React, { useContext, useState } from 'react'
import { Empresa } from '../Modelos/Empresa'
import { ErrorMessage, Formik } from 'formik';
import { empresaCuatroSchema, empresaDosSchema, empresaSchema, empresaTresSchema } from '../EsquemasValidacion/Empresa';
import { clickBtn } from './confetti';
import { AppContext } from '../Contexto/AppContext';
import { Usuario } from '../Modelos/Usuario';
import { useNavigate } from 'react-router-dom';
export const RegistroCompania = () => {
    const [paso, setPaso] = useState(0);
    const [registro, setRegistro] = useState<Partial<Empresa>>();
    const contexto = useContext(AppContext);
    const navigate = useNavigate();
    const CambioColor = () => {
        if (paso == 0) {
            const divUno = document.getElementById('pasoUno');
            const divDos = document.getElementById('pasoDos');
            const formDos = document.getElementById('divPasoDos');
            const formUno = document.getElementById('divPasoUno');
            if (formDos && divUno && formUno && divDos) {
                formDos.style.opacity = '1';
                formDos.style.display = 'block';
                formUno.style.opacity = '0';
                formUno.style.display = 'none';
                divUno.style.backgroundColor = '#2C3A3A';
                divDos.style.backgroundColor = '#5BA4A4';
            }
        }
        else if (paso == 1) {
            const divDos = document.getElementById('pasoDos');
            const divTres = document.getElementById('pasoTres');
            const formDos = document.getElementById('divPasoDos');
            const formTres = document.getElementById('divPasoTres');
            if (formDos && formTres && divDos && divTres) {
                formDos.style.opacity = '0';
                formDos.style.display = 'none';
                formTres.style.opacity = '1';
                formTres.style.display = 'block';
                divDos.style.backgroundColor = '#2C3A3A';
                divTres.style.backgroundColor = '#5BA4A4';
            }
        }
        else if (paso == 2) {
            const divTres = document.getElementById('pasoTres');
            const divCuatro = document.getElementById('pasoCuatro');
            const formTres = document.getElementById('divPasoTres');
            const formCuatro = document.getElementById('divPasoCuatro');
            if (formTres && formCuatro && divTres && divCuatro) {
                formTres.style.opacity = '0';
                formTres.style.display = 'none';
                formCuatro.style.opacity = '1';
                formCuatro.style.display = 'block';
                divTres.style.backgroundColor = '#2C3A3A';
                divCuatro.style.backgroundColor = '#5BA4A4';
            }
        }

        setPaso(paso + 1);
    }
    const Retroceder = () => {
        if (paso > 0) {
            if (paso == 1) {
                const divUno = document.getElementById('pasoUno');
                const divDos = document.getElementById('pasoDos');
                const formDos = document.getElementById('divPasoDos');
                const formUno = document.getElementById('divPasoUno');
                if (formDos && formUno && divDos && divUno) {
                    formDos.style.opacity = '0';
                    formDos.style.display = 'none';
                    formUno.style.opacity = '1';
                    formUno.style.display = 'block';
                    divUno.style.backgroundColor = '#5BA4A4';
                    divDos.style.backgroundColor = '#2C3A3A';
                }
            }
            else if (paso == 2) {
                const divDos = document.getElementById('pasoDos');
                const divTres = document.getElementById('pasoTres');
                const formDos = document.getElementById('divPasoDos');
                const formTres = document.getElementById('divPasoTres');
                if (formDos && formTres && divDos && divTres) {
                    formDos.style.opacity = '1';
                    formDos.style.display = 'block';
                    formTres.style.opacity = '0';
                    formTres.style.display = 'none';
                    divDos.style.backgroundColor = '#5BA4A4';
                    divTres.style.backgroundColor = '#2C3A3A';
                }
            }
            else if (paso == 3) {
                const divTres = document.getElementById('pasoTres');
                const divCuatro = document.getElementById('pasoCuatro');
                const formTres = document.getElementById('divPasoTres');
                const formCuatro = document.getElementById('divPasoCuatro');
                if (formTres && formCuatro && divTres && divCuatro) {
                    formTres.style.opacity = '1';
                    formTres.style.display = 'block';
                    formCuatro.style.opacity = '0';
                    formCuatro.style.display = 'none';
                    divTres.style.backgroundColor = '#5BA4A4';
                    divCuatro.style.backgroundColor = '#2C3A3A';
                }
            }

        }
        setPaso(paso - 1);
    }
    const insertarUsuario = async (usuario: Empresa, email: string, contrasenia: string) => {
       
        const direccion = usuario.calle + ' ' + usuario.colonia + ' ' + usuario.estado + ' ' + usuario.codigoPostal;
        const usuarioNuevo = {
            Nombre: usuario.nombre,
            Apellido: usuario.apellido,
            Telefono: usuario.telefono.toString(),
            EstadoCivil: usuario.estadoCivil,
            FechaNac: usuario.fecha,
            Direccion: direccion,
            Ciudad: usuario.ciudad,
            Email: email,
            Contrasenia: contrasenia,
            Giro: usuario.giro,
            NombreEmpresa: usuario.nombreEmpresa,
            RFC: usuario.RFC
        }
        console.log(usuarioNuevo)
        //fetch('http://localhost:8090/api/empresa/agregar', {
        fetch('https://apuntateback-production.up.railway.app/api/empresa/agregar', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuarioNuevo),
        }).then(res => {
            return res.json();
        }).then(data => {
           if(data.Token){
            contexto.setToken(data.Token);
            contexto.setUsuario(data.usuario);
            localStorage.setItem('usuario', data.usuario);
            navigate('/inicioAdmin');
           }
        }).catch(err => {
            console.log(err);
        });
    }
    return (
        <div className='bg-fondo min-h-screen'>
            <div className='flex flex-wrap w-full justify-around'>
                <div id="pasoUno" className={`mt-4 h-16 w-16 bg-primario text-white rounded-full flex items-center justify-center font-bold text-2xl`}>1</div>
                <div id="pasoDos" className={`mt-4 h-16 w-16 bg-gris-oscuro text-white rounded-full flex items-center justify-center font-bold text-2xl`}>2</div>
                <div id="pasoTres" className={`mt-4 h-16 w-16 bg-gris-oscuro text-white rounded-full flex items-center justify-center font-bold text-2xl`}>3</div>
                <div id="pasoCuatro" className={`mt-4 h-16 w-16 bg-gris-oscuro text-white rounded-full flex items-center justify-center font-bold text-2xl`}>4</div>
            </div>

            <Formik
                initialValues={{
                    nombreEmpresa: '',
                    telefono: '',
                    giro: '',
                    RFC: ''
                }}
                validationSchema={empresaSchema}
                onSubmit={(values) => {
                    clickBtn()
                    setRegistro({
                        ...registro,
                        nombreEmpresa: values.nombreEmpresa,
                        telefono: values.telefono,
                        giro: values.giro,
                        RFC: values.RFC
                    })
                    setTimeout(() => {
                        CambioColor();
                    }, 2000);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <div id='divPasoUno' className='w-11/12 m-auto bg-white mt-10 transition-all md:w-2/4 text-gray-600'>
                        <h3 className='font-bold text-xl ml-4'>Datos de la Empresa</h3>
                        <form className='w-10/12 m-auto mt-10' onSubmit={(e) => { e.preventDefault(); handleSubmit(e) }}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder=" "
                                    className='bg-white'
                                    name="nombreEmpresa"
                                    onChange={handleChange('nombreEmpresa')}
                                    onBlur={handleBlur('nombreEmpresa')}
                                    value={values.nombreEmpresa}
                                />
                                <label>Nombre de la Empresa</label>
                            </div>
                            {errors.nombreEmpresa && touched.nombreEmpresa && <ErrorMessage name='nombreEmpresa' component="div" className='error' />}
                            <div className="form-group">
                                <input
                                    type="text"
                                    className='bg-white'
                                    placeholder=" "
                                    name="giro"
                                    onChange={handleChange('giro')}
                                    onBlur={handleBlur('giro')}
                                    value={values.giro}
                                />
                                <label>Giro</label>
                            </div>
                            {errors.giro && touched.giro && <ErrorMessage name='giro' component="div" className='error' />}
                            <div className="form-group">
                                <input
                                    type="text"
                                    className='bg-white'
                                    placeholder=" "
                                    name="RFC"
                                    onChange={handleChange('RFC')}
                                    onBlur={handleBlur('RFC')}
                                    value={values.RFC}
                                />
                                <label>RFC</label>
                            </div>
                            {errors.RFC && touched.RFC && <ErrorMessage name='RFC' component="div" className='error' />}

                            <div className="form-group">
                                <input
                                    type="number"
                                    placeholder=" "
                                    className='bg-white'
                                    id="telefono"
                                    name='telefono'
                                    onChange={handleChange('telefono')}
                                    onBlur={handleBlur('telefono')}
                                    value={values.telefono} />
                                <label>Teléfono</label>
                            </div>
                            {errors.telefono && touched.telefono && <ErrorMessage name='telefono' component="div" className='error' />}


                            <button className='bg-gris-oscuro p-2 rounded-sm text-gray-50 mb-10'

                                type='submit'
                            >
                                SIGUIENTE
                            </button>

                        </form>
                    </div>
                )}
            </Formik>

            <Formik
                initialValues={{
                    calle: "",
                    codigoPostal: "",
                    colonia: "",
                    estado: "",
                    ciudad: "",
                }}
                validationSchema={empresaDosSchema}
                onSubmit={(values) => {
                    clickBtn();
                    setRegistro({
                        ...registro,
                        calle: values.calle,
                        codigoPostal: values.codigoPostal,
                        colonia: values.colonia,
                        estado: values.estado,
                        ciudad: values.ciudad
                    })
                    setTimeout(() => {
                        CambioColor();
                    }, 2000);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <div id='divPasoDos' className='w-11/12 m-auto bg-white mt-10 transition-all opacity-0 md:w-2/4'>
                        <h3 className='font-bold text-xl ml-4'>Lugar de Residencia</h3>
                        <form className='w-10/12 m-auto mt-10'
                            onSubmit={(e) => { e.preventDefault(); handleSubmit(e); }}
                        >

                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder=" "
                                    id="estado"
                                    className='bg-white'
                                    name='estado'
                                    onChange={handleChange('estado')}
                                    onBlur={handleBlur('estado')}
                                    value={values.estado}
                                />
                                <label>Estado</label>
                            </div>
                            {errors.estado && touched.estado && <ErrorMessage name='estado' component="div" className='error' />}
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder=" "
                                    id="ciudad"
                                    className='bg-white'
                                    name='ciudad'
                                    onChange={handleChange('ciudad')}
                                    onBlur={handleBlur('ciudad')}
                                    value={values.ciudad}
                                />
                                <label>Ciudad</label>
                            </div>
                            {errors.ciudad && touched.ciudad && <ErrorMessage name='ciudad' component="div" className='error' />}
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder=" "
                                    id="calle"
                                    name='calle'
                                    className='bg-white'
                                    onChange={handleChange('calle')}
                                    onBlur={handleBlur('calle')}
                                    value={values.calle}
                                />
                                <label>Calle y número</label>
                            </div>
                            {errors.calle && touched.calle && <ErrorMessage name='calle' component="div" className='error' />}

                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder=" "
                                    id="colonia"
                                    name='colonia'
                                    className='bg-white'
                                    onChange={handleChange('colonia')}
                                    onBlur={handleBlur('colonia')}
                                    value={values.colonia}
                                />
                                <label>Colonia</label>
                            </div>
                            {errors.colonia && touched.colonia && <ErrorMessage name='colonia' component="div" className='error' />}

                            <div className="form-group">
                                <input
                                    type="number"
                                    placeholder=" "
                                    id="codigoPostal"
                                    name='codigoPostal'
                                    className='bg-white'
                                    onChange={handleChange('codigoPostal')}
                                    onBlur={handleBlur('codigoPostal')}
                                    value={values.codigoPostal}
                                />
                                <label>Código postal</label>
                            </div>
                            {errors.codigoPostal && touched.codigoPostal && <ErrorMessage name='codigoPostal' component="div" className='error' />}

                            <div className='w-3/4 flex flex-wrap justify-around'>
                                <button
                                    type='button'
                                    className='border-2 border-gris-oscuro p-2 rounded-sm text-gris-oscuro mb-10'
                                    onClick={Retroceder}>Retroceder</button>
                                <button
                                    type='submit'
                                    className='bg-gris-oscuro p-2 rounded-sm text-gray-50 mb-10'
                                >
                                    SIGUIENTE
                                </button>

                            </div>
                        </form>
                    </div>
                )}

            </Formik>

            <Formik
                initialValues={{
                    nombre: "",
                    apellido: "",
                    edad: "",
                    fecha: "",
                    estadoCivil: ""
                }}
                validationSchema={empresaTresSchema}
                onSubmit={(values) => {
                    clickBtn();
                    setRegistro({
                        ...registro,
                        nombre: values.nombre,
                        apellido: values.apellido,
                        edad: parseInt(values.edad),
                        fecha: values.fecha,
                        estadoCivil: values.estadoCivil
                    })
                    setTimeout(() => {
                        CambioColor();
                    }, 2000);
                    //envio a la base de datos 
                    //guardar en local storage las credenciales

                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <div id='divPasoTres' className='w-11/12 m-auto bg-white mt-10 transition-all opacity-0 md:w-2/4 text-gray-600'>
                        <h3 className='font-bold text-xl ml-4 text-gray-600'>Datos Personales</h3>
                        <form
                            onSubmit={(e) => { e.preventDefault(); handleSubmit(e); }}
                            className='w-10/12 m-auto mt-10'>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder=" "
                                    id="nombre"
                                    className='bg-white'
                                    onChange={handleChange('nombre')}
                                    onBlur={handleBlur('nombre')}
                                    value={values.nombre}
                                />
                                <label>Nombre</label>
                            </div>
                            {errors.nombre && touched.nombre && <ErrorMessage name='nombre' component="div" className='error' />}
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder=" "
                                    id="apellido"
                                    className='bg-white'
                                    onChange={handleChange('apellido')}
                                    onBlur={handleBlur('apellido')}
                                    value={values.apellido}
                                />
                                <label>Apellido</label>
                            </div>
                            {errors.apellido && touched.apellido && <ErrorMessage name='apellido' component="div" className='error' />}
                            <div className="form-group">
                                <input
                                    type="number"
                                    placeholder=" "
                                    id="edad"
                                    name='edad'
                                    className='bg-white'
                                    onChange={handleChange('edad')}
                                    onBlur={handleBlur('edad')}
                                    value={values.edad}
                                />
                                <label>Edad</label>
                            </div>
                            {errors.edad && touched.edad && <ErrorMessage name='edad' component="div" className='error' />}
                            <div className="form-group">
                                <input
                                    type="date"
                                    placeholder=" "
                                    id="fecha"
                                    name='fecha'
                                    className='calendario'
                                    onChange={handleChange('fecha')}
                                    onBlur={handleBlur('fecha')}
                                    value={values.fecha}
                                />
                                <label>Fecha de nacimiento</label>
                            </div>
                            {errors.fecha && touched.fecha && <ErrorMessage name='fecha' component="div" className='error' />}

                            <div className="form-group">
                                <select className="bg-white select select-bordered w-full "
                                    onChange={handleChange('estadoCivil')}
                                    onBlur={handleBlur('estadoCivil')}
                                    name='estadoCivil'
                                >
                                    <option defaultValue='Soltero'>Estado cívil</option>
                                    <option>soltero/a</option>
                                    <option>casado/a</option>
                                    <option>viudo/a</option>
                                    <option>divorciado/a</option>
                                </select>
                            </div>
                            {errors.estadoCivil && touched.estadoCivil && <ErrorMessage name='estadoCivil' component="div" className='error' />}

                            <div className='w-3/4 flex flex-wrap justify-around mt-10'>
                                <button
                                    type='button'
                                    className='border-2 border-gris-oscuro p-2 rounded-sm text-gris-oscuro mb-10'
                                    onClick={Retroceder}>Retroceder</button>
                                <button
                                    type='submit'
                                    className='bg-gris-oscuro p-2 rounded-sm text-gray-50 mb-10'
                                >SIGUIENTE</button>

                            </div>
                        </form>
                    </div>
                )}

            </Formik>

            <Formik
                initialValues={{
                    correo: "",
                    contrasenia: "",
                    confirmarContrasenia: "",
                }}
                validationSchema={empresaCuatroSchema}
                onSubmit={(values) => {
                    clickBtn();
                    setRegistro({
                        ...registro,
                        contrasenia: values.contrasenia,
                        correo: values.correo
                    })
                    setTimeout(() => {
                        CambioColor();
                    }, 2000);
                    //envio a la base de datos 
                    //guardar en local storage las credenciales
                    insertarUsuario(registro as Empresa, values.correo, values.contrasenia);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <div id='divPasoCuatro' className='w-11/12 m-auto bg-white mt-10 transition-all opacity-0 md:w-2/4 text-gray-600'>
                        <h3 className='font-bold text-xl ml-4 text-gray-600'>Credenciales</h3>
                        <form
                            onSubmit={(e) => { e.preventDefault(); handleSubmit(e); }}
                            className='w-10/12 m-auto mt-10'>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder=" "
                                    id="correo"
                                    name='correo'
                                    className='bg-white'
                                    onChange={handleChange('correo')}
                                    onBlur={handleBlur('correo')}
                                    value={values.correo}
                                />
                                <label>Correo</label>
                            </div>
                            {errors.correo && touched.correo && <ErrorMessage name='correo' component="div" className='error' />}

                            <div className="form-group">
                                <input
                                    type="password"
                                    placeholder=" "
                                    id="pass"
                                    className='bg-white'
                                    onChange={handleChange('contrasenia')}
                                    onBlur={handleBlur('contrasenia')}
                                    value={values.contrasenia}
                                />
                                <label>Contraseña</label>
                            </div>
                            {errors.contrasenia && touched.contrasenia && <ErrorMessage name='contrasenia' component="div" className='error' />}

                            <div className="form-group">
                                <input
                                    type="password"
                                    placeholder=" "
                                    id="Confirmpass"
                                    className='bg-white'
                                    onChange={handleChange('confirmarContrasenia')}
                                    onBlur={handleBlur('confirmarContrasenia')}
                                    value={values.confirmarContrasenia}
                                />
                                <label>Confirmar contraseña</label>
                            </div>
                            {errors.confirmarContrasenia && touched.confirmarContrasenia && <ErrorMessage name='confirmarContrasenia' component="div" className='error' />}

                            <div className='w-3/4 flex flex-wrap justify-around mt-10'>
                                <button
                                    type='button'
                                    className='border-2 border-gris-oscuro p-2 rounded-sm text-gris-oscuro mb-10'
                                    onClick={Retroceder}>Retroceder</button>
                                <button
                                    type='submit'
                                    className='bg-gris-oscuro p-2 rounded-sm text-gray-50 mb-10'
                                >SIGUIENTE</button>

                            </div>
                        </form>
                    </div>
                )}

            </Formik>


        </div>
    )
}
