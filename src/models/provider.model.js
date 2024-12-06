import mongoose from "mongoose";

const providerSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    correo: {
        type: String,
        required: true,
        trim: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Valida formato de email
    },
    telefono: {
        type: String,
        required: true,
        trim: true,
        match: /^\d{9}$/ // Valida que el teléfono tenga exactamente 9 dígitos
    },
    pais: {
        type: String,
        required: true,
        trim: true
    },
    servicio: {
        type: String,
        required: true,
        trim: true
    },
    estado: {
        type: String,
        enum: ["activo", "inactivo"],
        default: "activo"
    }
}, {
    timestamps: true
});

export default mongoose.model("Provider", providerSchema);
