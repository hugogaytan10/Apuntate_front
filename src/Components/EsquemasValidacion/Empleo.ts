import { object, string, number, ref } from "yup";
export let empleoSchema = object({
    titulo: string().required('Titulo requerido'),
    descripcion: string().required('Campo requerido'),
    salario: number().required('Salario requerido'),
    ubicacion: string().required('Ubicación requerida'),
    timpo: string().required('Tipo de horario'),
    empresa: string().required('Nombre de la empresa requerido')
})