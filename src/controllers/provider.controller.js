import Provider from "../models/provider.model.js"; // Asegúrate de tener el modelo Provider

// Crear un nuevo proveedor
export const agregarProveedor = async (req, res) => {
    const { nombre, correo, telefono, pais, servicio, estado } = req.body;

    try {
        const nuevoProveedor = new Provider({ nombre, correo, telefono, pais, servicio, estado });

        const proveedorGuardado = await nuevoProveedor.save();
        res.status(201).json({
            message: "Proveedor agregado exitosamente",
            proveedor: proveedorGuardado
        });
    } catch (error) {
        console.error("Error al guardar el proveedor:", error);
        res.status(500).json({ message: "Error al agregar proveedor" });
    }
};

// Obtener todos los proveedores
export const obtenerProveedores = async (req, res) => {
    try {
        const proveedores = await Provider.find();
        res.status(200).json(proveedores);
    } catch (error) {
        console.error("Error al obtener los proveedores:", error);
        res.status(500).json({ message: "Error al obtener proveedores" });
    }
};

// Actualizar un proveedor por ID
export const actualizarProveedor = async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;

    try {
        const proveedorActualizado = await Provider.findByIdAndUpdate(id, datosActualizados, { new: true });
        if (!proveedorActualizado) {
            return res.status(404).json({ message: "Proveedor no encontrado" });
        }
        res.status(200).json({
            message: "Proveedor actualizado exitosamente",
            proveedor: proveedorActualizado
        });
    } catch (error) {
        console.error("Error al actualizar el proveedor:", error);
        res.status(500).json({ message: "Error al actualizar proveedor" });
    }
};

// Eliminar un proveedor por ID
export const eliminarProveedor = async (req, res) => {
    const { id } = req.params;

    try {
        const proveedorEliminado = await Provider.findByIdAndDelete(id);
        if (!proveedorEliminado) {
            return res.status(404).json({ message: "Proveedor no encontrado" });
        }
        res.status(200).json({ message: "Proveedor eliminado exitosamente" });
    } catch (error) {
        console.error("Error al eliminar el proveedor:", error);
        res.status(500).json({ message: "Error al eliminar proveedor" });
    }
};