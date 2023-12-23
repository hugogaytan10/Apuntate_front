import React from 'react'
import { ErrorMessage, Formik } from 'formik';

export const Perfil = () => {
    return (
        <div className='block min-h-screen w-full bg-fondo'>
            <h3 className='text-center text-lg font-bold '>Hola Rogelio! esta es tu información</h3>

            <Formik
                initialValues={{
                    nombreCompleto: '',
                    edad: '',
                    telefono: '',
                    estadoCivil: '',
                    fecha: '',
                    calle: "",
                    codigoPostal: "",
                    colonia: "",
                    estado: "",
                    contrasenia: "",
                    confirmarContrasenia: "",
                }}
                onSubmit={(values) => {

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
                                    name="nombreCompleto"
                                    onChange={handleChange('nombreCompleto')}
                                    onBlur={handleBlur('nombreCompleto')}
                                    value={values.nombreCompleto}
                                />
                                <label>Nombre Completo</label>
                            </div>
                            {errors.nombreCompleto && touched.nombreCompleto && <ErrorMessage name='nombreCompleto' component="div" className='error' />}
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

                            <button className='bg-blue-700 p-2 rounded-sm text-gray-50 mb-10'

                                type='submit'
                            >
                                ACTUALIZAR
                            </button>

                        </form>
                    </div>
                )}
            </Formik>


        </div>
    )
}
