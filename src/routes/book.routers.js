import express from "express";
import { agregarLibro, obtenerLibros, obtenerLibro, actualizarLibro, eliminarLibro } from "../controllers/book.controller.js";
import { authRequired } from "../middlewares/ValidateToken.js"; // Si necesitas protección de rutas
import { validateBook } from "../middlewares/ValidateBook.js"; // Middleware para validar los datos del libro

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: API for managing books
 */

/**
 * @swagger
 * /api/v1/books:
 *   post:
 *     summary: Add a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - author
 *             properties:
 *               title:
 *                 type: string
 *                 description: Book title
 *               author:
 *                 type: string
 *                 description: Book author
 *     responses:
 *       200:
 *         description: Book added successfully
 *       400:
 *         description: Invalid input
 */
router.post("", authRequired, validateBook, agregarLibro); // Crear libro con validación y autenticación

/**
 * @swagger
 * /api/v1/books:
 *   get:
 *     summary: Get all books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: List of books
 *       401:
 *         description: Unauthorized
 */
router.get("", authRequired, obtenerLibros); // Leer todos los libros con autenticación

/**
 * @swagger
 * /api/v1/books/{id}:
 *   get:
 *     summary: Get a book by ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Book ID
 *     responses:
 *       200:
 *         description: Book details
 *       404:
 *         description: Book not found
 */
router.get("/:id", authRequired, obtenerLibro); // Leer un libro por ID

/**
 * @swagger
 * /api/v1/books/{id}:
 *   put:
 *     summary: Update a book
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Book ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - author
 *             properties:
 *               title:
 *                 type: string
 *                 description: Book title
 *               author:
 *                 type: string
 *                 description: Book author
 *     responses:
 *       200:
 *         description: Book updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Book not found
 */
router.put("/:id", authRequired, validateBook, actualizarLibro); // Actualizar libro con validación y autenticación

/**
 * @swagger
 * /api/v1/books/{id}:
 *   delete:
 *     summary: Delete a book
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Book ID
 *     responses:
 *       200:
 *         description: Book deleted successfully
 *       404:
 *         description: Book not found
 */
router.delete("/:id", authRequired, eliminarLibro); // Eliminar libro con autenticación

export default router;