import React, { useState } from 'react'
import { Empresa } from '../Modelos/Empresa'
import { ErrorMessage, Formik } from 'formik';
import { empresaDosSchema, empresaSchema, empresaTresSchema } from '../EsquemasValidacion/Empresa';
export const RegistroCompania = () => {
    const [paso, setPaso] = useState(0);
    const [registro, setRegistro] = useState<Partial<Empresa>>();
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
        }
        setPaso(paso - 1);
    }
    return (
        <div className='bg-fondo min-h-screen'>
            <div className='flex flex-wrap w-full justify-around'>
                <div id="pasoUno" className={`mt-4 h-16 w-16 bg-primario text-white rounded-full flex items-center justify-center font-bold text-2xl`}>1</div>
                <div id="pasoDos" className={`mt-4 h-16 w-16 bg-gris-oscuro text-white rounded-full flex items-center justify-center font-bold text-2xl`}>2</div>
                <div id="pasoTres" className={`mt-4 h-16 w-16 bg-gris-oscuro text-white rounded-full flex items-center justify-center font-bold text-2xl`}>3</div>
            </div>

            <Formik
                initialValues={{
                    nombreEmpresa: '',
                    edad: '',
                    telefono: '',
                    estadoCivil: '',
                    fecha: '',
                    giro: '',
                }}
                validationSchema={empresaSchema}
                onSubmit={(values) => {
                    CambioColor();
                    setRegistro({
                        ...registro,
                        nombreEmpresa: values.nombreEmpresa,
                        edad: parseInt(values.edad),
                        telefono: values.telefono,
                        estadoCivil: values.estadoCivil,
                        fecha: values.fecha,
                        giro: values.giro
                    })
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
                    <div id='divPasoUno' className='w-11/12 m-auto bg-white mt-10 transition-all md:w-2/4'>
                        <h3 className='font-bold text-xl ml-4'>Datos Personales</h3>
                        <form className='w-10/12 m-auto mt-10' onSubmit={(e) => { e.preventDefault(); handleSubmit(e) }}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder=" "
                                    name="nombreEmpresa"
                                    onChange={handleChange('nombreEmpresa')}
                                    onBlur={handleBlur('nombreEmpresa')}
                                    value={values.nombreEmpresa}
                                />
                                <label>Nombre Completo</label>
                            </div>
                            {errors.nombreEmpresa && touched.nombreEmpresa && <ErrorMessage name='nombreEmpresa' component="div" className='error' />}
                            <div className="form-group">
                                <input
                                    type="text"
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
                                    type="number"
                                    placeholder=" "
                                    id="edad"
                                    name='edad'
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
                                    onChange={handleChange('fecha')}
                                    onBlur={handleBlur('fecha')}
                                    value={values.fecha}
                                />
                                <label>Fecha de nacimiento</label>
                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    placeholder=" "
                                    id="telefono"
                                    name='telefono'
                                    onChange={handleChange('telefono')}
                                    onBlur={handleBlur('telefono')}
                                    value={values.telefono} />
                                <label>Teléfono</label>
                            </div>
                            {errors.telefono && touched.telefono && <ErrorMessage name='telefono' component="div" className='error' />}
                            <div className="form-group">
                                <select className="select select-bordered w-full max-w-xs"
                                    onChange={handleChange('estadoCivil')}
                                    onBlur={handleBlur('estadoCivil')}
                                    name='estadoCivil'
                                >
                                    <option defaultValue='Soltero'>Estado cívil</option>
                                    <option>Solter@</option>
                                    <option>Casad@</option>
                                    <option>Viud@</option>
                                </select>
                            </div>

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
                }}
                validationSchema={empresaDosSchema}
                onSubmit={(values) => {
                    CambioColor();
                    setRegistro({
                        ...registro,
                        calle: values.calle,
                        codigoPostal: values.codigoPostal,
                        colonia: values.colonia,
                        estado: values.estado
                    })
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
                                    id="calle"
                                    name='calle'
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
                    correo: "",
                    contrasenia: "",
                    confirmarContrasenia: "",
                }}
                validationSchema={empresaTresSchema}
                onSubmit={(values) => {
                    CambioColor();
                    setRegistro({
                        ...registro,
                        contrasenia: values.contrasenia,
                        correo: values.correo
                    })

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
                    <div id='divPasoTres' className='w-11/12 m-auto bg-white mt-10 transition-all opacity-0 md:w-2/4'>
                        <h3 className='font-bold text-xl ml-4'>Credenciales</h3>
                        <form
                            onSubmit={(e) => { e.preventDefault(); handleSubmit(e); }}
                            className='w-10/12 m-auto mt-10'>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder=" "
                                    id="correo"
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
