import { providerSchema } from "../schemas/provider.schema.js"; // Asegúrate de tener el archivo provider.schema.js

export const validateProvider = (req, res, next) => {
    providerSchema.validate(req.body, { abortEarly: false })
    .then(() => {
        next(); // Si la validación es exitosa, pasa al siguiente middleware
    })
    .catch((err) => {
        res.status(400).json({errors: err.inner.map(e => ({
            path: e.path,
            message: e.message
        }))})
    })
}