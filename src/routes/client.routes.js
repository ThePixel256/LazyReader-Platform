import express from "express";
import { agregarCliente, obtenerClientes, actualizarCliente, eliminarCliente } from "../controllers/client.controller.js";
import { authRequired } from "../middlewares/ValidateToken.js"; // Si necesitas protección de rutas
import { validateClient } from "../middlewares/ValidateClient.js"; // Middleware para validar los datos del cliente

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Clients
 *   description: API for managing clients
 */

/**
 * @swagger
 * /api/v1/clients:
 *   post:
 *     summary: Add a new client
 *     tags: [Clients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *                 description: Client's name
 *               email:
 *                 type: string
 *                 description: Client's email
 *     responses:
 *       200:
 *         description: Client added successfully
 *       400:
 *         description: Invalid input
 */
router.post("", authRequired, validateClient, agregarCliente); // Crear cliente con validación y autenticación

/**
 * @swagger
 * /api/v1/clients:
 *   get:
 *     summary: Get all clients
 *     tags: [Clients]
 *     responses:
 *       200:
 *         description: List of clients
 *       401:
 *         description: Unauthorized
 */
router.get("", authRequired, obtenerClientes); // Leer todos los clientes con autenticación

/**
 * @swagger
 * /api/v1/clients/{id}:
 *   put:
 *     summary: Update a client
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Client ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *                 description: Client's name
 *               email:
 *                 type: string
 *                 description: Client's email
 *     responses:
 *       200:
 *         description: Client updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Client not found
 */
router.put("/:id", authRequired, validateClient, actualizarCliente); // Actualizar cliente con validación y autenticación

/**
 * @swagger
 * /api/v1/clients/{id}:
 *   delete:
 *     summary: Delete a client
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Client ID
 *     responses:
 *       200:
 *         description: Client deleted successfully
 *       404:
 *         description: Client not found
 */
router.delete("/:id", authRequired, eliminarCliente); // Eliminar cliente con autenticación

export default router;