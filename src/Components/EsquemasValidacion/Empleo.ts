import { object, string, number, ref } from "yup";
export let empleoSchema = object({
    titulo: string().required('Titulo requerido'),
    descripcion: string().required('Campo requerido'),
    salario: number().required('Salario requerido'),
    ubicacion: string().required('Ubicación requerida'),
    tiempo: string().required('Tipo de horario'),
    contrato: string().required('Tipo de contrato requerido'),
    modalidad: string().required('Modalidad requerida'),
})