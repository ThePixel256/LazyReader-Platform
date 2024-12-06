import Book from "../models/book.model.js";

// Crear un nuevo libro
export const agregarLibro = async (req, res) => {
    const { titulo, autor, genero, fechaPublicacion, descripcion, estado } = req.body;

    try {
        const nuevoLibro = new Book({ titulo, autor, genero, fechaPublicacion, descripcion, estado });

        const libroGuardado = await nuevoLibro.save();
        res.status(201).json({
            message: "Libro agregado exitosamente",
            libro: libroGuardado
        });
    } catch (error) {
        console.error("Error al guardar el libro:", error);
        res.status(500).json({ message: "Error al agregar libro" });
    }
};

// Obtener todos los libros
export const obtenerLibros = async (req, res) => {
    try {
        const libros = await Book.find();
        res.status(200).json(libros);
    } catch (error) {
        console.error("Error al obtener los libros:", error);
        res.status(500).json({ message: "Error al obtener libros" });
    }
};

// Obtener un libro por ID
export const obtenerLibro = async (req, res) => {
    const { id } = req.params;

    try {
        const libro = await Book.findById(id);
        if (!libro) {
            return res.status(404).json({ message: "Libro no encontrado" });
        }
        res.status(200).json(libro);
    } catch (error) {
        console.error("Error al obtener el libro:", error);
        res.status(500).json({ message: "Error al obtener libro" });
    }
};

// Actualizar un libro por ID
export const actualizarLibro = async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;

    try {
        const libroActualizado = await Book.findByIdAndUpdate(id, datosActualizados, { new: true });
        if (!libroActualizado) {
            return res.status(404).json({ message: "Libro no encontrado" });
        }
        res.status(200).json({
            message: "Libro actualizado exitosamente",
            libro: libroActualizado
        });
    } catch (error) {
        console.error("Error al actualizar el libro:", error);
        res.status(500).json({ message: "Error al actualizar libro" });
    }
};

// Eliminar un libro por ID
export const eliminarLibro = async (req, res) => {
    const { id } = req.params;

    try {
        const libroEliminado = await Book.findByIdAndDelete(id);
        if (!libroEliminado) {
            return res.status(404).json({ message: "Libro no encontrado" });
        }
        res.status(200).json({ message: "Libro eliminado exitosamente" });
    } catch (error) {
        console.error("Error al eliminar el libro:", error);
        res.status(500).json({ message: "Error al eliminar libro" });
    }
};
