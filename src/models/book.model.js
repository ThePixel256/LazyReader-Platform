import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    autor: {
        type: String,
        required: true,
        trim: true
    },
    genero: {
        type: String,
        required: true,
        trim: true
    },
    fechaPublicacion: {
        type: Date,
        required: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    estado: {
        type: String,
        enum: ["disponible", "no disponible"],
        default: "disponible"
    }
}, {
    timestamps: true
});

export default mongoose.model("Book", bookSchema);
