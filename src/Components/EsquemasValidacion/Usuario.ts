import { object, string, number, ref } from "yup";

export let usuarioSchema = object({
    nombreCompleto: string().required("Nombre requerido"),
    edad: number().positive().required('Edad requerida'),
    telefono: number().positive().required('teléfono requerido'),
});

export let usuarioDosSchema = object({
    estado: string().required("Estado requerido"),
    calle: string().required("Calle y numero requerido"),
    colonia: string().required("Colonia requerida"),
    codigoPostal: string().required("Código postal requerido")
})

export let usuarioTresSchema = object({
    correo: string()
        .email("Correo electrónico inválido")
        .required("El correo electrónico es requerido"),
    contrasenia: string()
        .required("La contraseña es requerida")
        .min(8, "La contraseña debe tener al menos 8 caracteres"),
    confirmarContrasenia: string()
        .required("La confirmación de contraseña es requerida")
        .oneOf([ref('contrasenia')], "Las contraseñas deben coincidir")
});

export let usuarioCompletoSchema = object({ ...usuarioSchema.fields, ...usuarioDosSchema.fields, ...usuarioTresSchema.fields });