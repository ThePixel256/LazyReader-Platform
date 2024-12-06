import * as yup from 'yup';

export const bookSchema = yup.object({
    titulo: yup
        .string()
        .required("El título es obligatorio")
        .trim("El título no debe tener espacios al inicio o al final"),
    autor: yup
        .string()
        .required("El autor es obligatorio")
        .trim("El autor no debe tener espacios al inicio o al final"),
    genero: yup
        .string()
        .required("El género es obligatorio")
        .trim("El género no debe tener espacios al inicio o al final"),
    fechaPublicacion: yup
        .date()
        .required("La fecha de publicación es obligatoria")
        .max(new Date(), "La fecha de publicación no puede ser futura"),
    descripcion: yup
        .string()
        .required("La descripción es obligatoria")
        .trim("La descripción no debe tener espacios al inicio o al final"),
    estado: yup
        .string()
        .oneOf(["disponible", "no disponible"], "El estado debe ser 'disponible' o 'no disponible'")
        .default("disponible")
});
