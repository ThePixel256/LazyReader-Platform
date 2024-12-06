import { bookSchema } from "../schemas/book.schema.js"; // Asegúrate de tener el archivo book.schema.js

export const validateBook = (req, res, next) => {
    bookSchema.validate(req.body, { abortEarly: false })
        .then(() => {
            next(); // Si la validación es exitosa, pasa al siguiente middleware
        })
        .catch((err) => {
            res.status(400).json({
                errors: err.inner.map(e => ({
                    path: e.path,
                    message: e.message
                }))
            });
        });
};
