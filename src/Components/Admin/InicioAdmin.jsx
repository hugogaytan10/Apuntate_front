import React from 'react'
import './InicioAdmin.css'
import buscador from '../../assets/search.svg'
import add from '../../assets/add.svg'
import { NavLink } from 'react-router-dom'
import { ErrorMessage, Formik } from 'formik';
import { empleoSchema } from '../EsquemasValidacion/Empleo'
export const InicioAdmin = () => {
    return (
        <div className='block min-h-screen w-full bg-fondo'>
            <div className='contenedor-buscador'>
                <span className='franja-lateral'></span>
                <div className='inputIcono'>
                    <input type="text" className='inputBuscador' placeholder='Buscar empleo' />
                    <img src={buscador} alt="buscador" />
                </div>
                <button className='block m-auto w-2/4 bg-primario text-gray-50 rounded-sm p-1 mb-2 md:w-1/4'>BUSCAR</button>
            </div>
            <div className='flex flex-wrap w-full justify-center mt-4 gap-4'>

                <div className='contenedor-empleo relative flex flex-wrap md:w-1/4'>
                    <span className='franja-lateral'></span>
                    <p className='block w-full ml-4 font-bold text-lg'>Estilista</p>
                    <div className='block w-full'>
                        <ul className='flex flex-wrap justify-around items-center'>
                            <ol className='text-detalles'>Hace un día</ol>
                            <ol className='text-detalles'>Tiempo completo</ol>
                            <ol className='text-detalles'>Moroleón</ol>
                        </ul>
                    </div>
                    <div className='flex justify-around w-full'>
                        <NavLink className='bg-gris-oscuro text-gray-50 m-auto w-1/3 p-1 rounded-sm text-base text-center' to='/postuladosAdmin'>Postulados</NavLink>
                        <button
                            onClick={() => document.getElementById('my_modal_2').showModal()}
                            className='bg-blue-600 text-gray-50 m-auto w-1/4 p-1 rounded-sm text-base text-center'>Editar</button>
                        <button
                            onClick={() => document.getElementById('my_modal_3').showModal()}
                            className='bg-red-500 text-gray-50 m-auto w-1/4 p-1 rounded-sm text-base text-center'>Eliminar</button>
                    </div>
                </div>

            </div>

            <button
                onClick={() => document.getElementById('my_modal_1').showModal()}
                className='fixed bottom-2 right-1'>
                <img src={add} alt='add' />
            </button>



            {/*MODAL PARA AGREGAR */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Registrar empleo</h3>
                    <div className="modal-action">
                        <Formik
                            initialValues={{
                                titulo: '',
                                descripcion: '',
                                salario: '',
                                ubicacion: '',
                                tiempo: '',
                                empresa: ''
                            }}
                            validationSchema={empleoSchema}
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

                                <form
                                    className='w-full '
                                    method="dialog" onSubmit={(e) => { e.preventDefault(); handleSubmit(e) }}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder=" "
                                            name="titulo"
                                            onChange={handleChange('titulo')}
                                            onBlur={handleBlur('titulo')}
                                            value={values.titulo}
                                        />
                                        <label>Título</label>
                                    </div>
                                    {errors.titulo && touched.titulo && <ErrorMessage name='titulo' component="div" className='error' />}

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder=" "
                                            name="descripcion"
                                            onChange={handleChange('descripcion')}
                                            onBlur={handleBlur('descripcion')}
                                            value={values.descripcion}
                                        />
                                        <label>Descripción</label>
                                    </div>
                                    {errors.descripcion && touched.descripcion && <ErrorMessage name='descripcion' component="div" className='error' />}

                                    <div className="form-group">
                                        <input
                                            type="number"
                                            placeholder=" "
                                            name="salario"
                                            onChange={handleChange('salario')}
                                            onBlur={handleBlur('salario')}
                                            value={values.salario}
                                        />
                                        <label>salario</label>
                                    </div>
                                    {errors.salario && touched.salario && <ErrorMessage name='salario' component="div" className='error' />}

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder=" "
                                            name="ubicacion"
                                            onChange={handleChange('ubicacion')}
                                            onBlur={handleBlur('ubicacion')}
                                            value={values.salario}
                                        />
                                        <label>Ubicación</label>
                                    </div>
                                    {errors.ubicacion && touched.ubicacion && <ErrorMessage name='ubicacion' component="div" className='error' />}
                                    <div className="form-group">
                                        <select

                                            name="tiempo"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.tiempo}
                                        >
                                            <option value="">Selecciona el tipo de tiempo</option>
                                            <option value="tiempoCompleto">Tiempo completo</option>
                                            <option value="medioTiempo">Medio tiempo</option>
                                            <option value="indefinido">Indefinido</option>
                                        </select>
                                    </div>
                                    {errors.tiempo && touched.tiempo && <ErrorMessage name='tiempo' component="div" className='error' />}

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder=" "
                                            name="empresa"
                                            onChange={handleChange('empresa')}
                                            onBlur={handleBlur('empresa')}
                                            value={values.salario}
                                        />
                                        <label>Empresa</label>
                                    </div>
                                    {errors.empresa && touched.empresa && <ErrorMessage name='empresa' component="div" className='error' />}

                                    <div className='w-full flex justify-around'>
                                        <button
                                            className='bg-blue-600 p-2 rounded-lg text-gray-50 mb-10 btn'
                                            type='submit'
                                        >GUARDAR</button>
                                        <button
                                            type='button'
                                            onClick={() => { document.getElementById('my_modal_1').close(); }}
                                            className="btn bg-white text-red-500 border-red-500">CERRAR</button>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </dialog>

            {/* MODAL DE ACUTALIZAR */}
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Actualizar empleo</h3>
                    <div className="modal-action">
                        <Formik
                            initialValues={{
                                titulo: '',
                                descripcion: '',
                                salario: '',
                                ubicacion: '',
                                tiempo: '',
                                empresa: ''
                            }}
                            validationSchema={empleoSchema}
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

                                <form
                                    className='w-full '
                                    method="dialog" onSubmit={(e) => { e.preventDefault(); handleSubmit(e) }}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder=" "
                                            name="titulo"
                                            onChange={handleChange('titulo')}
                                            onBlur={handleBlur('titulo')}
                                            value={values.titulo}
                                        />
                                        <label>Título</label>
                                    </div>
                                    {errors.titulo && touched.titulo && <ErrorMessage name='titulo' component="div" className='error' />}

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder=" "
                                            name="descripcion"
                                            onChange={handleChange('descripcion')}
                                            onBlur={handleBlur('descripcion')}
                                            value={values.descripcion}
                                        />
                                        <label>Descripción</label>
                                    </div>
                                    {errors.descripcion && touched.descripcion && <ErrorMessage name='descripcion' component="div" className='error' />}

                                    <div className="form-group">
                                        <input
                                            type="number"
                                            placeholder=" "
                                            name="salario"
                                            onChange={handleChange('salario')}
                                            onBlur={handleBlur('salario')}
                                            value={values.salario}
                                        />
                                        <label>salario</label>
                                    </div>
                                    {errors.salario && touched.salario && <ErrorMessage name='salario' component="div" className='error' />}

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder=" "
                                            name="ubicacion"
                                            onChange={handleChange('ubicacion')}
                                            onBlur={handleBlur('ubicacion')}
                                            value={values.salario}
                                        />
                                        <label>Ubicación</label>
                                    </div>
                                    {errors.ubicacion && touched.ubicacion && <ErrorMessage name='ubicacion' component="div" className='error' />}
                                    <div className="form-group">
                                        <select

                                            name="tiempo"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.tiempo}
                                        >
                                            <option value="">Selecciona el tipo de tiempo</option>
                                            <option value="tiempoCompleto">Tiempo completo</option>
                                            <option value="medioTiempo">Medio tiempo</option>
                                            <option value="indefinido">Indefinido</option>
                                        </select>
                                    </div>
                                    {errors.tiempo && touched.tiempo && <ErrorMessage name='tiempo' component="div" className='error' />}

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder=" "
                                            name="empresa"
                                            onChange={handleChange('empresa')}
                                            onBlur={handleBlur('empresa')}
                                            value={values.salario}
                                        />
                                        <label>Empresa</label>
                                    </div>
                                    {errors.empresa && touched.empresa && <ErrorMessage name='empresa' component="div" className='error' />}

                                    <div className='w-full flex justify-around'>
                                        <button
                                            className='bg-blue-600 p-2 rounded-lg text-gray-50 mb-10 btn'
                                            type='submit'
                                        >ACTUALIZAR</button>
                                        <button
                                            type='button'
                                            onClick={() => { document.getElementById('my_modal_2').close(); }}
                                            className="btn bg-white text-red-500 border-red-500">CERRAR</button>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </dialog>

            {/* MODAL DE ACUTALIZAR */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Registrar empleo</h3>
                    <p>¿Estás apunto de eliminar un empleo, estas seguro?</p>
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
