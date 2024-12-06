import * as yup from 'yup';

export const clientSchema = yup.object({
    nombre: yup
        .string()
        .required("El nombre es obligatorio")
        .trim("El nombre no debe tener espacios al inicio o al final"),
    correo: yup
        .string()
        .email("Ingrese un correo electrónico válido")
        .required("El correo es obligatorio"),
    telefono: yup
        .string()
        .required("El teléfono es obligatorio")
        .matches(/^\d{9}$/, "El teléfono debe tener exactamente 9 dígitos y solo números"),
    pais: yup
        .string()
        .required("El país es obligatorio"),
    servicio: yup
        .string()
        .required("El servicio es obligatorio"),
    estado: yup
        .string()
        .oneOf(["activo", "inactivo"], "El estado debe ser 'activo' o 'inactivo'")
        .required("El estado es obligatorio"),
});
